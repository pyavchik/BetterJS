document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

// const [a, b] = ["Hi", "Scot"]
// console.log(a);
// console.log(b);

// const newArray = ['Hi', 'Scot', 'NewItem', 'SpreadWTF'];
// const [a, b, ...c] = newArray;
// a2 = newArray[0];
// b2 = newArray[1];

// console.log(a2);
// console.log(b2);

// console.log(a);
// console.log(b);
// console.log(c);

// const person = {
//     name: 'alex',
//     age: 32,
//     job: 'web dev'
// };

// const makePerson = (name, age, job) => {
//     return {
//         name: name,
//         age: age,
//         job: job
//     }
// };

const makePerson = (name, age, job) => {
    return {
        name,
        age,
        job
    }
};


// const dev = makePerson('Scot', 34, "web disigner");
//
// console.log(dev);
//
// const { name } = dev;
// console.log(name);

const dev = makePerson('Scot', 34, "web disigner");

console.log(dev);

const { name, ...rest } = dev;
console.log(name);
console.log(rest);
