const applyForVisa = (documents, resolve, reject) => {
    console.log('Processing');
    setTimeout(() => {
        let visa = {};
        Math.random() > .5 ? resolve({resolve}) : reject("visa rejected");

    }, 2000);
};

applyForVisa({}, visa => console.log("visa resolved"));
