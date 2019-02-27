//console.log(this);

const logGreeting = function (){
    console.log(this.name);
}

const test = {
    testFunction: function () {
        console.log(this);
    },
    testFuncTwo:  () => {
        console.log(this);
    },
    testFuncThree: function () {
        ['hi', 'hello'].map(() => {
            console.log(this);
        })
    },
    testFuncFour: function () {
        ['hi', 'hello'].map(logGreeting.bind(this))
    }
};

function team() {
    console.log(this);
}

const button = document.getElementById("new-colors");
button.addEventListener("click", function () {
    console.log(this);
    this.innerText = "Clicked!"
});

// test.testFunction();
//test.testFuncTwo();
// team();
//const wings = new team();
test.testFuncThree();
