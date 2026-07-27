import os
import re
import json
import csv
import urllib.request

def parse_caption(caption):
    # Try to find a price (e.g., $1,200, $500.00, $500)
    price_match = re.search(r'\$([0-9,]+(?:\.[0-9]{2})?)', caption)
    price = ""
    if price_match:
        price = "$" + price_match.group(1)
        
    # Heuristics for Title:
    # 1. Take the first line
    lines = [l.strip() for l in caption.split('\n') if l.strip()]
    title = ""
    if lines:
        first_line = lines[0]
        # Remove price from title if it was in the first line
        first_line_clean = re.sub(r'\$?[0-9,]+(?:\.[0-9]{2})?', '', first_line).strip()
        first_line_clean = re.sub(r'\s+-\s*$', '', first_line_clean).strip()
        # Clean special chars at the end
        first_line_clean = first_line_clean.rstrip(',.- ')
        title = first_line_clean
        
    # Fallback title if empty
    if not title:
        title = "New Handcrafted Piece"
        
    return title, price

def append_to_data(title, price, image_url, description):
    json_path = "/Users/dangersorus/.gemini/antigravity-cli/brain/e1758e30-282d-4616-b6d4-bda468ad53b5/scratch/parsed_products_detailed.json"
    output_dir = "/Users/dangersorus/Workspace/masha_archer/reseller_images"
    
    # 1. Load existing products
    products = []
    if os.path.exists(json_path):
        with open(json_path, 'r', encoding='utf-8') as f:
            products = json.load(f)
            
    # Determine safe filename
    safe_name = title.lower()
    safe_name = re.sub(r'[^a-z0-9]+', '_', safe_name).strip('_')
    if not safe_name:
        safe_name = "instagram_piece"
        
    # Download image locally
    local_image = ""
    if image_url:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
        ext = ".jpg"
        if ".png" in image_url.lower():
            ext = ".png"
        elif ".jpeg" in image_url.lower():
            ext = ".jpeg"
            
        filename = f"{safe_name}{ext}"
        # Ensure name uniqueness
        counter = 1
        while os.path.exists(os.path.join(output_dir, filename)):
            filename = f"{safe_name}_{counter}{ext}"
            counter += 1
            
        dest_path = os.path.join(output_dir, filename)
        req = urllib.request.Request(image_url, headers=headers)
        try:
            with urllib.request.urlopen(req) as response, open(dest_path, 'wb') as out_f:
                out_f.write(response.read())
            local_image = f"reseller_images/{filename}"
            print(f"Downloaded image to {dest_path}")
        except Exception as e:
            print(f"Error downloading image: {e}")
            
    # Create product entry
    new_product = {
        "title": title,
        "categories": ["Necklaces"] if "necklace" in title.lower() or "collar" in title.lower() else ["Earrings"] if "earring" in title.lower() else ["Other"],
        "url": "Instagram Post",
        "price": price,
        "primary_image": image_url,
        "alternate_image": "",
        "local_primary_image": local_image,
        "local_alternate_image": ""
    }
    
    # Check if duplicate title
    existing_match = next((p for p in products if p['title'] == title), None)
    if existing_match:
        print(f"Product '{title}' already exists. Updating details.")
        products.remove(existing_match)
        
    products.insert(0, new_product) # Add to beginning
    
    # Save back to JSON
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(products, f, indent=2)
        
    # 2. Regenerate app.js
    # Run the asset generation script to update the site
    print("Regenerating site assets...")
    os.system("python3 /Users/dangersorus/.gemini/antigravity-cli/brain/e1758e30-282d-4616-b6d4-bda468ad53b5/scratch/generate_website_assets.py")
    
    # 3. Regenerate Wix CSV
    print("Regenerating Wix CSV...")
    os.system("python3 /Users/dangersorus/.gemini/antigravity-cli/brain/e1758e30-282d-4616-b6d4-bda468ad53b5/scratch/generate_wix_csv.py")
    
    # 4. Update masha_archer_info.md
    print("Updating master document...")
    os.system("python3 /Users/dangersorus/.gemini/antigravity-cli/brain/e1758e30-282d-4616-b6d4-bda468ad53b5/scratch/update_info_v4.py")
    
    print(f"\nSuccessfully added '{title}' (Price: {price})!")

def main():
    print("--- Instagram Post Parser for Masha Archer Store ---")
    print("This script takes caption text and an image URL, parses them, and adds them to the store.")
    
    caption = input("Enter Instagram Post Caption:\n")
    image_url = input("\nEnter Image URL (direct link to jpg/png or press enter to skip):\n").strip()
    
    title, price = parse_caption(caption)
    print(f"\nParsed Title: '{title}'")
    print(f"Parsed Price: '{price}'")
    
    confirm = input("Does this look correct? (y/n): ").strip().lower()
    if confirm == 'y' or confirm == '':
        append_to_data(title, price, image_url, caption)
    else:
        # Allow override
        custom_title = input(f"Enter custom title [{title}]: ").strip()
        custom_price = input(f"Enter custom price [{price}]: ").strip()
        
        title = custom_title if custom_title else title
        price = custom_price if custom_price else price
        append_to_data(title, price, image_url, caption)

if __name__ == '__main__':
    main()
