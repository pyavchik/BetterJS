document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

const heading = document.createElement('h1');
console.log(heading);

heading.innerHTML = "<span>Hello, </span>" + document.URL + "<span> =)</span>";
console.log(heading);

document.body.appendChild(heading);

console.log(document.URL);
