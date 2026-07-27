# -*- coding: utf-8 -*-
import os, cv2
import numpy as np
from PIL import Image, ImageDraw, ImageEnhance, ImageFilter

brain_dir = r'C:\Users\owner\.gemini\antigravity\brain\96f9f0cb-21ba-4acc-94ca-5ea9095d0775'
cropped_dir = r'C:\Users\owner\Documents\GitHub\orientation\2026 OOLIMTONG\cropped'
os.makedirs(cropped_dir, exist_ok=True)

# Very first retro image paths
v1_sculptures = os.path.join(brain_dir, 'ninnik_3sculptures_v1_1784750269526.jpg')
v1_icon = os.path.join(brain_dir, 'ninnik_craft_icon_1784748043290.jpg')

src_path = v1_sculptures if os.path.exists(v1_sculptures) else v1_icon

if os.path.exists(src_path):
    img = Image.open(src_path).convert('RGB')
    arr = np.array(img)
    h, w, c = arr.shape
    
    # 1. Modify the branch tip so that vivid bright orange paint is painted right on the wooden stick tip
    # Locate the paint branch tip in the illustration
    hsv = cv2.cvtColor(arr, cv2.COLOR_RGB2HSV)
    
    # Create mask for the tip of the wooden branch stick
    # Apply vivid orange #FF4500 (RGB: 255, 69, 0) right on the wooden stick tip
    # Branch tip region (bottom right or bottom center)
    mask_tip = np.zeros((h, w), dtype=np.uint8)
    
    # Draw a clean paint dip on the wooden branch tip
    # Find wooden branch contours
    dark_wood = (hsv[:,:,2] < 170) & (hsv[:,:,1] > 20)
    
    # Locate wooden branch pixels
    y_idx, x_idx = np.where(dark_wood)
    if len(y_idx) > 0:
        # Find branch tip coordinates
        # Draw a clean, vivid orange paint dip (RGB 255, 75, 0)
        # Select the branch tip on the right/bottom
        branch_tips = []
        for i in range(len(y_idx)):
            if y_idx[i] > 0.5 * h and x_idx[i] > 0.4 * w:
                branch_tips.append((x_idx[i], y_idx[i]))
                
        if branch_tips:
            bt_x, bt_y = max(branch_tips, key=lambda p: p[1])
            # Draw vivid orange paint on the wooden stick tip
            cv2.circle(mask_tip, (bt_x, bt_y - 10), 18, 255, -1)
            
            # Apply orange color to the wooden stick tip
            orange_color = np.array([255, 80, 0], dtype=np.uint8)
            wood_tip_pixels = (mask_tip > 0) & (arr[:,:,0] < 240)
            arr[wood_tip_pixels] = (arr[wood_tip_pixels].astype(float) * 0.2 + orange_color * 0.8).astype(np.uint8)

    # 2. Add 6 clear marbles with internal spiral swirls randomly across the retro shell plaster
    # Find center shell region (around h/2, w/2)
    shell_cx, shell_cy = int(w * 0.5), int(h * 0.52)
    
    # 6 random marble offsets around shell
    marble_positions = [
        (shell_cx - 45, shell_cy - 35),
        (shell_cx + 50, shell_cy - 20),
        (shell_cx - 20, shell_cy + 15),
        (shell_cx + 35, shell_cy + 40),
        (shell_cx - 55, shell_cy + 30),
        (shell_cx + 10, shell_cy - 50)
    ]
    
    marble_colors = [
        (220, 70, 30),   # Coral
        (50, 80, 150),   # Indigo
        (220, 160, 40),  # Gold
        (200, 60, 40),   # Coral
        (60, 90, 160),   # Indigo
        (230, 170, 50)   # Gold
    ]
    
    # Draw 6 glass marbles with internal swirl patterns onto the shell
    for (mx, my), (mr, mg, mb) in zip(marble_positions, marble_colors):
        r = 14  # marble radius
        # Draw glossy glass marble circle
        cv2.circle(arr, (mx, my), r, (240, 240, 245), -1)
        cv2.circle(arr, (mx, my), r, (120, 110, 100), 1, cv2.LINE_AA)
        
        # Internal spiral swirl
        pts = []
        for t in np.linspace(0, 3 * np.pi, 25):
            rad = (t / (3 * np.pi)) * (r - 3)
            sx = int(mx + rad * np.cos(t))
            sy = int(my + rad * np.sin(t))
            pts.append((sx, sy))
            
        for k in range(len(pts) - 1):
            cv2.line(arr, pts[k], pts[k+1], (mr, mg, mb), 2, cv2.LINE_AA)
            
        # Tiny glass highlight reflection
        cv2.circle(arr, (mx - 4, my - 4), 3, (255, 255, 255), -1)

    # Save final edited image
    edited_img = Image.fromarray(arr, mode='RGB')
    out_jpg = os.path.join(brain_dir, 'ninnik_retro_v1_final.jpg')
    edited_img.save(out_jpg, 'JPEG', quality=95)
    print("Saved final retro image:", out_jpg)
    
    # Background extraction to PNG
    bgr = cv2.cvtColor(arr, cv2.COLOR_RGB2BGR)
    ff_mask = np.zeros((h + 2, w + 2), np.uint8)
    
    seeds = [(0, 0), (w-1, 0), (0, h-1), (w-1, h-1)]
    for sx, sy in seeds:
        cv2.floodFill(bgr, ff_mask, (sx, sy), (255, 255, 255), (30, 30, 30), (30, 30, 30), cv2.FLOODFILL_FIXED_RANGE)
        
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
        
    out_png = os.path.join(cropped_dir, 'ninnik_3sculptures_emoji.png')
    result.save(out_png, 'PNG')
    print("Saved clean transparent PNG:", out_png, "Size:", result.size)
