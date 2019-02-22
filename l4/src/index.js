document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;


// Consistancy is King
// Clear, searchable & obvious
// Var names that make sense

// Constant variables uppercase syntax common
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

// DO NOT DO
// const hireDev = ({devInfo}) => {
//     const hiredDevInfo = {
//         hired: true,
//         ...devInfo
//     };
//     return hiredDevInfo;
// };

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

console.log(hireDev({dev}));

