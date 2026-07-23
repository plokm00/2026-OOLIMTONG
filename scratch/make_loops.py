# -*- coding: utf-8 -*-
import os, glob, shutil, cv2, math
import numpy as np
from PIL import Image, ImageOps, ImageDraw

base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
cropped_dir = os.path.join(base_dir, 'cropped')
scratch_dir = os.path.join(base_dir, 'scratch')

os.makedirs(cropped_dir, exist_ok=True)
os.makedirs(scratch_dir, exist_ok=True)

# Find video file ending in .mp4 in cropped_dir containing 10
mp4_files = [os.path.join(cropped_dir, f) for f in os.listdir(cropped_dir) if f.endswith('.mp4') and '10' in f]
print("Found mp4 files:", mp4_files)

if mp4_files:
    src_video = mp4_files[0]
    temp_video = os.path.join(scratch_dir, 'temp_v10.mp4')
    shutil.copyfile(src_video, temp_video)
    
    cap = cv2.VideoCapture(temp_video)
    v_frames = []
    if cap.isOpened():
        count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
        frame_idx = 0
        while True:
            ret, frame = cap.read()
            if not ret:
                break
            if frame_idx % 4 == 0:
                rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
                img = Image.fromarray(rgb)
                
                iw, ih = img.size
                tw, th = 200, 140
                target_aspect = tw / th
                img_aspect = iw / ih
                
                if img_aspect > target_aspect:
                    new_w = int(ih * target_aspect)
                    left = (iw - new_w) // 2
                    img = img.crop((left, 0, left + new_w, ih))
                else:
                    new_h = int(iw / target_aspect)
                    top = (ih - new_h) // 2
                    img = img.crop((0, top, iw, top + new_h))
                    
                img = img.resize((tw, th), Image.Resampling.LANCZOS)
                v_frames.append(img.convert('P', palette=Image.Palette.ADAPTIVE, colors=256))
            frame_idx += 1
            
    if v_frames:
        gif_out = os.path.join(cropped_dir, 'ninnik_session10_stream_loop.gif')
        v_frames[0].save(
            gif_out,
            save_all=True,
            append_images=v_frames[1:],
            duration=100,
            loop=0,
            optimize=True
        )
        print("Option 3 created successfully:", gif_out)
