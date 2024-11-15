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
 * If the expression is invalid or includes division by zero, it shows "Error".
 */
function calculate() {
  try {
    // Check for division by zero
    if (display.value.includes('/0')) {
      display.value = "Error"; // Display "Error" for division by zero
    } else {
      display.value = eval(display.value); // Evaluate the expression
    }
  } catch {
    display.value = "Error"; // Handle any other errors
  }
}

