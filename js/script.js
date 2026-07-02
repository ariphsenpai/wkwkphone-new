// ===== Product Data =====
const products = [
    {
        emoji: '📱',
        name: 'iPhone 13 Pro Max',
        spec: '256GB • Sierra Blue • 96%',
        price: 'Rp 9.999.000',
        status: 'ready'
    },
    {
        emoji: '📲',
        name: 'Samsung Galaxy S24',
        spec: '256GB • Phantom Black • 99%',
        price: 'Rp 11.499.000',
        status: 'ready'
    },
    {
        emoji: '💜',
        name: 'Xiaomi 14T Pro',
        spec: '512GB • Titan Gray • 98%',
        price: 'Rp 6.799.000',
        status: 'ready'
    },
    {
        emoji: '⚡',
        name: 'iPhone 15 Pro Max',
        spec: '256GB • Natural Titanium • 95%',
        price: 'Rp 16.999.000',
        status: 'ready'
    },
    {
        emoji: '📱',
        name: 'OPPO Find X8 Pro',
        spec: '512GB • Pearl White • 100%',
        price: 'Rp 9.799.000',
        status: 'ready'
    },
    {
        emoji: '📲',
        name: 'Samsung Galaxy Z Fold6',
        spec: '512GB • Navy • 97%',
        price: 'Rp 18.499.000',
        status: 'ready'
    }
];

// ===== Render Products =====
function renderProducts() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    grid.innerHTML = products.map(p => `
        <div class="product-card">
            <div class="emoji-icon">${p.emoji}</div>
            <h3>${p.name}</h3>
            <p class="spec">${p.spec}</p>
            <p class="price">${p.price}</p>
            <span class="status ${p.status}">
                ${p.status === 'ready' ? '✅ Tersedia' : '❌ Terjual'}
            </span>
        </div>
    `).join('');
}

// ===== Mobile Menu Toggle =====
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('open');
}

// ===== Close menu on link click (mobile) =====
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();

    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
            });
        });
    }
});