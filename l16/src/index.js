const simpleShoppingCart = [10, 20, 25, 5, 10];

const shoppingCart = [
    {
        sku: "1234",
        price: 10,
        type: "t-shirt"
    },
    {
        sku: "1243432",
        price: 16,
        type: "t-shirt"
    },
    {
        sku: "1234234",
        price: 30,
        type: "tutorial"
    },
];

const filteredCart = shoppingCart.filter(product => {
    return product.type === 'tutorial'
});

const total = simpleShoppingCart.reduce((total, currentPrice) => {
    return total + currentPrice;
});

console.log(simpleShoppingCart);
console.log(total);

