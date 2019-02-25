// Made up code
// imported chargeCard
// const chargeCard = () => null;
const chargeCard = () => new Promise((resolve, reject) => {
    // card is valid
    reject('fail!!!');
    if (true){
        return resolve(true)
    }
    return resolve(false);
});

//console.log(chargeCard());

chargeCard().then(val => {
    console.log(val);
}).catch(err => {
    console.log(err);
});

// Callback trouble
// chargeCard('123123123123', () => {
//     // time to do something
//     saveToDb(res, () => {
//         // time to do something else
//     })
// });

