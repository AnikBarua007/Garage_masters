const searchStrategies = {
    all: (products) => products,
    car: (products) => products.filter(product => product.category === 'car'),
    bike: (products) => products.filter(product => product.category === 'bike'),
};

const performSearch = (searchTerm, products) => {
    const strategy = searchStrategies[searchTerm.toLowerCase()] || searchStrategies['all'];
    return strategy(products);
};

// Exporting the strategies and search function
export { performSearch };



/*
const carSearchStrategy = (products, query) =>
    products.filter(product => product.category === 'car' && product.name.toLowerCase().includes(query.toLowerCase()));

const bikeSearchStrategy = (products, query) =>
    products.filter(product => product.category === 'bike' && product.name.toLowerCase().includes(query.toLowerCase()));

const strategies = {
    car: carSearchStrategy,
    bike: bikeSearchStrategy,
};

export const getSearchResults = (products, query) => {
    query = query.toLowerCase();
    console.log("Search Query:", query); // Debug log

    if (query.includes('car')) {
        const result = strategies.car(products, query);
        console.log("Car Strategy Result:", result);
        return result;
    } else if (query.includes('bike')) {
        const result = strategies.bike(products, query);
        console.log("Bike Strategy Result:", result);
        return result;
    } else {
        console.log("No Match Found");
        return [];
    }
};
*/