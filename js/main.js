const products = [
    { id: 1, name: 'iPhone 13 Pro Max 256GB', brand: 'iPhone', price: 9500000, original: 12000000, image: 'https://images.unsplash.com/photo-1632661674594-b618f8174a1e?w=400&auto=format&fit=crop&q=60', discount: 21, rating: 4.8 },
    { id: 2, name: 'Samsung Galaxy S22 Ultra', brand: 'Samsung', price: 8200000, original: 9500000, image: 'https://images.unsplash.com/photo-1610945265064-f4d69d82447a?w=400&auto=format&fit=crop&q=60', discount: 14, rating: 4.7 },
    { id: 3, name: 'iPhone 12 Pro 128GB', brand: 'iPhone', price: 6800000, original: 8500000, image: 'https://images.unsplash.com/photo-1605236453807-638f824d5d8e?w=400&auto=format&fit=crop&q=60', discount: 20, rating: 4.6 },
    { id: 4, name: 'Xiaomi 12T Pro 5G', brand: 'Xiaomi', price: 5200000, original: 6500000, image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff23?w=400&auto=format&fit=crop&q=60', discount: 20, rating: 4.5 },
    { id: 5, name: 'Samsung Galaxy Z Flip 4', brand: 'Samsung', price: 7800000, original: 9000000, image: 'https://images.unsplash.com/photo-1667372393119-c8c9c26dd6f0?w=400&auto=format&fit=crop&q=60', discount: 13, rating: 4.4 },
    { id: 6, name: 'iPhone 11 64GB', brand: 'iPhone', price: 4500000, original: 5500000, image: 'https://images.unsplash.com/photo-1575695343380-d460ba189a6a?w=400&auto=format&fit=crop&q=60', discount: 18, rating: 4.3 },
    { id: 7, name: 'OPPO Reno8 Pro 5G', brand: 'OPPO', price: 4800000, original: 6000000, image: 'https://images.unsplash.com/photo-1574940509364-0466bf2fb8b9?w=400&auto=format&fit=crop&q=60', discount: 20, rating: 4.2 },
    { id: 8, name: 'Xiaomi Redmi Note 12', brand: 'Xiaomi', price: 2800000, original: 3500000, image: 'https://images.unsplash.com/photo-1511707171634-5fbaa8bf5e1c?w=400&auto=format&fit=crop&q=60', discount: 20, rating: 4.1 },
    { id: 9, name: 'Vivo V25 Pro 5G', brand: 'Vivo', price: 4200000, original: 5000000, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=60', discount: 16, rating: 4.3 },
    { id: 10, name: 'iPhone SE 2022 64GB', brand: 'iPhone', price: 3800000, original: 4500000, image: 'https://images.unsplash.com/photo-1592899677712-14b6e5337352?w=400&auto=format&fit=crop&q=60', discount: 16, rating: 4.0 },
];

const formatPrice = (price) => 'Rp' + price.toLocaleString('id-ID');

const createProductCard = (product) => `
    <div class="product-card">
        <div class="product-img">
            <img src="${product portrayed image*!}" alt="${product.name}">
            ${product.discount ? `<span class="badge-discount">-${product.discount}%</span>` : ''}
            <span class="badge-wish"><i class="far fa-heart"></i></span>
        </div>
        <div class="product-info">
            <div class="product-brand">${product.brand}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-price">
                <span class="price-current">${formatPrice(product.price)}</span>
                <span class="price-original">${formatPrice(product.original)}</span>
            </div>
            <div class="product-meta">
                <span class="rating"><i class="fas fa-star"></i> ${product.rating}</span>
                <span>Terjual 100+</span>
            </div>
        </div>
        <button class="product-btn">Tambah ke Keranjang</button>
    </div>
`;

const renderProducts = (containerId, productList) => {
    const container = document.getElementById(containerId);
    if (container) container.innerHTML = productList.map(createProductCard).join('');
};

document.addEventListener('DOMContentLoaded', () => {
    renderProducts('productGrid', products.slice(0, 10));
    renderProducts('flashSaleGrid', products.slice(0, 5));

    // Countdown
    let time = 5 * 60 * 60 + 59 * 60 + 59;
    const timerEl = document.getElementById('timer');
    if (timerEl) {
        setInterval(() => {
            time--;
            const h = Math.floor(time / 3600).toString().padStart(2, '0');
            const m = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
            const s = (time % 60).toString().padStart(2, '0');
            timerEl.textContent = `${h}:${m}:${s}`;
        }, 1000);
    }

    // Tab filter
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const tab = btn.dataset.tab;
            const filtered = tab === 'all' ? products : products.filter(p => p.brand.toLowerCase() === tab);
            renderProducts('productGrid', filtered.slice(0, 10));
        });
    });

    // Load more
    const loadMore = document.getElementById('loadMore');
    if (loadMore) {
        loadMore.addEventListener('click', () => {
            renderProducts('productGrid', [...products, ...products.slice(0, 5)]);
            loadMore.style.display = 'none';
        });
    }
});
