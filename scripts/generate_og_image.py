# -*- coding: utf-8 -*-
import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 1200, 630

# 1. Base Background with Deep Slate Gradient & Ambient Glows
bg = Image.new('RGBA', (W, H), (15, 23, 42, 255)) # #0f172a
glow_layer = Image.new('RGBA', (W, H), (0, 0, 0, 0))
glow_draw = ImageDraw.Draw(glow_layer)

# Ambient glow orbs
glow_draw.ellipse((-120, -120, 520, 520), fill=(99, 102, 241, 60))    # Indigo top-left
glow_draw.ellipse((750, 180, 1420, 850), fill=(16, 185, 129, 40))     # Emerald bottom-right
glow_draw.ellipse((500, -80, 1050, 420), fill=(139, 92, 246, 35))     # Violet accent
glow_draw.ellipse((100, 400, 600, 800), fill=(56, 189, 248, 30))      # Cyan bottom-left

glow_layer = glow_layer.filter(ImageFilter.GaussianBlur(80))
bg = Image.alpha_composite(bg, glow_layer)
draw = ImageDraw.Draw(bg)

# Outer subtle border frame
draw.rounded_rectangle((18, 18, W - 18, H - 18), radius=28, outline=(51, 65, 85, 200), width=2)

# Load System Fonts
font_path_bold = 'C:/Windows/Fonts/segoeuib.ttf'
font_path_regular = 'C:/Windows/Fonts/segoeui.ttf'
font_path_semibold = 'C:/Windows/Fonts/segoeuisb.ttf'
if not os.path.exists(font_path_semibold):
    font_path_semibold = font_path_bold

font_eyebrow = ImageFont.truetype(font_path_bold, 13)
font_name = ImageFont.truetype(font_path_bold, 54)
font_title = ImageFont.truetype(font_path_bold, 32)
font_sub = ImageFont.truetype(font_path_regular, 19)
font_card_title = ImageFont.truetype(font_path_bold, 18)
font_card_desc = ImageFont.truetype(font_path_regular, 14)
font_card_sub = ImageFont.truetype(font_path_semibold, 13)
font_badge_play = ImageFont.truetype(font_path_bold, 12)
font_pill = ImageFont.truetype(font_path_semibold, 14)
font_footer = ImageFont.truetype(font_path_regular, 14)
font_status = ImageFont.truetype(font_path_bold, 13)

# 2. Left Photo Card
photo_path = 'public/profile.jpg'
if os.path.exists(photo_path):
    raw_photo = Image.open(photo_path).convert('RGBA')
    pw, ph = raw_photo.size
    crop_size = min(pw, int(ph * 0.72))
    top_offset = int(ph * 0.08)
    cropped = raw_photo.crop(((pw - crop_size) // 2, top_offset, (pw + crop_size) // 2, top_offset + crop_size))
    
    avatar_size = 425
    avatar = cropped.resize((avatar_size, avatar_size), Image.Resampling.LANCZOS)
    
    mask = Image.new('L', (avatar_size, avatar_size), 0)
    mask_draw = ImageDraw.Draw(mask)
    mask_draw.rounded_rectangle((0, 0, avatar_size, avatar_size), radius=32, fill=255)
    
    frame_x, frame_y = 65, 96
    frame_w, frame_h = avatar_size + 14, avatar_size + 14
    
    # Drop shadow behind photo
    shadow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(shadow)
    s_draw.rounded_rectangle((frame_x - 6, frame_y + 10, frame_x + frame_w + 6, frame_y + frame_h + 20), radius=38, fill=(0, 0, 0, 160))
    shadow = shadow.filter(ImageFilter.GaussianBlur(20))
    bg = Image.alpha_composite(bg, shadow)
    draw = ImageDraw.Draw(bg)
    
    # Photo frame gradient outline
    draw.rounded_rectangle((frame_x, frame_y, frame_x + frame_w, frame_y + frame_h), radius=36, outline=(99, 102, 241, 240), width=3)
    bg.paste(avatar, (frame_x + 7, frame_y + 7), mask)
    
    # Status badge over bottom of photo
    status_w = 264
    status_h = 36
    status_x = frame_x + (frame_w - status_w) // 2
    status_y = frame_y + frame_h - 18
    
    # Status badge background & glow
    draw.rounded_rectangle((status_x, status_y, status_x + status_w, status_y + status_h), radius=18, fill=(15, 23, 42, 255), outline=(16, 185, 129, 240), width=2)
    
    # Bright green pulse dot
    dot_x, dot_y = status_x + 18, status_y + 13
    draw.ellipse((dot_x, dot_y, dot_x + 10, dot_y + 10), fill=(52, 211, 153))
    draw.text((status_x + 36, status_y + 8), "LIVE APPS ON GOOGLE PLAY", fill=(240, 253, 244), font=font_status)

# 3. Right Side Content
text_x = 540

# Top Eyebrow Tag
eyebrow_text = "PORTFOLIO & SHOWCASE"
ew = draw.textlength(eyebrow_text, font=font_eyebrow)
draw.rounded_rectangle((text_x, 68, text_x + ew + 28, 98), radius=15, fill=(99, 102, 241, 45), outline=(129, 140, 248, 180), width=1)
draw.text((text_x + 14, 74), eyebrow_text, fill=(199, 210, 254), font=font_eyebrow)

# Name
draw.text((text_x, 110), "Sagar Soneji", fill=(255, 255, 255), font=font_name)

# Title
draw.text((text_x, 178), "Flutter & Android Developer", fill=(56, 189, 248), font=font_title)

# Tagline
draw.text((text_x, 226), "Building production mobile apps with Flutter, native Android,", fill=(226, 232, 240), font=font_sub)
draw.text((text_x, 252), "and modern Gemini AI integrations.", fill=(148, 163, 184), font=font_sub)

# Project Cards
card_y = 296
card_w = 285
card_h = 130

# --- Card 1: Doc2Contact ---
draw.rounded_rectangle((text_x, card_y, text_x + card_w, card_y + card_h), radius=16, fill=(30, 41, 59, 210), outline=(71, 85, 105, 210), width=1)
draw.text((text_x + 16, card_y + 14), "Doc2Contact", fill=(255, 255, 255), font=font_card_title)
draw.text((text_x + 16, card_y + 40), "AI Document to Contacts App", fill=(148, 163, 184), font=font_card_desc)
draw.text((text_x + 16, card_y + 64), "Gemini AI OCR  |  1-Tap Phonebook", fill=(56, 189, 248), font=font_card_sub)

# High-contrast Google Play Badge
play_bg_x = text_x + 16
play_bg_y = card_y + 92
draw.rounded_rectangle((play_bg_x, play_bg_y, play_bg_x + 154, play_bg_y + 26), radius=7, fill=(15, 23, 42, 255), outline=(16, 185, 129, 220), width=1)
draw.polygon([(play_bg_x + 12, play_bg_y + 7), (play_bg_x + 12, play_bg_y + 19), (play_bg_x + 22, play_bg_y + 13)], fill=(52, 211, 153))
draw.text((play_bg_x + 28, play_bg_y + 4), "Google Play Store", fill=(240, 253, 244), font=font_badge_play)

# --- Card 2: LinkPulse ---
c2_x = text_x + card_w + 16
draw.rounded_rectangle((c2_x, card_y, c2_x + card_w, card_y + card_h), radius=16, fill=(30, 41, 59, 210), outline=(71, 85, 105, 210), width=1)
draw.text((c2_x + 16, card_y + 14), "LinkPulse", fill=(255, 255, 255), font=font_card_title)
draw.text((c2_x + 16, card_y + 40), "Smart Bio Links & URL Shortener", fill=(148, 163, 184), font=font_card_desc)
draw.text((c2_x + 16, card_y + 64), "Real-Time Analytics  |  QR Studio", fill=(192, 132, 252), font=font_card_sub)

# High-contrast Google Play Badge
p2_bg_x = c2_x + 16
p2_bg_y = card_y + 92
draw.rounded_rectangle((p2_bg_x, p2_bg_y, p2_bg_x + 154, p2_bg_y + 26), radius=7, fill=(15, 23, 42, 255), outline=(16, 185, 129, 220), width=1)
draw.polygon([(p2_bg_x + 12, p2_bg_y + 7), (p2_bg_x + 12, p2_bg_y + 19), (p2_bg_x + 22, p2_bg_y + 13)], fill=(52, 211, 153))
draw.text((p2_bg_x + 28, p2_bg_y + 4), "Google Play Store", fill=(240, 253, 244), font=font_badge_play)

# 4. Tech Stack Badges
skills = ["Flutter", "Dart", "Android (Java)", "Gemini AI", "Firebase", "Cloudflare"]
pill_x = text_x
pill_y = 448
for s in skills:
    sw = draw.textlength(s, font=font_pill)
    draw.rounded_rectangle((pill_x, pill_y, pill_x + sw + 22, pill_y + 30), radius=15, fill=(15, 23, 42, 230), outline=(71, 85, 105, 210), width=1)
    draw.text((pill_x + 11, pill_y + 5), s, fill=(226, 232, 240), font=font_pill)
    pill_x += int(sw) + 26

# 5. Footer Links
footer_y = 512
draw.text((text_x, footer_y), "github.com/sonejisagar    |    linkedin.com/in/sagar-soneji-41b985378", fill=(148, 163, 184), font=font_footer)

# Save high-res assets
bg_rgb = bg.convert('RGB')
bg_rgb.save('public/og-image.png', format='PNG', quality=95)
bg_rgb.save('public/og-image.jpg', format='JPEG', quality=95)
print("Successfully generated refined public/og-image.png and public/og-image.jpg")
