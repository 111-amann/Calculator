// Reference to the display element
const display = document.getElementById("display");

/**
 * Appends input value to the display screen.
 * @param {string} input - The input to be added to the display (number or operator).
 */
function appendToDisplay(input) {
  display.value += input;
}

/**
 * Clears the display screen.
 */
function cleardisplay() {
  display.value = "";
}

/**
 * Evaluates the expression shown in the display.
 * If the expression is invalid, it shows "Error".
 */
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
