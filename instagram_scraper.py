import os
import re
import sys
import json

# Try to import instaloader, check if available
try:
    import instaloader
except ImportError:
    print("Warning: 'instaloader' package is not installed.")
    print("Please install it using: pip install instaloader")
    print("Or you can run our interactive parser: python3 instagram_parser.py")
    sys.exit(1)

def parse_caption(caption):
    # Try to find a price (e.g., $1,200, $500.00, $500)
    price_match = re.search(r'\$([0-9,]+(?:\.[0-9]{2})?)', caption)
    price = ""
    if price_match:
        price = "$" + price_match.group(1)
        
    # Heuristics for Title:
    # Take the first line
    lines = [l.strip() for l in caption.split('\n') if l.strip()]
    title = ""
    if lines:
        first_line = lines[0]
        # Remove price from title if it was in the first line
        first_line_clean = re.sub(r'\$?[0-9,]+(?:\.[0-9]{2})?', '', first_line).strip()
        first_line_clean = re.sub(r'\s+-\s*$', '', first_line_clean).strip()
        first_line_clean = first_line_clean.rstrip(',.- ')
        title = first_line_clean
        
    if not title:
        title = "Instagram Handcrafted Original"
        
    return title, price

def main():
    if len(sys.argv) < 2:
        username = input("Enter Instagram Username to scrape: ").strip()
    else:
        username = sys.argv[1]
        
    if not username:
        print("Username is required!")
        return
        
    print(f"Initializing Instaloader and scraping @{username}...")
    L = instaloader.Instaloader(
        download_pictures=True,
        download_videos=False,
        download_comments=False,
        save_metadata=False,
        compress_json=False
    )
    
    # We want to save downloaded pictures to reseller_images directory
    output_dir = "/Users/dangersorus/Workspace/masha_archer/reseller_images"
    os.makedirs(output_dir, exist_ok=True)
    
    # Change directory so instaloader downloads pictures directly to a temp folder, then we move them
    temp_dir = "/Users/dangersorus/Workspace/masha_archer/temp_instagram"
    os.makedirs(temp_dir, exist_ok=True)
    os.chdir(temp_dir)
    
    try:
        profile = instaloader.Profile.from_username(L.context, username)
        posts = profile.get_posts()
    except Exception as e:
        print(f"Error accessing profile @{username}: {e}")
        print("Note: Instagram has aggressive scraping protections. If this fails, please use our manual tool: python3 instagram_parser.py")
        return
        
    # Load existing products list
    json_path = "/Users/dangersorus/.gemini/antigravity-cli/brain/e1758e30-282d-4616-b6d4-bda468ad53b5/scratch/parsed_products_detailed.json"
    products = []
    if os.path.exists(json_path):
        with open(json_path, 'r', encoding='utf-8') as f:
            products = json.load(f)
            
    added_count = 0
    
    # Get last 5 posts
    for index, post in enumerate(posts):
        if index >= 5:
            break
            
        caption = post.caption or ""
        title, price = parse_caption(caption)
        
        # Check if already exists in products
        existing_match = next((p for p in products if p['title'] == title), None)
        if existing_match:
            print(f"Post '{title}' already exists in store catalog, skipping.")
            continue
            
        print(f"\nFound new post #{index+1}:")
        print(f"  Title: {title}")
        print(f"  Price: {price}")
        
        # Download post image
        try:
            L.download_post(post, target=username)
            # Find the downloaded jpg file in the target directory
            target_path = os.path.join(temp_dir, username)
            jpg_files = [f for f in os.listdir(target_path) if f.endswith('.jpg')]
            if jpg_files:
                # Get the first jpg file
                downloaded_file = os.path.join(target_path, jpg_files[0])
                
                # Make safe destination filename
                safe_name = title.lower()
                safe_name = re.sub(r'[^a-z0-9]+', '_', safe_name).strip('_')
                if not safe_name:
                    safe_name = f"insta_{post.shortcode}"
                    
                dest_filename = f"{safe_name}.jpg"
                dest_path = os.path.join(output_dir, dest_filename)
                
                # Rename/move file
                os.rename(downloaded_file, dest_path)
                local_image = f"reseller_images/{dest_filename}"
                print(f"  Image saved locally to: {local_image}")
            else:
                local_image = ""
        except Exception as e:
            print(f"  Error downloading image: {e}")
            local_image = ""
            
        new_item = {
            "title": title,
            "categories": ["Necklaces"] if "necklace" in title.lower() or "collar" in title.lower() else ["Earrings"] if "earring" in title.lower() else ["Other"],
            "url": f"https://instagram.com/p/{post.shortcode}",
            "price": price,
            "primary_image": post.url,
            "alternate_image": "",
            "local_primary_image": local_image,
            "local_alternate_image": ""
        }
        
        products.insert(0, new_item)
        added_count += 1
        
    # Clean up temp_dir
    os.system(f"rm -rf {temp_dir}")
    
    if added_count > 0:
        # Save back to JSON
        with open(json_path, 'w', encoding='utf-8') as f:
            json.dump(products, f, indent=2)
            
        # Regenerate webstore pages & Wix CSV
        os.system("python3 /Users/dangersorus/.gemini/antigravity-cli/brain/e1758e30-282d-4616-b6d4-bda468ad53b5/scratch/generate_website_assets.py")
        os.system("python3 /Users/dangersorus/.gemini/antigravity-cli/brain/e1758e30-282d-4616-b6d4-bda468ad53b5/scratch/generate_wix_csv.py")
        os.system("python3 /Users/dangersorus/.gemini/antigravity-cli/brain/e1758e30-282d-4616-b6d4-bda468ad53b5/scratch/update_info_v4.py")
        
        print(f"\nSuccessfully scraped Instagram and added {added_count} new products to catalog!")
    else:
        print("\nNo new products were found or added.")

if __name__ == '__main__':
    main()
