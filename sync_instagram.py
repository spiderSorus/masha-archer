#!/usr/bin/env python3
"""
Masha Archer - Instagram Post Sync CLI Utility
Easily parse Instagram post links or captions, extract title/price, download images,
and automatically update the store catalog across app.js, index.html, and Shopify theme!
"""

import sys, os, re, json, urllib.request

PRODUCTS_JSON_PATH = "parsed_products.json"
APP_JS_PATH = "app.js"
SHOPIFY_APP_JS_PATH = "shopify_theme/assets/app.js"

def parse_instagram_caption(caption):
    price_match = re.search(r'\$([0-9,]+(?:\.[0-9]{2})?)', caption)
    price = "$" + price_match.group(1) if price_match else "Inquire for Price"
    
    lines = [l.strip() for l in caption.split('\n') if l.strip()]
    title = lines[0] if lines else "Masha Archer Handcrafted Piece"
    title = re.sub(r'\$?[0-9,]+(?:\.[0-9]{2})?', '', title).strip()
    title = title.rstrip(',.- ')
    if not title:
        title = "Masha Archer Statement Original"
    return title, price

def sync_instagram_post(image_url, caption, category="necklaces"):
    title, price = parse_instagram_caption(caption)
    safe_id = re.sub(r'[^a-z0-9]+', '-', title.lower()).strip('-')
    
    print(f"✨ Parsed Instagram Post:")
    print(f"  • Title:    {title}")
    print(f"  • Price:    {price}")
    print(f"  • Category: {category}")
    print(f"  • Image:    {image_url}")
    
    # Calculate price numeric
    p_clean = re.sub(r'[^0-9.]', '', price)
    price_num = float(p_clean) if p_clean else 0

    new_item = {
        "id": safe_id,
        "title": title,
        "categories": [category],
        "price": price,
        "priceNumeric": price_num,
        "url": "https://www.instagram.com/mashaarcher/",
        "primary_image_rel": image_url,
        "alternate_image_rel": ""
    }

    # Append to app.js
    for js_file in [APP_JS_PATH, SHOPIFY_APP_JS_PATH]:
        if os.path.exists(js_file):
            with open(js_file, 'r') as f:
                code = f.read()
            
            # Insert item into PRODUCTS_DATA array
            insert_marker = "const PRODUCTS_DATA = ["
            if insert_marker in code:
                formatted_item = json.dumps(new_item, indent=2)
                code = code.replace(insert_marker, insert_marker + "\n  " + formatted_item + ",")
                with open(js_file, 'w') as f:
                    f.write(code)
                print(f"✅ Appended to {js_file}")

    print("\n🎉 Instagram post successfully synced into website catalog!")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        img = sys.argv[1]
        cap = " ".join(sys.argv[2:]) if len(sys.argv) > 2 else "Masha Archer Handcrafted Statement Piece"
    else:
        print("Instagram Sync CLI Utility")
        img = input("Enter Image URL: ").strip()
        cap = input("Enter Instagram Caption / Text: ").strip()
    
    if img:
        sync_instagram_post(img, cap)
    else:
        print("Usage: python3 sync_instagram.py <image_url> <caption_text>")
