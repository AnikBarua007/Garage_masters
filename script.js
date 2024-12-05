document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
});

const products = [
    { id: 1, name: 'DFSK Glory 580 Key Cover', description: 'Metal Housing With TPU', price: 1200, oldPrice: 1500, image: 'p1.jpg', category: 'car' },
    { id: 2, name: 'Car Interior Light RGB', description: 'Remote Control', price: 1200, oldPrice: 2000, image: 'p2.jpg', category: 'car' },
    { id: 3, name: 'Car Transformer Sticker', description: '8 cm Large Sticker', price: 300, image: 'p3.jpg', category: 'car' },
    { id: 4, name: 'Zinc Alloy Wheel Rim Key Ring', description: 'Durable and stylish', price: 250, image: 'p4.jpg', category: 'car' }
];

function displayProducts(products) {
    const productList = document.querySelector('.product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>৳ ${product.price} ${product.oldPrice ? `<span class="old-price">৳ ${product.oldPrice}</span>` : ''}</p>
        `;
        productList.appendChild(productDiv);
    });
}

function searchProducts() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const filteredProducts = products.filter(product => product.category.includes(searchQuery));
    displayProducts(filteredProducts);
}

function addToCart(productId) {
    // Implement add to cart
}

function addToWishlist(productId) {
    // Implement add to wishlist
}
