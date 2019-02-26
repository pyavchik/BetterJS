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

// .map
// iterates over array, perform function on each item
// returns new array

// const discountCart = simpleShoppingCart.map((value) => {
//     return value * .75;
// });

// const discountCart = simpleShoppingCart.map(value => value * .75);

const discountCart = shoppingCart.map(value => {
    return {
    ...value,
    salePrice: value.price * .75
    }
});



console.log(shoppingCart);
console.log(discountCart);
