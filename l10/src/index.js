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
// On click attach 1 event
// newColors.onclick = () => addRandomColorToBackgroun();

newColors.addEventListener("click", addRandomColorToBackgroun);
