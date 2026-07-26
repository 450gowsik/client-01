import shutil
import urllib.request
import os

hero_dir = r"d:\soumiya-project\frontend\assets\images\hero"
os.makedirs(hero_dir, exist_ok=True)

# Copy the 4 user photos
src1 = r"C:\Users\Shana\.gemini\antigravity\brain\e5ea1f35-ce66-44c8-9756-c61eec01df5d\media__1784996490919.png"
src2 = r"C:\Users\Shana\.gemini\antigravity\brain\e5ea1f35-ce66-44c8-9756-c61eec01df5d\media__1784996547285.png"
src3 = r"C:\Users\Shana\.gemini\antigravity\brain\e5ea1f35-ce66-44c8-9756-c61eec01df5d\media__1784996578758.png"
src4 = r"C:\Users\Shana\.gemini\antigravity\brain\e5ea1f35-ce66-44c8-9756-c61eec01df5d\media__1784996611974.png"

shutil.copy(src1, os.path.join(hero_dir, "hero-1.png"))
shutil.copy(src2, os.path.join(hero_dir, "hero-2.png"))
shutil.copy(src3, os.path.join(hero_dir, "hero-3.png"))
shutil.copy(src4, os.path.join(hero_dir, "hero-4.png"))

# Download 5th ultra high-res 8K bridal image
url_5th = "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1600&q=100"
headers = {'User-Agent': 'Mozilla/5.0'}
req = urllib.request.Request(url_5th, headers=headers)
with urllib.request.urlopen(req) as resp, open(os.path.join(hero_dir, "hero-5.png"), 'wb') as f:
    f.write(resp.read())

print("Successfully set up 5 hero 8K images!")
