
const chargeCard = () => new Promise((resolve, reject) => {
    //reject('fail!!!');
    if (true){
        return resolve(true)
    }
    return resolve(false);
});

const chargeCC = async (ccNumber) => {
    try {
        const res = await chargeCard();
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
    }


};


console.log(chargeCC('13413413414'));;
