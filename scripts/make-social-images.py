"""Generate social share images (1200x630) and the apple-touch icon.
Run from the site/ folder: python3 scripts/make-social-images.py
Needs Pillow. Add a new app to APPS below to get its share image."""
from PIL import Image, ImageDraw, ImageFont

CREAM, DARK, PURPLE = (255, 248, 225), (43, 18, 89), (91, 47, 214)
FONT = "/System/Library/Fonts/Supplemental/Arial Rounded Bold.ttf"
APPS = {  # slug: (name, blurb, icon path)
    "lifty": ("Lifty", "A strength tracker that logs a set with one tap, even from your wrist.", "src/assets/lifty-icon.png"),
    "moving-day": ("Moving Day", "The ultimate moving app. Keeps your move easy and stress free.", None),
    "migraine-diary": ("Migraine Diary", "Log migraines and headaches, and find the triggers behind them.", None),
}

def font(size): return ImageFont.truetype(FONT, size)

def rounded(im, r):
    mask = Image.new("L", im.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, *im.size), r, fill=255)
    out = im.convert("RGBA"); out.putalpha(mask); return out

def wrap(draw, text, f, width):
    lines, cur = [], ""
    for w in text.split():
        t = f"{cur} {w}".strip()
        if draw.textlength(t, font=f) <= width: cur = t
        else: lines.append(cur); cur = w
    return lines + [cur]

def canvas():
    im = Image.new("RGBA", (1200, 630), CREAM + (255,))
    d = ImageDraw.Draw(im)
    d.rounded_rectangle((14, 14, 1186, 616), 40, outline=DARK, width=6)
    return im, d

logo = Image.open("src/assets/logo-banner.png").convert("RGBA")
mascot = Image.open("src/assets/mascot.png").convert("RGBA")

# Default: the logo, centered
im, d = canvas()
lw = 1040; lh = int(logo.height * lw / logo.width)
im.alpha_composite(logo.resize((lw, lh), Image.LANCZOS), (80, (630 - lh) // 2))
im.convert("RGB").save("public/og-default.png", optimize=True)

# Per app
for slug, (name, blurb, icon) in APPS.items():
    im, d = canvas()
    x = 90
    if icon:
        ic = rounded(Image.open(icon).convert("RGB").resize((220, 220), Image.LANCZOS), 50)
        im.alpha_composite(ic, (x, 150))
        d.rounded_rectangle((x, 150, x + 220, 370), 50, outline=DARK, width=6)
    else:
        d.rounded_rectangle((x, 150, x + 220, 370), 50, fill=(255, 240, 194), outline=DARK, width=6)
        d.text((x + 110, 260), name[0], font=font(120), fill=DARK, anchor="mm")
    tx = x + 270
    d.text((tx, 160), name, font=font(88), fill=DARK)
    y = 275
    for line in wrap(d, blurb, font(36), 1200 - tx - 90)[:3]:
        d.text((tx, y), line, font=font(36), fill=(93, 74, 133)); y += 50
    m = mascot.resize((int(mascot.width * 90 / mascot.height), 90), Image.LANCZOS)
    im.alpha_composite(m, (90, 470))
    d.text((90 + m.width + 20, 515), "A Jumpy Dumpling app", font=font(36), fill=DARK, anchor="lm")
    im.convert("RGB").save(f"public/og/{slug}.png", optimize=True)

# Touch icon: mascot on cream
t = Image.new("RGBA", (180, 180), CREAM + (255,))
m = mascot.crop((100, 20, 600, 500)); m.thumbnail((150, 150))
t.alpha_composite(m, ((180 - m.width) // 2, (180 - m.height) // 2))
t.convert("RGB").save("public/apple-touch-icon.png")
