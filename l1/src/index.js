document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

// function declaration
// Hoisted
// function sayHi() {
//     return console.log('Hi');
// }

// Function Expression
// Anon, not named
// Not hoisting
// Passed around or used
// const sayHi = function(){
//     return console.log("hi");
// };

// const sayHi = () => {
//     return console.log("Hi");
// }

//const sayHi = () => (console.log("hi"));
const sayHi = () => console.log("hi");


sayHi();
