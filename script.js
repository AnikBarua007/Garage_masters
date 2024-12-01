import { performSearch } from './search.js';

document.addEventListener('DOMContentLoaded', () => {
    const productList = document.querySelector('.product-list');

    const products = [
        { name: 'LED headlights', price: '$100', img: 'https://via.placeholder.com/200x150.png?text=LED+headlights', link: '#', category: 'car' },
        { name: 'Custom exhaust', price: '$200', img: 'https://via.placeholder.com/200x150.png?text=Custom+exhaust', link: '#', category: 'car' },
        { name: 'Heated grips', price: '$50', img: 'https://via.placeholder.com/200x150.png?text=Heated+grips', link: '#', category: 'bike' },
        { name: 'Digital speedo', price: '$150', img: 'https://via.placeholder.com/200x150.png?text=Digital+speedo', link: '#', category: 'bike' },
        { name: 'Saddle bags', price: '$80', img: 'https://via.placeholder.com/200x150.png?text=Saddle+bags', link: '#', category: 'bike' },
        { name: 'Tank pads', price: '$25', img: 'https://via.placeholder.com/200x150.png?text=Tank+pads', link: '#', category: 'bike' },
        { name: 'Phone mount', price: '$30', img: 'https://via.placeholder.com/200x150.png?text=Phone+mount', link: '#', category: 'bike' },
        { name: 'Off-road tires', price: '$300', img: 'https://via.placeholder.com/200x150.png?text=Off-road+tires', link: '#', category: 'bike' },
        { name: 'Mirror upgrades', price: '$40', img: 'https://via.placeholder.com/200x150.png?text=Mirror+upgrades', link: '#', category: 'bike' },
        { name: 'Air filters', price: '$20', img: 'https://via.placeholder.com/200x150.png?text=Air+filters', link: '#', category: 'bike' },
        { name: 'Alloy wheels', price: '$400', img: 'https://via.placeholder.com/200x150.png?text=Alloy+wheels', link: '#', category: 'car' },
        { name: 'Body kit', price: '$500', img: 'https://via.placeholder.com/200x150.png?text=Body+kit', link: '#', category: 'car' },
        { name: 'Underglow LEDs', price: '$70', img: 'https://via.placeholder.com/200x150.png?text=Underglow+LEDs', link: '#', category: 'car' },
        { name: 'Performance brakes', price: '$250', img: 'https://via.placeholder.com/200x150.png?text=Performance+brakes', link: '#', category: 'car' },
        { name: 'Touchscreen', price: '$300', img: 'https://via.placeholder.com/200x150.png?text=Touchscreen', link: '#', category: 'car' },
        { name: 'Carbon trim', price: '$150', img: 'https://via.placeholder.com/200x150.png?text=Carbon+trim', link: '#', category: 'car' },
        { name: 'Leather seats', price: '$600', img: 'https://via.placeholder.com/200x150.png?text=Leather+seats', link: '#', category: 'car' },
        { name: 'Window tints', price: '$100', img: 'https://via.placeholder.com/200x150.png?text=Window+tints', link: '#', category: 'car' },
        { name: 'Roof rack', price: '$200', img: 'https://via.placeholder.com/200x150.png?text=Roof+rack', link: '#', category: 'car' },
        { name: 'Sport steering', price: '$150', img: 'https://via.placeholder.com/200x150.png?text=Sport+steering', link: '#', category: 'car' },
    ];

    const renderProducts = (filteredProducts) => {
        productList.innerHTML = '';
        filteredProducts.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = `
                <a href="${product.link}">
                    <img src="${product.img}" alt="${product.name}">
                    <div class="name">${product.name}</div>
                    <div class="price">${product.price}</div>
                </a>
            `;
            productList.appendChild(productItem);
        });
    };

    renderProducts(products);

    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    searchBtn.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();
        const filteredProducts = performSearch(searchTerm, products);
        renderProducts(filteredProducts);
    });

    // Search on Enter key press
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const searchTerm = searchInput.value.trim();
            const filteredProducts = performSearch(searchTerm, products);
            renderProducts(filteredProducts);
        }
    });
});
