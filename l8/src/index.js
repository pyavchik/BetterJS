// const logo = document.getElementById("logo");
const logo = document.querySelector("#logo");
logo.innerText = "new text";

const heading = document.createElement('h1');
heading.innerHTML = "<span>Hello, </span>" + document.URL + "<span> =)</span>";
console.log(heading);

document.body.appendChild(heading);

