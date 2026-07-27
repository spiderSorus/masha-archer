// Masha Archer Fine Jewelry Storefront Application Script

const PRODUCTS_DATA = [
  {
    "id": "red-and-black-collar",
    "title": "Masha Archer Red and Black Collar",
    "categories": ["necklaces"],
    "price": "$2,375.00",
    "priceNumeric": 2375,
    "url": "https://www.thejewelonline.com/mashaarcher/red-and-black-collar",
    "primary_image_rel": "reseller_images/masha_archer_red_and_black_collar.jpg",
    "alternate_image_rel": "reseller_images/masha_archer_red_and_black_collar_alt.jpeg"
  },
  {
    "id": "plum-wreath-3-necklace",
    "title": "Masha Archer Plum Wreath #3 Necklace",
    "categories": ["necklaces"],
    "price": "$575.00",
    "priceNumeric": 575,
    "url": "https://www.thejewelonline.com/mashaarcher/plum-wreath-3-necklace",
    "primary_image_rel": "reseller_images/masha_archer_plum_wreath_3_necklace.jpg",
    "alternate_image_rel": "reseller_images/masha_archer_plum_wreath_3_necklace_alt.jpeg"
  },
  {
    "id": "black-and-red-wreath",
    "title": "Masha Archer Black and Red Wreath",
    "categories": ["necklaces"],
    "price": "$575.00",
    "priceNumeric": 575,
    "url": "https://www.thejewelonline.com/mashaarcher/black-and-red-wreath",
    "primary_image_rel": "reseller_images/masha_archer_black_and_red_wreath.jpg",
    "alternate_image_rel": "reseller_images/masha_archer_black_and_red_wreath_alt.jpg"
  },
  {
    "id": "the-merry-widow",
    "title": "Masha Archer The Merry Widow",
    "categories": ["necklaces"],
    "price": "$2,475.00",
    "priceNumeric": 2475,
    "url": "https://www.thejewelonline.com/mashaarcher/the-merry-widow",
    "primary_image_rel": "reseller_images/masha_archer_the_merry_widow.jpg",
    "alternate_image_rel": "reseller_images/masha_archer_the_merry_widow_alt.jpg"
  },
  {
    "id": "black-and-green-collar",
    "title": "Masha Archer Black and Green Collar",
    "categories": ["necklaces"],
    "price": "$3,675.00",
    "priceNumeric": 3675,
    "url": "https://www.thejewelonline.com/mashaarcher/black-and-green-collar",
    "primary_image_rel": "reseller_images/masha_archer_black_and_green_collar.jpg",
    "alternate_image_rel": "reseller_images/masha_archer_black_and_green_collar_alt.jpg"
  },
  {
    "id": "the-main-hearth",
    "title": "Masha Archer The Main Hearth",
    "categories": ["necklaces"],
    "price": "$2,675.00",
    "priceNumeric": 2675,
    "url": "https://www.thejewelonline.com/mashaarcher/the-main-hearth",
    "primary_image_rel": "reseller_images/masha_archer_the_main_hearth.jpg",
    "alternate_image_rel": "reseller_images/masha_archer_the_main_hearth_alt.jpg"
  },
  {
    "id": "green-and-red-collar-4",
    "title": "Masha Archer Green and Red Collar #4",
    "categories": ["necklaces"],
    "price": "$2,875.00",
    "priceNumeric": 2875,
    "url": "https://www.thejewelonline.com/mashaarcher/jp6qo9ufn6w5geb3ck0gpnhoi3q0s4",
    "primary_image_rel": "reseller_images/masha_archer_green_and_red_collar_4.jpeg",
    "alternate_image_rel": "reseller_images/masha_archer_green_and_red_collar_4_alt.jpeg"
  },
  {
    "id": "blue-and-black-wreath-10b",
    "title": "Masha Archer Blue and Black Wreath #10B",
    "categories": ["necklaces"],
    "price": "$375.00",
    "priceNumeric": 375,
    "url": "https://www.thejewelonline.com/mashaarcher/dz9bx9fn3j2xgm9varfc4vei41j25r",
    "primary_image_rel": "reseller_images/masha_archer_blue_and_black_wreath_10b.jpeg",
    "alternate_image_rel": "reseller_images/masha_archer_blue_and_black_wreath_10b_alt.jpeg"
  },
  {
    "id": "blue-gorget-10",
    "title": "Masha Archer Blue Gorget #10",
    "categories": ["necklaces"],
    "price": "$1,875.00",
    "priceNumeric": 1875,
    "url": "https://www.thejewelonline.com/mashaarcher/yzndb4gk53lw2r65o2zumukazuywok",
    "primary_image_rel": "reseller_images/masha_archer_blue_gorget_10.jpeg",
    "alternate_image_rel": "reseller_images/masha_archer_blue_gorget_10_alt.jpeg"
  },
  {
    "id": "turquoise-and-red-gorget-12",
    "title": "Masha Archer Turquoise and Red Gorget #12",
    "categories": ["necklaces"],
    "price": "$1,275.00",
    "priceNumeric": 1275,
    "url": "https://www.thejewelonline.com/mashaarcher/is2fd478d50xddmpao4rsovs91km7o",
    "primary_image_rel": "reseller_images/masha_archer_turquoise_and_red_gorget_12.jpeg",
    "alternate_image_rel": "reseller_images/masha_archer_turquoise_and_red_gorget_12_alt.jpeg"
  },
  {
    "id": "white-and-blue-wreath",
    "title": "Masha Archer White and Blue Wreath",
    "categories": ["necklaces"],
    "price": "$475.00",
    "priceNumeric": 475,
    "url": "https://www.thejewelonline.com/mashaarcher/white-and-blue-wreath",
    "primary_image_rel": "reseller_images/masha_archer_white_and_blue_wreath.jpg",
    "alternate_image_rel": "reseller_images/masha_archer_white_and_blue_wreath_alt.jpg"
  },
  {
    "id": "lavender-mint-glass-mint-collar",
    "title": "Masha Archer Lavender Mint Glass Collar",
    "categories": ["necklaces"],
    "price": "$1,950.00",
    "priceNumeric": 1950,
    "url": "https://www.thejewelonline.com/mashaarcher/lavender-mint-glass-mint-collar",
    "primary_image_rel": "reseller_images/masha_archer_lavender_mint_glass_mint_collar.jpg",
    "alternate_image_rel": "reseller_images/masha_archer_lavender_mint_glass_mint_collar_alt.jpg"
  },
  {
    "id": "white-opalite-spectator",
    "title": "Masha Archer White Opalite Spectator",
    "categories": ["necklaces"],
    "price": "$2,375.00",
    "priceNumeric": 2375,
    "url": "https://www.thejewelonline.com/mashaarcher/ixmltyuyzxo0fda66x0qnlrc7c0vel",
    "primary_image_rel": "reseller_images/masha_archer_white_opalite_spectator.jpg",
    "alternate_image_rel": "reseller_images/masha_archer_white_opalite_spectator_alt.jpeg"
  },
  {
    "id": "turquoise-opalite-wreath-6",
    "title": "Masha Archer Turquoise Opalite Wreath #6",
    "categories": ["necklaces"],
    "price": "$1,750.00",
    "priceNumeric": 1750,
    "url": "https://www.thejewelonline.com/mashaarcher/kkeikxcaharclysyq8huw6igj0dnwj",
    "primary_image_rel": "reseller_images/masha_archer_turquoise_opalite_wreath_6.jpeg",
    "alternate_image_rel": "reseller_images/masha_archer_turquoise_opalite_wreath_6_alt.jpeg"
  },
  {
    "id": "white-opalite-pastel-wreath-2",
    "title": "Masha Archer White Opalite Pastel Wreath #2",
    "categories": ["necklaces"],
    "price": "$575.00",
    "priceNumeric": 575,
    "url": "https://www.thejewelonline.com/mashaarcher/0b5ujqt9fyg167m8nzn7bv2kl8kaq0",
    "primary_image_rel": "reseller_images/masha_archer_white_opalite_pastel_wreath_2.jpeg",
    "alternate_image_rel": "reseller_images/masha_archer_white_opalite_pastel_wreath_2_alt.jpeg"
  },
  {
    "id": "tear-drop-wreath-3",
    "title": "Masha Archer Tear Drop Wreath #3",
    "categories": ["necklaces"],
    "price": "$675.00",
    "priceNumeric": 675,
    "url": "https://www.thejewelonline.com/mashaarcher/v0dkmjr3hi5fkmzjehxk68da6k50fe",
    "primary_image_rel": "reseller_images/masha_archer_tear_drop_wreath_3.jpeg",
    "alternate_image_rel": "reseller_images/masha_archer_tear_drop_wreath_3_alt.jpeg"
  },
  {
    "id": "saffron-ziggurat-3b",
    "title": "Masha Archer Saffron Ziggurat #3b",
    "categories": ["necklaces"],
    "price": "$2,875.00",
    "priceNumeric": 2875,
    "url": "https://www.thejewelonline.com/mashaarcher/twvsy042ix4973n2vu4i59l0n169tr",
    "primary_image_rel": "reseller_images/masha_archer_saffron_ziggurat_3b.jpeg",
    "alternate_image_rel": "reseller_images/masha_archer_saffron_ziggurat_3b_alt.jpeg"
  },
  {
    "id": "himalayan-wreath-3y",
    "title": "Masha Archer Himalayan Wreath #3y",
    "categories": ["necklaces"],
    "price": "$1,750.00",
    "priceNumeric": 1750,
    "url": "https://www.thejewelonline.com/mashaarcher/tlg0dba783ojabyerhv7dscaqigcss",
    "primary_image_rel": "reseller_images/masha_archer_himalayan_wreath_3y.jpeg",
    "alternate_image_rel": "reseller_images/masha_archer_himalayan_wreath_3y_alt.jpeg"
  },
  {
    "id": "spiral-motif-earrings",
    "title": "Masha Archer Spiral Motif Earrings",
    "categories": ["earrings"],
    "price": "$225.00",
    "priceNumeric": 225,
    "url": "https://www.thejewelonline.com/mashaarcher/spiral-motif-earrings",
    "primary_image_rel": "reseller_images/masha_archer_spiral_motif_earrings.jpeg",
    "alternate_image_rel": "reseller_images/masha_archer_spiral_motif_earrings_alt.jpeg"
  },
  {
    "id": "mahgreb-series-copal-earrings",
    "title": "Masha Archer 'Mahgreb Series' Copal Earrings",
    "categories": ["earrings"],
    "price": "$225.00",
    "priceNumeric": 225,
    "url": "https://www.thejewelonline.com/mashaarcher/mahgreb-series-copal-earrings",
    "primary_image_rel": "reseller_images/masha_archer_mahgreb_series_copal_earrings.jpeg",
    "alternate_image_rel": "reseller_images/masha_archer_mahgreb_series_copal_earrings_alt.jpeg"
  },
  {
    "id": "rose-opalite-earrings",
    "title": "Masha Archer Rose Opalite Earrings",
    "categories": ["earrings"],
    "price": "$225.00",
    "priceNumeric": 225,
    "url": "https://www.thejewelonline.com/mashaarcher/rose-opalite-earrings",
    "primary_image_rel": "reseller_images/masha_archer_rose_opalite_earrings.jpeg",
    "alternate_image_rel": "reseller_images/masha_archer_rose_opalite_earrings_alt.jpeg"
  },
  {
    "id": "chalcedony-earrings",
    "title": "Masha Archer Chalcedony Earrings",
    "categories": ["earrings"],
    "price": "$225.00",
    "priceNumeric": 225,
    "url": "https://www.thejewelonline.com/mashaarcher/chalcedony-earrings",
    "primary_image_rel": "reseller_images/masha_archer_chalcedony_earrings.jpeg",
    "alternate_image_rel": "reseller_images/masha_archer_chalcedony_earrings_alt.jpeg"
  },
  {
    "id": "amber-earrings",
    "title": "Masha Archer Amber Earrings",
    "categories": ["earrings"],
    "price": "$225.00",
    "priceNumeric": 225,
    "url": "https://www.thejewelonline.com/mashaarcher/amber-earrings",
    "primary_image_rel": "reseller_images/masha_archer_amber_earrings.jpeg",
    "alternate_image_rel": "reseller_images/masha_archer_amber_earrings_alt.jpeg"
  },
  {
    "id": "howlite-earrings",
    "title": "Masha Archer Howlite Earrings",
    "categories": ["earrings"],
    "price": "$225.00",
    "priceNumeric": 225,
    "url": "https://www.thejewelonline.com/mashaarcher/howlite-earrings",
    "primary_image_rel": "reseller_images/masha_archer_howlite_earrings.jpeg",
    "alternate_image_rel": "reseller_images/masha_archer_howlite_earrings_alt.jpeg"
  }
];

// Local state
let wishlist = JSON.parse(localStorage.getItem('masha_wishlist')) || [];
let inquiryBag = JSON.parse(localStorage.getItem('masha_inquiry_bag')) || [];

document.addEventListener('DOMContentLoaded', () => {
    initStore();
    updateBadges();
    setupEventListeners();
});

function initStore() {
    renderProducts();
}

function getFilteredAndSortedProducts() {
    const searchInput = document.getElementById('search-input');
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

    const activeCatBtn = document.querySelector('#category-filters .filter-btn.active');
    const categoryFilter = activeCatBtn ? activeCatBtn.dataset.filter : 'all';

    const activePriceBtn = document.querySelector('#price-filters .price-btn.active');
    const priceFilter = activePriceBtn ? activePriceBtn.dataset.price : 'all';

    const sortSelect = document.getElementById('sort-select');
    const sortValue = sortSelect ? sortSelect.value : 'featured';

    let filtered = PRODUCTS_DATA.filter(product => {
        // Category match
        const matchesCategory = categoryFilter === 'all' || product.categories.includes(categoryFilter) ||
            (categoryFilter === 'necklaces' && (product.title.toLowerCase().includes('necklace') || product.title.toLowerCase().includes('collar') || product.title.toLowerCase().includes('wreath') || product.title.toLowerCase().includes('gorget') || product.title.toLowerCase().includes('widow') || product.title.toLowerCase().includes('hearth') || product.title.toLowerCase().includes('ziggurat'))) ||
            (categoryFilter === 'earrings' && product.title.toLowerCase().includes('earring'));

        // Price range match
        let matchesPrice = true;
        if (priceFilter === 'under-500') matchesPrice = product.priceNumeric < 500;
        else if (priceFilter === '500-2000') matchesPrice = product.priceNumeric >= 500 && product.priceNumeric <= 2000;
        else if (priceFilter === 'above-2000') matchesPrice = product.priceNumeric > 2000;

        // Search match
        const matchesSearch = query === '' || 
            product.title.toLowerCase().includes(query) || 
            product.categories.some(cat => cat.toLowerCase().includes(query));

        return matchesCategory && matchesPrice && matchesSearch;
    });

    // Sorting logic
    if (sortValue === 'price-asc') {
        filtered.sort((a, b) => a.priceNumeric - b.priceNumeric);
    } else if (sortValue === 'price-desc') {
        filtered.sort((a, b) => b.priceNumeric - a.priceNumeric);
    } else if (sortValue === 'name-asc') {
        filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    return filtered;
}

function renderProducts() {
    const productGrid = document.getElementById('product-grid');
    const resultsCount = document.getElementById('results-count');
    if (!productGrid) return;

    productGrid.innerHTML = '';
    const products = getFilteredAndSortedProducts();

    if (resultsCount) {
        resultsCount.textContent = `Showing ${products.length} of ${PRODUCTS_DATA.length} pieces`;
    }

    if (products.length === 0) {
        productGrid.innerHTML = `
            <div class="no-results">
                <h3>No Exquisite Masterpieces Found</h3>
                <p>Try resetting your search query or price filter to view available items in our collection.</p>
                <button class="btn btn-secondary btn-sm" onclick="resetFilters()">Reset All Filters</button>
            </div>
        `;
        return;
    }

    products.forEach(product => {
        const isFav = wishlist.some(item => item.id === product.id);
        const card = document.createElement('div');
        card.className = 'product-card animate-slide-up';

        const hasAlt = product.alternate_image_rel && product.alternate_image_rel !== '';
        
        let imageHTML = `<img src="${product.primary_image_rel}" alt="${product.title}" class="product-image primary-image" loading="lazy">`;
        if (hasAlt) {
            imageHTML += `<img src="${product.alternate_image_rel}" alt="${product.title} Alternate View" class="product-image alternate-image" loading="lazy">`;
        }

        card.innerHTML = `
            <div class="image-container">
                ${imageHTML}
                <button class="card-fav-btn ${isFav ? 'active' : ''}" data-id="${product.id}" title="${isFav ? 'Remove from Wishlist' : 'Add to Wishlist'}">
                    ${isFav ? '♥' : '♡'}
                </button>
                <div class="card-overlay">
                    <span>View Piece</span>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">${product.price}</p>
                <div class="card-actions-row">
                    <button class="btn-card-inquire" data-id="${product.id}">Inquire / Reserve</button>
                </div>
            </div>
        `;

        // Card Click opens Modal
        card.addEventListener('click', (e) => {
            if (e.target.classList.contains('card-fav-btn')) {
                e.stopPropagation();
                toggleWishlist(product);
                return;
            }
            if (e.target.classList.contains('btn-card-inquire')) {
                e.stopPropagation();
                addToInquiryBag(product);
                return;
            }
            openProductModal(product);
        });

        productGrid.appendChild(card);
    });
}

function resetFilters() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';
    
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');

    document.querySelectorAll('.price-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.price-btn[data-price="all"]').classList.add('active');

    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) sortSelect.value = 'featured';

    renderProducts();
}

/* WISHLIST & INQUIRY BAG LOGIC */
function toggleWishlist(product) {
    const index = wishlist.findIndex(item => item.id === product.id);
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast(`Removed "${product.title}" from Wishlist`);
    } else {
        wishlist.push(product);
        showToast(`Added "${product.title}" to Wishlist ♡`);
    }
    localStorage.setItem('masha_wishlist', JSON.stringify(wishlist));
    updateBadges();
    renderProducts();
    renderWishlistDrawer();
}

function addToInquiryBag(product) {
    const exists = inquiryBag.some(item => item.id === product.id);
    if (!exists) {
        inquiryBag.push(product);
        localStorage.setItem('masha_inquiry_bag', JSON.stringify(inquiryBag));
        showToast(`Added "${product.title}" to Reservation Bag 💼`);
    } else {
        showToast(`"${product.title}" is already in your Reservation Bag`);
    }
    updateBadges();
    renderBagDrawer();
    openDrawer('inquiry-bag-drawer');
}

function removeFromInquiryBag(productId) {
    inquiryBag = inquiryBag.filter(item => item.id !== productId);
    localStorage.setItem('masha_inquiry_bag', JSON.stringify(inquiryBag));
    updateBadges();
    renderBagDrawer();
}

function updateBadges() {
    const wishBadge = document.getElementById('wishlist-badge');
    const bagBadge = document.getElementById('inquiry-bag-badge');
    const drawerWishCount = document.getElementById('drawer-wishlist-count');
    const drawerBagCount = document.getElementById('drawer-bag-count');

    if (wishBadge) wishBadge.textContent = wishlist.length;
    if (bagBadge) bagBadge.textContent = inquiryBag.length;
    if (drawerWishCount) drawerWishCount.textContent = wishlist.length;
    if (drawerBagCount) drawerBagCount.textContent = inquiryBag.length;
}

function renderWishlistDrawer() {
    const container = document.getElementById('wishlist-items-container');
    if (!container) return;

    if (wishlist.length === 0) {
        container.innerHTML = `<p class="text-center" style="margin-top: 3rem;">Your Wishlist is currently empty.</p>`;
        return;
    }

    container.innerHTML = wishlist.map(item => `
        <div class="drawer-item">
            <img src="${item.primary_image_rel}" alt="${item.title}">
            <div class="drawer-item-info">
                <h4>${item.title}</h4>
                <p>${item.price}</p>
            </div>
            <button class="drawer-item-remove" onclick="toggleWishlistById('${item.id}')">&times;</button>
        </div>
    `).join('');
}

function toggleWishlistById(id) {
    const product = PRODUCTS_DATA.find(p => p.id === id);
    if (product) toggleWishlist(product);
}

function renderBagDrawer() {
    const container = document.getElementById('bag-items-container');
    if (!container) return;

    if (inquiryBag.length === 0) {
        container.innerHTML = `<p class="text-center" style="margin-top: 3rem;">Your Reservation Bag is empty.</p>`;
        return;
    }

    container.innerHTML = inquiryBag.map(item => `
        <div class="drawer-item">
            <img src="${item.primary_image_rel}" alt="${item.title}">
            <div class="drawer-item-info">
                <h4>${item.title}</h4>
                <p>${item.price}</p>
            </div>
            <button class="drawer-item-remove" onclick="removeFromInquiryBag('${item.id}')">&times;</button>
        </div>
    `).join('');
}

/* MODAL & LIGHTBOX SYSTEM */
function openProductModal(product) {
    const modal = document.getElementById('product-modal');
    const modalImage = document.getElementById('modal-product-image');
    const modalTitle = document.getElementById('modal-product-title');
    const modalPrice = document.getElementById('modal-product-price');
    const modalDesc = document.getElementById('modal-product-desc');
    const modalInquireBtn = document.getElementById('modal-inquiry-btn');
    const modalAddBagBtn = document.getElementById('modal-add-bag-btn');
    const modalFavBtn = document.getElementById('modal-fav-btn');
    const galleryThumbs = document.getElementById('modal-gallery-thumbs');
    const zoomBtn = document.getElementById('modal-zoom-btn');

    modalTitle.textContent = product.title;
    modalPrice.textContent = product.price;

    modalDesc.innerHTML = `
        <p>This is a one-of-a-kind statement piece handcrafted by Masha Archer in her San Francisco studio. Embodying her signature 'Art-to-Wear' aesthetic, it features an elaborate arrangement of antique beads and semi-precious stones.</p>
        <p><strong>San Francisco Studio Original | One-of-a-Kind</strong></p>
    `;

    modalImage.src = product.primary_image_rel;
    modalImage.alt = product.title;

    galleryThumbs.innerHTML = '';
    const thumb1 = document.createElement('img');
    thumb1.src = product.primary_image_rel;
    thumb1.className = 'thumb-img active';
    thumb1.addEventListener('click', () => {
        modalImage.src = product.primary_image_rel;
        document.querySelectorAll('.thumb-img').forEach(t => t.classList.remove('active'));
        thumb1.classList.add('active');
    });
    galleryThumbs.appendChild(thumb1);

    if (product.alternate_image_rel) {
        const thumb2 = document.createElement('img');
        thumb2.src = product.alternate_image_rel;
        thumb2.className = 'thumb-img';
        thumb2.addEventListener('click', () => {
            modalImage.src = product.alternate_image_rel;
            document.querySelectorAll('.thumb-img').forEach(t => t.classList.remove('active'));
            thumb2.classList.add('active');
        });
        galleryThumbs.appendChild(thumb2);
    }

    // Email inquiry mailto link
    const subject = encodeURIComponent(`Acquisition Inquiry: ${product.title}`);
    const body = encodeURIComponent(`Hello Masha Archer Studio,\n\nI am interested in acquiring the one-of-a-kind piece: "${product.title}" (${product.price}). Please provide purchase and availability details.\n\nThank you.`);
    modalInquireBtn.href = `mailto:studio@mashaarcher.com?subject=${subject}&body=${body}`;

    // Add to Bag Button
    modalAddBagBtn.onclick = () => addToInquiryBag(product);

    // Fav Button
    const isFav = wishlist.some(item => item.id === product.id);
    modalFavBtn.textContent = isFav ? '♥' : '♡';
    modalFavBtn.style.color = isFav ? '#e63946' : 'inherit';
    modalFavBtn.onclick = () => {
        toggleWishlist(product);
        const updatedFav = wishlist.some(item => item.id === product.id);
        modalFavBtn.textContent = updatedFav ? '♥' : '♡';
        modalFavBtn.style.color = updatedFav ? '#e63946' : 'inherit';
    };

    // Zoom Lightbox
    zoomBtn.onclick = () => openLightbox(modalImage.src);

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-image');
    lightboxImg.src = imageSrc;
    lightbox.classList.add('open');
}

function openDrawer(drawerId) {
    const drawer = document.getElementById(drawerId);
    if (drawer) {
        drawer.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
}

function closeDrawer(drawerId) {
    const drawer = document.getElementById(drawerId);
    if (drawer) {
        drawer.classList.remove('open');
        document.body.style.overflow = '';
    }
}

function showToast(message) {
    const toast = document.getElementById('toast-notification');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3500);
}

/* EVENT LISTENERS SETUP */
function setupEventListeners() {
    // Search Input
    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            if (searchClear) {
                searchClear.classList.toggle('visible', searchInput.value.length > 0);
            }
            renderProducts();
        });
    }
    if (searchClear) {
        searchClear.addEventListener('click', () => {
            searchInput.value = '';
            searchClear.classList.remove('visible');
            renderProducts();
        });
    }

    // Sort Select
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', () => renderProducts());
    }

    // Category Filter Pills
    document.querySelectorAll('#category-filters .filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#category-filters .filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProducts();
        });
    });

    // Price Filter Pills
    document.querySelectorAll('#price-filters .price-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#price-filters .price-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProducts();
        });
    });

    // View Toggle (3 Grid vs 4 Grid)
    const btnGrid3 = document.getElementById('view-grid-3');
    const btnGrid4 = document.getElementById('view-grid-4');
    const productGrid = document.getElementById('product-grid');

    if (btnGrid3 && btnGrid4 && productGrid) {
        btnGrid3.addEventListener('click', () => {
            btnGrid3.classList.add('active');
            btnGrid4.classList.remove('active');
            productGrid.classList.remove('grid-4');
            productGrid.classList.add('grid-3');
        });
        btnGrid4.addEventListener('click', () => {
            btnGrid4.classList.add('active');
            btnGrid3.classList.remove('active');
            productGrid.classList.remove('grid-3');
            productGrid.classList.add('grid-4');
        });
    }

    // Wishlist Drawer Triggers
    const wishTrigger = document.getElementById('wishlist-trigger');
    const wishClose = document.getElementById('wishlist-close');
    if (wishTrigger) {
        wishTrigger.addEventListener('click', () => {
            renderWishlistDrawer();
            openDrawer('wishlist-drawer');
        });
    }
    if (wishClose) {
        wishClose.addEventListener('click', () => closeDrawer('wishlist-drawer'));
    }

    // Inquiry Bag Drawer Triggers
    const bagTrigger = document.getElementById('inquiry-bag-trigger');
    const bagClose = document.getElementById('bag-close');
    if (bagTrigger) {
        bagTrigger.addEventListener('click', () => {
            renderBagDrawer();
            openDrawer('inquiry-bag-drawer');
        });
    }
    if (bagClose) {
        bagClose.addEventListener('click', () => closeDrawer('inquiry-bag-drawer'));
    }

    // Combined Bag Inquiry Email
    const sendBagBtn = document.getElementById('send-bag-inquiry-btn');
    if (sendBagBtn) {
        sendBagBtn.addEventListener('click', () => {
            if (inquiryBag.length === 0) {
                showToast("Your Reservation Bag is empty!");
                return;
            }
            const titles = inquiryBag.map(item => `• ${item.title} (${item.price})`).join('\n');
            const subject = encodeURIComponent(`Reservation & Acquisition Inquiry (${inquiryBag.length} Pieces)`);
            const body = encodeURIComponent(`Hello Masha Archer Studio,\n\nI am interested in acquiring the following pieces:\n\n${titles}\n\nPlease contact me with purchase and reservation details.\n\nThank you.`);
            window.location.href = `mailto:studio@mashaarcher.com?subject=${subject}&body=${body}`;
        });
    }

    // Wishlist Inquire All
    const inquireWishlistBtn = document.getElementById('inquire-all-wishlist');
    if (inquireWishlistBtn) {
        inquireWishlistBtn.addEventListener('click', () => {
            if (wishlist.length === 0) {
                showToast("Your Wishlist is empty!");
                return;
            }
            const titles = wishlist.map(item => `• ${item.title} (${item.price})`).join('\n');
            const subject = encodeURIComponent(`Wishlist Inquiry (${wishlist.length} Items)`);
            const body = encodeURIComponent(`Hello Masha Archer Studio,\n\nI have saved the following items to my wishlist and would like to inquire about acquiring them:\n\n${titles}\n\nThank you.`);
            window.location.href = `mailto:studio@mashaarcher.com?subject=${subject}&body=${body}`;
        });
    }

    // Modals Close
    const modalClose = document.getElementById('modal-close');
    const modal = document.getElementById('product-modal');
    if (modalClose && modal) {
        modalClose.addEventListener('click', () => {
            modal.classList.remove('open');
            document.body.style.overflow = '';
        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
    }

    // Lightbox Close
    const lightbox = document.getElementById('lightbox-modal');
    const lightboxClose = document.getElementById('lightbox-close');
    if (lightbox && lightboxClose) {
        lightboxClose.addEventListener('click', () => lightbox.classList.remove('open'));
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) lightbox.classList.remove('open');
        });
    }

    // Wix Modal Triggers
    const wixTrigger = document.getElementById('wix-export-trigger');
    const wixModal = document.getElementById('wix-modal');
    const wixClose = document.getElementById('wix-close');
    const copyWixBtn = document.getElementById('copy-wix-code');

    if (wixTrigger && wixModal) {
        wixTrigger.addEventListener('click', () => wixModal.classList.add('open'));
    }
    if (wixClose && wixModal) {
        wixClose.addEventListener('click', () => wixModal.classList.remove('open'));
    }
    if (copyWixBtn) {
        copyWixBtn.addEventListener('click', () => {
            const snippet = `<iframe src="index.html" style="width:100%; height:100vh; border:none;"></iframe>`;
            navigator.clipboard.writeText(snippet);
            showToast("Copied Wix Embed Snippet to Clipboard!");
        });
    }

    // Acquisition Form Handler
    const acquisitionForm = document.getElementById('acquisition-form');
    if (acquisitionForm) {
        acquisitionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            showToast(`Thank you, ${name}. Your inquiry has been sent to Masha Archer Studio.`);
            acquisitionForm.reset();
        });
    }
}
