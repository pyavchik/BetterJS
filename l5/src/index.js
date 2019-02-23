document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

// Immutable vs Mutable
// can't be changed vs can be changed
// isn't change vs changed

// Pure functions
// Always return the same thing, with the same input

const addTwo = (x) => x + 2;
console.log(addTwo(2));
console.log(addTwo(2));
console.log(addTwo(2));

// Not pure
let multi = 3; // External state
const addThree = (x) => x + multi;

console.log(addThree(2));
multi = 4;
console.log(addThree(2));
multi = 5;
console.log(addThree(2));

// Not pure
let mult = 2;
const addFour = (x) => {
    mult += 2;
    return x + mult;

}
console.log(addFour(2));
console.log(addFour(2));
console.log(addFour(2));

const name = 'Scott';
const fullName = name + ' Tolinsky';

console.log(name);
console.log(fullName    );

const BASE_SALARY = 16000;
const SALARY_MULTYPLIER = 4;

const makePerson = ({firstName, age, job, lastName}) => {
    return {
        name: firstName + ' ' + lastName,
        age,
        job,
        salary: BASE_SALARY * SALARY_MULTYPLIER 
    }
};

const dev = makePerson({
    firstName: 'Scot',
    lastName: 'Tolinsky',
    age: '34',
    job: 'web disigner',
});



// Correct
const hireDev = ({dev}) => {
    const hiredDev = {
        hired: true,
        ...dev
    };
    return hiredDev;
};

const ytd = 100000; // Sales year to date
const salesYearToDate = 100000;

// console.log(hireDev({dev}));

