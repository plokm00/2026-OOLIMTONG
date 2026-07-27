# -*- coding: utf-8 -*-
import os
import numpy as np
from PIL import Image, ImageFilter

img_v3 = r'C:\Users\owner\.gemini\antigravity\brain\96f9f0cb-21ba-4acc-94ca-5ea9095d0775\ninnik_craft_emoji_v3_1784749879324.jpg'
img_v1 = r'C:\Users\owner\.gemini\antigravity\brain\96f9f0cb-21ba-4acc-94ca-5ea9095d0775\ninnik_craft_icon_1784748043290.jpg'

src_path = img_v3 if os.path.exists(img_v3) else img_v1

img = Image.open(src_path).convert('RGBA')
data = np.array(img)

# R, G, B channels
r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]

# Identify background: high RGB brightness & low color saturation (white/cream background)
# Calculate brightness
brightness = (r.astype(float) + g.astype(float) + b.astype(float)) / 3.0
max_c = np.maximum(r, np.maximum(g, b)).astype(float)
min_c = np.minimum(r, np.minimum(g, b)).astype(float)
saturation = (max_c - min_c)

# Background mask: brightness > 220 and saturation < 30
bg_mask = (brightness > 215) & (saturation < 35)

# Smooth alpha channel for anti-aliasing
alpha = np.where(bg_mask, 0, 255).astype(np.uint8)

# Refine alpha with distance/feathering
alpha_img = Image.fromarray(alpha, mode='L')
# Smooth edges slightly
alpha_img = alpha_img.filter(ImageFilter.GaussianBlur(1))
alpha_data = np.array(alpha_img)

# Enhance alpha transition: values below 50 become 0, values above 200 stay 255
alpha_data = np.clip((alpha_data.astype(float) - 40) * 1.5, 0, 255).astype(np.uint8)

data[:,:,3] = alpha_data

result = Image.fromarray(data, mode='RGBA')

# Crop bounding box of non-transparent pixels
bbox = result.getbbox()
if bbox:
    result = result.crop(bbox)

out_png = r'c:\Users\owner\Documents\GitHub\orientation\2026 OOLIMTONG\cropped\ninnik_craft_emoji.png'
os.makedirs(os.path.dirname(out_png), exist_ok=True)
result.save(out_png, 'PNG')

print("Created transparent PNG:", out_png, "Size:", result.size)
