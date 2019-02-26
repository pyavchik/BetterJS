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

// .filter
// Iterates over array, determines what is filtered,
// returns new array

// const filteredCart = shoppingCart.filter(product => {
//     return product.type === 'tutorial'
// });

const filteredCart = shoppingCart.filter(({type}) => {
    return type === 'tutorial'
}).filter(product => {
    return product.price > 20;
}).map(product => ({...product, extra: product.price * 10}));

console.log(shoppingCart);
console.log(filteredCart);
