document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;


const makePerson = ({firstName, age, job, lastName}) => {
    return {
        name: firstName + ' ' + lastName,
        age,
        job,
    }
};

// const tempName = {
//     name: 'Scot',
//     lastName: 'Tolinsky',
//     age: '34',
//     job: 'web disigner',
// };

const dev = makePerson({
    firstName: 'Scot',
    lastName: 'Tolinsky',
    age: '34',
    job: 'web disigner',
});

console.log(dev);

const { name, ...rest } = dev;
console.log(name);
console.log(rest);
