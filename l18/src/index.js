//console.log(this);

const test = {
    testFunction: function () {
        console.log(this);
    },
    testFuncTwo:  () => {
        console.log(this);
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
// test.testFuncTwo();
// team();
//const wings = new team();
