// Variables to store the current input and result
let currentInput = '';
let currentResult = '';

// Function to append a character to the input
function appendCharacter(character) {
    currentInput += character;
    updateDisplay();
}

// Function to update the display with the current input
function updateDisplay() {
    const display = document.getElementById('display');
    display.value = currentInput;
}

// Function to clear the display and reset the input
function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

// Function to delete the last character from the input
function deleteLastCharacter() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

// Function to calculate the result
function calculateResult() {
    try {
        currentResult = eval(currentInput);
        currentInput = currentResult.toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}
