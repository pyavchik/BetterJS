document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

const cart = [10, 5, 15];

const SHIPPING_CONST = 10;

const fakeAPICharge = total => true;
const fakeSendRecipt = total => true;

const getSubTotal = cart => cart.reduce((tempTotal, item) => tempTotal + item);
const getTotal = subTotal => subTotal + SHIPPING_CONST;
const sendRecipt = ({email, total}) => fakeSendRecipt({
    email: "fakemail@gmail.com",
    total
});

const checkout = cart => {
    const subTotal = getSubTotal(cart);
    const total = getTotal(subTotal);
    const orderSuccess = fakeAPICharge(total);

    if (orderSuccess) {
        sendRecipt({email: "fakeemail@gmail.com "});
    }
    return orderSuccess;
};

checkout(cart);
