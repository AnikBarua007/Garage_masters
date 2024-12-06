// design Patterns/searchStrategy.js

class SearchStrategy {
    constructor(products) {
        this.products = products;
    }

    // Strategy to show all products
    showAll() {
        return this.products;
    }

    // Strategy to filter by category
    filterByCategory(category) {
        return this.products.filter(product => product.category.toLowerCase() === category.toLowerCase());
    }
}

// Function to determine the strategy and display products accordingly
function applySearchStrategy(category = null) {
    const strategy = new SearchStrategy(products);

    let filteredProducts;
    if (category === 'car') {
        filteredProducts = strategy.filterByCategory('car');
    } else if (category === 'bike') {
        filteredProducts = strategy.filterByCategory('bike');
    } else {
        filteredProducts = strategy.showAll();
    }

    displayProducts(filteredProducts);
}

// Event listener for homepage load
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category'); // Get the 'category' query parameter
    applySearchStrategy(category);
});
