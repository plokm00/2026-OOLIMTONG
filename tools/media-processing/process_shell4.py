# -*- coding: utf-8 -*-
import os, cv2
import numpy as np
from PIL import Image

base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
cropped_dir = os.path.join(base_dir, 'cropped')

def extract_outer_bg_keep_inner_solid(src_image_path, output_png_path):
    if not os.path.exists(src_image_path):
        print("File not found:", src_image_path)
        return
        
    img = Image.open(src_image_path).convert('RGB')
    arr = np.array(img)
    h, w, c = arr.shape
    bgr = cv2.cvtColor(arr, cv2.COLOR_RGB2BGR)
    
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
    
    # Fill internal holes
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
        
    result.save(output_png_path, 'PNG')
    print("Successfully processed clean transparent PNG:", output_png_path, "Size:", result.size)

src_path = r'C:\Users\owner\.gemini\antigravity\brain\96f9f0cb-21ba-4acc-94ca-5ea9095d0775\ninnik_3branches_shell4_1784750779204.jpg'
out_path = os.path.join(cropped_dir, 'ninnik_3sculptures_emoji.png')
extract_outer_bg_keep_inner_solid(src_path, out_path)
