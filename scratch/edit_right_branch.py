# -*- coding: utf-8 -*-
import os, cv2
import numpy as np
from PIL import Image

brain_dir = r'C:\Users\owner\.gemini\antigravity\brain\96f9f0cb-21ba-4acc-94ca-5ea9095d0775'
cropped_dir = r'C:\Users\owner\Documents\GitHub\orientation\2026 OOLIMTONG\cropped'
os.makedirs(cropped_dir, exist_ok=True)

src_jpg = os.path.join(brain_dir, 'ninnik_3branches_shell5_1784750842605.jpg')
out_png = os.path.join(cropped_dir, 'ninnik_3sculptures_emoji.png')

if os.path.exists(src_jpg):
    img = Image.open(src_jpg).convert('RGB')
    arr = np.array(img)
    h, w, c = arr.shape
    
    # 1. Target right branch (x > 0.6*w)
    right_region = np.zeros((h, w), dtype=bool)
    right_region[:, int(w*0.58):] = True
    
    # Convert to HSV to find existing paint patch on right branch
    hsv = cv2.cvtColor(arr, cv2.COLOR_RGB2HSV)
    
    # Find existing paint pixels on right branch
    # Old paint patch is usually colored (saturation > 30 and brightness < 230)
    paint_mask = right_region & (hsv[:,:,1] > 35) & (hsv[:,:,2] < 235) & (hsv[:,:,2] > 30)
    
    # Get bounding box or contour of right paint patch
    y_idx, x_idx = np.where(paint_mask)
    if len(y_idx) > 0:
        min_y, max_y = np.min(y_idx), np.max(y_idx)
        height_p = max_y - min_y
        
        # Upper half of old paint patch: restore wood color (blend with adjacent wood)
        wood_y_mid = min_y + int(height_p * 0.5)
        
        # Restore upper 50% to natural wood tone
        upper_paint = paint_mask & (np.arange(h)[:, None] < wood_y_mid)
        # Sample natural wood color nearby
        wood_pixels = arr[right_region & (hsv[:,:,1] < 40) & (hsv[:,:,2] < 180)]
        avg_wood = np.mean(wood_pixels, axis=0) if len(wood_pixels) > 0 else np.array([120, 95, 75])
        
        arr[upper_paint] = (arr[upper_paint].astype(float) * 0.3 + avg_wood * 0.7).astype(np.uint8)
        
        # Lower half (50% size): apply VIVID BRIGHT ORANGE (#FF4800 -> RGB: 255, 72, 0)
        lower_paint = paint_mask & (np.arange(h)[:, None] >= wood_y_mid)
        vivid_orange = np.array([255, 75, 0], dtype=np.uint8)
        
        # Blend vivid bright orange cleanly onto lower half
        arr[lower_paint] = (arr[lower_paint].astype(float) * 0.15 + vivid_orange * 0.85).astype(np.uint8)
        
    # Save modified JPG preview
    modified_jpg = os.path.join(brain_dir, 'ninnik_right_branch_orange.jpg')
    Image.fromarray(arr).save(modified_jpg, 'JPEG', quality=95)
    print("Saved modified JPG:", modified_jpg)

    # 2. Extract outer background cleanly to transparent PNG
    bgr = cv2.cvtColor(arr, cv2.COLOR_RGB2BGR)
    ff_mask = np.zeros((h + 2, w + 2), np.uint8)
    
    seeds = [(0, 0), (w-1, 0), (0, h-1), (w-1, h-1)]
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
    
    rgba = np.dstack((arr, smoothed_alpha))
    result = Image.fromarray(rgba, mode='RGBA')
    
    bbox = result.getbbox()
    if bbox:
        pad = 8
        left = max(0, bbox[0] - pad)
        top = max(0, bbox[1] - pad)
        right = min(w, bbox[2] + pad)
        bottom = min(h, bbox[3] + pad)
        result = result.crop((left, top, right, bottom))
        
    result.save(out_png, 'PNG')
    print("Successfully updated transparent PNG:", out_png, "Size:", result.size)
