// Generate random color
// // RGB
// Apply to dom
// update color on event

const generateColorValue = () => Math.floor(Math.random() * 256);
const createColor = () => {
    const red = generateColorValue();
    const green = generateColorValue();
    const blue = generateColorValue();
    return `rgb(${red}, ${green}, ${blue})`;
};

const applyColorToBody = color => document.body.style.backgroundColor = color;

const addRandomColorToBackgroun = () => {
    const color = createColor();
    return applyColorToBody(color);
};

addRandomColorToBackgroun();

const newColors = document.getElementById("new-colors");
newColors.addEventListener("click", addRandomColorToBackgroun);

// Set interval VS set timeout
// setTimeout(() => console.log('is in timeout'), 1000);
// const log = () => console.log(" is in timeout");
// setTimeout(log, 1000);
// setTimeout(addRandomColorToBackgroun, 5000);
// console.log("ran here");
// Set timeout happens once

// Set Interval, over and over
const interval = setInterval(addRandomColorToBackgroun, 2000);
newColors.addEventListener("click", () => clearInterval(interval));
