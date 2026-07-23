# -*- coding: utf-8 -*-
import os, cv2
import numpy as np
from PIL import Image, ImageFilter

base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
cropped_dir = os.path.join(base_dir, 'cropped')
os.makedirs(cropped_dir, exist_ok=True)

def remove_background_cleanly(src_image_path, output_png_path):
    if not os.path.exists(src_image_path):
        print("Not found:", src_image_path)
        return
        
    img = Image.open(src_image_path).convert('RGB')
    arr = np.array(img)
    
    # Use OpenCV floodfill from 4 corners to find exact background region
    h, w, c = arr.shape
    bgr = cv2.cvtColor(arr, cv2.COLOR_RGB2BGR)
    
    # Mask for floodFill: size (h+2, w+2)
    mask = np.zeros((h + 2, w + 2), np.uint8)
    
    # FloodFill from all 4 corners and borders
    corners = [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1), (w // 2, 0), (0, h // 2), (w - 1, h // 2), (w // 2, h - 1)]
    
    # Tolerance for floodFill: diff up to 35
    for cx, cy in corners:
        cv2.floodFill(bgr, mask, (cx, cy), (255, 255, 255), (32, 32, 32), (32, 32, 32), cv2.FLOODFILL_FIXED_RANGE)
        
    # The mask contains 1 where floodFill reached
    bg_mask = mask[1:h+1, 1:w+1] > 0
    
    # Additional color distance check for any remaining light beige/off-white background
    # Background color sample from corners
    corner_colors = [arr[0,0], arr[0,-1], arr[-1,0], arr[-1,-1]]
    avg_bg = np.mean(corner_colors, axis=0)
    
    color_diff = np.sqrt(np.sum((arr.astype(float) - avg_bg)**2, axis=2))
    extra_bg = color_diff < 40.0
    
    total_bg_mask = bg_mask | extra_bg
    
    # Create RGBA array
    rgba = np.dstack((arr, np.full((h, w), 255, dtype=np.uint8)))
    
    # Apply alpha: background pixels get 0 alpha
    rgba[total_bg_mask, 3] = 0
    
    # Anti-alias mask edge slightly
    alpha_ch = rgba[:, :, 3]
    alpha_img = Image.fromarray(alpha_ch, mode='L')
    alpha_img = alpha_img.filter(ImageFilter.GaussianBlur(0.8))
    alpha_arr = np.array(alpha_img)
    alpha_arr = np.where(alpha_arr < 60, 0, alpha_arr)
    rgba[:, :, 3] = alpha_arr
    
    result = Image.fromarray(rgba, mode='RGBA')
    
    # Crop bounding box of visible content
    bbox = result.getbbox()
    if bbox:
        # Add slight padding
        padding = 10
        left = max(0, bbox[0] - padding)
        top = max(0, bbox[1] - padding)
        right = min(w, bbox[2] + padding)
        bottom = min(h, bbox[3] + padding)
        result = result.crop((left, top, right, bottom))
        
    result.save(output_png_path, 'PNG')
    print("Successfully saved clean transparent PNG:", output_png_path, "Size:", result.size)

# 1. Process 3-Sculptures New Emblem
v1_3s = r'C:\Users\owner\.gemini\antigravity\brain\96f9f0cb-21ba-4acc-94ca-5ea9095d0775\ninnik_3sculptures_v1_1784750269526.jpg'
out_3s = os.path.join(cropped_dir, 'ninnik_3sculptures_emoji.png')
remove_background_cleanly(v1_3s, out_3s)

# 2. Re-process Original Craft Icon to remove ALL remaining beige/off-white pixels completely
v3_orig = r'C:\Users\owner\.gemini\antigravity\brain\96f9f0cb-21ba-4acc-94ca-5ea9095d0775\ninnik_craft_emoji_v3_1784749879324.jpg'
out_orig = os.path.join(cropped_dir, 'ninnik_craft_emoji.png')
remove_background_cleanly(v3_orig, out_orig)
