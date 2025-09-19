// Get references to DOM elements
const randomColor = document.querySelector(".randomColor"); // "Random Color" button
const enterColor = document.querySelector("#enterColor");   // Input field for custom color
const applyColor = document.querySelector(".applyColor");   // "Apply Colour" button
const showChangeColor = document.querySelector(".showChangeColor"); // Span that shows current color text
const container = document.querySelector(".container");     // Main container whose background changes

// Function to change background color and update text
const handleBackgroundColorChange = (color) => {
    container.style.background = color;     // Apply background color to container
    showChangeColor.textContent = color;    // Display the current color in the text
};

// Function to generate a random color from a fixed array
const createRandomColor = () => {
    const randomeColorsArray = ['red', 'blue', 'green', 'white', 'black']; // Available colors
    const pickRandomColor = Math.floor(Math.random() * randomeColorsArray.length); // Pick random index
    handleBackgroundColorChange(randomeColorsArray[pickRandomColor]); // Apply the picked color
};

// Event handler for "Random Color" button
const handleRandomColor = () => {
    createRandomColor(); // Call random color generator
};

// Event handler for "Apply Colour" button
const handleApplyColor = () => {
    const userEnterColor = enterColor.value; // Get value from input field
    handleBackgroundColorChange(userEnterColor); // Apply user-entered color
};

// Attach event listeners to buttons
randomColor.addEventListener("click", handleRandomColor);
applyColor.addEventListener("click", handleApplyColor);


