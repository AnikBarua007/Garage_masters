document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
});

const products = [
    { id: 1, name: 'DFSK Glory 580 Key Cover', description: 'Metal Housing With TPU', price: 1200, oldPrice: 1500, image: 'images/p1.jpg', category: 'car' },
    { id: 2, name: 'Car Interior Light RGB', description: 'Remote Control', price: 1200, oldPrice: 2000, image: 'images/p2.jpg', category: 'car' },
    { id: 3, name: 'Car Transformer Sticker', description: '8 cm Large Sticker', price: 300, image: 'images/p3.jpg', category: 'car' },
    { id: 4, name: 'Zinc Alloy Wheel Rim Key Ring', description: 'Durable and stylish', price: 250, image: 'images/p4.jpg', category: 'car' },
    { id: 5, name: 'Bike LED Headlight', description: 'Bright and durable', price: 1500, image: 'images/p5.jpg', category: 'bike' },
    { id: 6, name: 'Bike Chain Cleaner', description: 'Effective and easy to use', price: 800, image: 'images/p6.jpg', category: 'bike' },
    { id: 7, name: 'Car Seat Cover', description: 'Comfortable and stylish', price: 2000, image: 'images/p7.jpg', category: 'car' },
    { id: 8, name: 'Car Air Freshener', description: 'Long-lasting fragrance', price: 500, image: 'images/p8.jpg', category: 'car' },
    { id: 9, name: 'Bike Mobile Holder', description: 'Secure and adjustable', price: 700, image: 'images/p9.jpg', category: 'bike' },
    { id: 10, name: 'Car Vacuum Cleaner', description: 'Portable and powerful', price: 1800, image: 'images/p10.jpg', category: 'car' },
    { id: 11, name: 'Bike Handlebar Grips', description: 'Comfortable and non-slip', price: 600, image: 'images/p11.jpg', category: 'bike' },
    { id: 12, name: 'Car GPS Tracker', description: 'Real-time tracking', price: 3000, image: 'images/p12.jpg', category: 'car' },
    { id: 13, name: 'Bike Helmet', description: 'Protective and comfortable', price: 2500, image: 'images/p13.jpg', category: 'bike' },
    { id: 14, name: 'Car Dash Cam', description: 'High-definition recording', price: 3500, image: 'images/p14.jpg', category: 'car' },
    { id: 15, name: 'Bike Tire Pump', description: 'Compact and efficient', price: 900, image: 'images/p15.jpg', category: 'bike' },
    { id: 16, name: 'Car Sunshade', description: 'Keeps interior cool', price: 1000, image: 'images/p16.jpg', category: 'car' },
    { id: 17, name: 'Bike Saddlebags', description: 'Spacious and waterproof', price: 2000, image: 'images/p17.jpg', category: 'bike' },
    { id: 18, name: 'Car Jump Starter', description: 'Portable and powerful', price: 4000, image: 'images/p18.jpg', category: 'car' },
    { id: 19, name: 'Bike Rearview Mirrors', description: 'Wide-angle view', price: 1200, image: 'images/p19.jpg', category: 'bike' },
    { id: 20, name: 'Car Bluetooth Adapter', description: 'Hands-free calling', price: 1500, image: 'images/p20.jpg', category: 'car' }
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




document.addEventListener("DOMContentLoaded", () => {
    // Calculate package prices
    const calculatePackagePrice = (packageBox) => {
        const basePrice = parseFloat(packageBox.getAttribute("data-base-price"));
        const quantity = parseInt(packageBox.querySelector(".quantity-input").value) || 0;
        return basePrice * quantity;
    };

    // Update total price of all packages
    const updateTotalPrice = () => {
        let totalPrice = 0;
        document.querySelectorAll(".package-box").forEach((packageBox) => {
            totalPrice += calculatePackagePrice(packageBox);
        });
        document.getElementById("totalPrice").innerText = `Total Price of Selected Packages: ৳${totalPrice.toFixed(2)}`;
    };

    // Event listeners for package quantity buttons
    document.querySelectorAll(".package-box").forEach((packageBox) => {
        const minusButton = packageBox.querySelector(".minus");
        const plusButton = packageBox.querySelector(".plus");
        const quantityInput = packageBox.querySelector(".quantity-input");

        minusButton.addEventListener("click", () => {
            const currentValue = parseInt(quantityInput.value) || 0;
            if (currentValue > 0) {
                quantityInput.value = currentValue - 1;
                packageBox.querySelector(".price-value").innerText = calculatePackagePrice(packageBox).toFixed(2);
                updateTotalPrice();
            }
        });

        plusButton.addEventListener("click", () => {
            const currentValue = parseInt(quantityInput.value) || 0;
            quantityInput.value = currentValue + 1;
            packageBox.querySelector(".price-value").innerText = calculatePackagePrice(packageBox).toFixed(2);
            updateTotalPrice();
        });

        quantityInput.addEventListener("input", () => {
            quantityInput.value = Math.max(0, parseInt(quantityInput.value) || 0);
            packageBox.querySelector(".price-value").innerText = calculatePackagePrice(packageBox).toFixed(2);
            updateTotalPrice();
        });
    });

    // "Go to Cart" button functionality
    const goToCartButton = document.getElementById("goToCartBtn");
    if (goToCartButton) {
        goToCartButton.addEventListener("click", () => {
            alert("Redirecting to cart...");
            // Implement cart redirection logic
        });
    }

    // Initial total price calculation
    updateTotalPrice();
});