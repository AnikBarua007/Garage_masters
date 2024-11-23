document.addEventListener('DOMContentLoaded', () => {
    const productList = document.querySelector('.product-list');

    const products = [
        { name: 'LED headlights', price: '$100', img: 'https://via.placeholder.com/200x150.png?text=LED+headlights', link: '#' },
        { name: 'Custom exhaust', price: '$200', img: 'https://via.placeholder.com/200x150.png?text=Custom+exhaust', link: '#' },
        { name: 'Heated grips', price: '$50', img: 'https://via.placeholder.com/200x150.png?text=Heated+grips', link: '#' },
        { name: 'Digital speedo', price: '$150', img: 'https://via.placeholder.com/200x150.png?text=Digital+speedo', link: '#' },
        { name: 'Saddle bags', price: '$80', img: 'https://via.placeholder.com/200x150.png?text=Saddle+bags', link: '#' },
        { name: 'Tank pads', price: '$25', img: 'https://via.placeholder.com/200x150.png?text=Tank+pads', link: '#' },
        { name: 'Phone mount', price: '$30', img: 'https://via.placeholder.com/200x150.png?text=Phone+mount', link: '#' },
        { name: 'Off-road tires', price: '$300', img: 'https://via.placeholder.com/200x150.png?text=Off-road+tires', link: '#' },
        { name: 'Mirror upgrades', price: '$40', img: 'https://via.placeholder.com/200x150.png?text=Mirror+upgrades', link: '#' },
        { name: 'Air filters', price: '$20', img: 'https://via.placeholder.com/200x150.png?text=Air+filters', link: '#' },
        { name: 'Alloy wheels', price: '$400', img: 'https://via.placeholder.com/200x150.png?text=Alloy+wheels', link: '#' },
        { name: 'Body kit', price: '$500', img: 'https://via.placeholder.com/200x150.png?text=Body+kit', link: '#' },
        { name: 'Underglow LEDs', price: '$70', img: 'https://via.placeholder.com/200x150.png?text=Underglow+LEDs', link: '#' },
        { name: 'Performance brakes', price: '$250', img: 'https://via.placeholder.com/200x150.png?text=Performance+brakes', link: '#' },
        { name: 'Touchscreen', price: '$300', img: 'https://via.placeholder.com/200x150.png?text=Touchscreen', link: '#' },
        { name: 'Carbon trim', price: '$150', img: 'https://via.placeholder.com/200x150.png?text=Carbon+trim', link: '#' },
        { name: 'Leather seats', price: '$600', img: 'https://via.placeholder.com/200x150.png?text=Leather+seats', link: '#' },
        { name: 'Window tints', price: '$100', img: 'https://via.placeholder.com/200x150.png?text=Window+tints', link: '#' },
        { name: 'Roof rack', price: '$200', img: 'https://via.placeholder.com/200x150.png?text=Roof+rack', link: '#' },
        { name: 'Sport steering', price: '$150', img: 'https://via.placeholder.com/200x150.png?text=Sport+steering', link: '#' },
    ];

    products.forEach(product => {
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
});
