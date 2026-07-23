# -*- coding: utf-8 -*-
import os, cv2
import numpy as np
from PIL import Image, ImageDraw, ImageEnhance, ImageFilter

base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
cropped_dir = os.path.join(base_dir, 'cropped')
brain_dir = r'C:\Users\owner\.gemini\antigravity\brain\96f9f0cb-21ba-4acc-94ca-5ea9095d0775'

os.makedirs(cropped_dir, exist_ok=True)

src_path = os.path.join(brain_dir, 'ninnik_3branches_shell5_1784750842605.jpg')

if os.path.exists(src_path):
    img = Image.open(src_path).convert('RGB')
    arr = np.array(img)
    h, w, c = arr.shape

    # Convert to HSV for precise color isolation & paint tip editing
    hsv = cv2.cvtColor(arr, cv2.COLOR_RGB2HSV)
    
    # 1. Isolate the downward branch tip area (near bottom-center / bottom-left)
    # Target region where branch tip is located
    # Paint very tip with vivid bright orange (#FF5000: H=10, S=240, V=245)
    # We create a mask for the tip of the downward branch
    
    # Find branch pixels in the bottom region (y > 0.55*h, x between 0.2*w and 0.6*w)
    branch_region = np.zeros((h, w), dtype=np.uint8)
    branch_region[int(h*0.52):int(h*0.88), int(w*0.22):int(w*0.58)] = 255
    
    # Existing paint/tip mask inside branch region
    # Look for paint colors or dark wood tip
    dark_wood = (hsv[:,:,2] < 160) & (branch_region > 0)
    
    # Find the lowest/tip point of the downward branch
    y_indices, x_indices = np.where(dark_wood)
    if len(y_indices) > 0:
        # Find tip near the lowest y
        tip_y = np.max(y_indices)
        tip_x = x_indices[np.argmax(y_indices)]
        
        # Clean any dripping below tip_y by restoring white background below tip
        drip_mask = np.zeros((h, w), dtype=bool)
        drip_mask[tip_y+3:, :] = True
        
        # Fill dripping area with white background
        arr[drip_mask & (arr[:,:,0] > 200) & (arr[:,:,1] > 200)] = [255, 255, 255]
        
        # Apply vibrant vivid orange (#FF4500 -> RGB: 255, 69, 0) strictly to the very tip
        tip_mask = np.zeros((h, w), dtype=np.uint8)
        cv2.circle(tip_mask, (tip_x, tip_y - 8), 16, 255, -1)
        
        # Combine with branch mask so it only paints the tip of the branch
        tip_wood_mask = (tip_mask > 0) & (hsv[:,:,2] < 220)
        
        # Blend vivid orange smoothly onto the tip
        orange_rgb = np.array([255, 75, 0], dtype=np.uint8)
        arr[tip_wood_mask] = (arr[tip_wood_mask].astype(float) * 0.25 + orange_rgb * 0.75).astype(np.uint8)

    # 2. Warm Retro Picture-Book Color Grading on the artwork
    # Enhance warmth and soft watercolor saturation slightly
    edited_img = Image.fromarray(arr, mode='RGB')
    enhancer_color = ImageEnhance.Color(edited_img)
    edited_img = enhancer_color.enhance(1.15)
    
    enhancer_contrast = ImageEnhance.Contrast(edited_img)
    edited_img = enhancer_contrast.enhance(1.05)
    
    edited_arr = np.array(edited_img)
    
    # 3. Save updated JPG
    edited_jpg_path = os.path.join(brain_dir, 'ninnik_3branches_retro_edited.jpg')
    edited_img.save(edited_jpg_path, 'JPEG', quality=95)
    print("Saved edited JPG:", edited_jpg_path)
    
    # 4. Extract outer background cleanly to transparent PNG
    bgr = cv2.cvtColor(edited_arr, cv2.COLOR_RGB2BGR)
    ff_mask = np.zeros((h + 2, w + 2), np.uint8)
    
    seeds = []
    for x in range(0, w, 4):
        seeds.append((x, 0))
        seeds.append((x, h - 1))
    for y in range(0, h, 4):
        seeds.append((0, y))
        seeds.append((w - 1, y))
        
    for sx, sy in seeds:
        cv2.floodFill(bgr, ff_mask, (sx, sy), (255, 255, 255), (25, 25, 25), (25, 25, 25), cv2.FLOODFILL_FIXED_RANGE)
        
    outer_bg = (ff_mask[1:h+1, 1:w+1] > 0)
    fg_mask = (~outer_bg).astype(np.uint8) * 255
    
    contours, _ = cv2.findContours(fg_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    solid_fg_mask = np.zeros((h, w), dtype=np.uint8)
    if contours:
        cv2.drawContours(solid_fg_mask, contours, -1, 255, thickness=cv2.FILLED)
        
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (3, 3))
    smoothed_mask = cv2.morphologyEx(solid_fg_mask, cv2.MORPH_CLOSE, kernel)
    smoothed_alpha = cv2.GaussianBlur(smoothed_mask, (3, 3), 0)
    
    rgba = np.dstack((edited_arr, smoothed_alpha))
    result = Image.fromarray(rgba, mode='RGBA')
    
    bbox = result.getbbox()
    if bbox:
        pad = 8
        left = max(0, bbox[0] - pad)
        top = max(0, bbox[1] - pad)
        right = min(w, bbox[2] + pad)
        bottom = min(h, bbox[3] + pad)
        result = result.crop((left, top, right, bottom))
        
    out_png = os.path.join(cropped_dir, 'ninnik_3sculptures_emoji.png')
    result.save(out_png, 'PNG')
    print("Saved clean transparent PNG:", out_png, "Size:", result.size)
