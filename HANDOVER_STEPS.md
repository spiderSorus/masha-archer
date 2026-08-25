# Masha Archer - Storefront & Publishing Handover Guide

This document outlines the current project state, active store URLs, login credentials, DNS settings for `masha.org`, and CLI commands to continue management.

---

## 1. Live Storefront URLs & Deployment Status

- **Shopify Store URL (Primary)**: [https://0gnymw-sj.myshopify.com](https://0gnymw-sj.myshopify.com)
  - **Live Theme**: `Masha Archer Luxury Theme` (ID: `188569714731`)
  - **Shopify Theme Admin Editor**: [Open Shopify Theme Editor](https://0gnymw-sj.myshopify.com/admin/themes/188569714731/editor)
- **GitHub Pages URL (Backup / Static Host)**: [https://kaisorus-tessell.github.io/masha-archer/](https://kaisorus-tessell.github.io/masha-archer/)
- **GitHub Code Repository**: [https://github.com/kaiSorus-tessell/masha-archer](https://github.com/kaiSorus-tessell/masha-archer)

---

## 2. Immediate Action Items to Complete Setup

### Step A: Remove Shopify Store Password Protection (Make Public)
1. Open your browser to: [https://0gnymw-sj.myshopify.com/admin/online_store/preferences](https://0gnymw-sj.myshopify.com/admin/online_store/preferences)
2. Scroll down to the **Password protection** section.
3. Uncheck **Restrict access to visitors with the password**.
4. Click **Save** in the top right corner.

### Step B: Import 24 Products to Shopify Database
1. Open your browser to: [https://admin.shopify.com/store/0gnymw-sj/products](https://admin.shopify.com/store/0gnymw-sj/products)
2. Click **Import** (top right corner).
3. Select the local file: `shopify_products_import.csv` from your project folder.
4. Click **Upload and continue** -> **Import products**.

### Step C: Link `masha.org` Domain via EarthLink
1. Open the EarthLink Control Panel: [https://control.earthlink.net](https://control.earthlink.net)
   - **Login**: `Larissa.archer@gmail.com`
   - **Password**: `Homer123.lulu.maya1!`
2. Navigate to **Domain Management / DNS Settings** for `masha.org`.
3. Set the following DNS Records:
   - **A Record** (`@` host): `23.227.38.65` *(Shopify IP)*
   - **CNAME Record** (`www` host): `shops.myshopify.com`
4. Open Shopify Domain Settings: [https://admin.shopify.com/store/0gnymw-sj/settings/domains](https://admin.shopify.com/store/0gnymw-sj/settings/domains)
   - Click **Connect existing domain** -> type `masha.org` -> click **Verify**.

---

## 3. CLI Commands Reference

### Push Custom Theme Updates to Shopify via CLI
```bash
npx -y @shopify/cli theme push --store 0gnymw-sj.myshopify.com --theme 188569714731 --json --publish --allow-live --path shopify_theme
```

### Push Changes to GitHub Repository & GitHub Pages
```bash
git add .
git commit -m "Update store features"
git push
```

### Sync New Instagram Posts to Catalog via CLI
```bash
python3 sync_instagram.py "<image_url>" "<caption_text>"
```

---

## 4. Key Project Files Summary

- `index.html` — Full HTML storefront markup with hero, biography, press showcase, search/sort filters, and product catalog.
- `style.css` — Obsidian Black & Champagne Gold luxury styling system with responsive grids and SVG line art emblems.
- `app.js` — Core JavaScript storefront logic, wishlist management, reservation drawer, modal viewer, and catalog dataset.
- `shopify_theme/` — Official Shopify theme folder (`layout/theme.liquid`, `templates/index.liquid`, `assets/style.css`, `assets/app.js`).
- `shopify_products_import.csv` — Shopify-formatted CSV import file for 24 statement pieces.
- `wix_products_import.csv` — Wix Stores-formatted CSV import file.
- `wix_native_embed.html` — Self-contained single-file HTML embed snippet for Wix.
- `masha_archer_info.md` — Complete documentation of artist biography, aesthetic philosophy, press events, and inventory.
