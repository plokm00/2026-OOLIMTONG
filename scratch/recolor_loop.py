# -*- coding: utf-8 -*-
import os, math
from PIL import Image, ImageEnhance, ImageOps, ImageDraw

v3_path = r'C:\Users\owner\.gemini\antigravity\brain\96f9f0cb-21ba-4acc-94ca-5ea9095d0775\ninnik_craft_emoji_v3_1784749879324.jpg'
out_gif = r'c:\Users\owner\Documents\GitHub\orientation\2026 OOLIMTONG\cropped\ninnik_emoji_ai_loop.gif'

if os.path.exists(v3_path):
    img = Image.open(v3_path).convert('RGBA')
    
    w, h = img.size
    min_dim = min(w, h)
    left = (w - min_dim) // 2
    top = (h - min_dim) // 2
    img = img.crop((left, top, left + min_dim, top + min_dim))
    
    size = (180, 180)
    img_resized = img.resize(size, Image.Resampling.LANCZOS)
    
    # Soft circular mask
    mask = Image.new('L', size, 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((4, 4, size[0]-4, size[1]-4), fill=255)
    
    output_img = Image.new('RGBA', size, (0, 0, 0, 0))
    output_img.paste(img_resized, (0, 0), mask)
    
    frames = []
    num_frames = 24
    for i in range(num_frames):
        angle = math.sin(i / num_frames * 2 * math.pi) * 3.0
        scale = 1.0 + math.sin(i / num_frames * 2 * math.pi) * 0.02
        
        sw, sh = int(size[0] * scale), int(size[1] * scale)
        scaled = output_img.resize((sw, sh), Image.Resampling.LANCZOS)
        rotated = scaled.rotate(angle, resample=Image.Resampling.BICUBIC, expand=True)
        
        canvas = Image.new('RGBA', (200, 200), (0, 0, 0, 0))
        cx = (200 - rotated.width) // 2
        cy = (200 - rotated.height) // 2 + int(math.sin(i / num_frames * 2 * math.pi) * 2.5)
        canvas.paste(rotated, (cx, cy), rotated)
        frames.append(canvas.convert('P', palette=Image.Palette.ADAPTIVE))
        
    frames[0].save(
        out_gif,
        save_all=True,
        append_images=frames[1:],
        duration=65,
        loop=0,
        optimize=True
    )
    print("Updated cropped/ninnik_emoji_ai_loop.gif with recolored original design")
