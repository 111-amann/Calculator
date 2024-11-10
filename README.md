# Calculator

A simple calculator web application built with HTML, CSS, and JavaScript. This calculator performs basic arithmetic operations and provides a clean, user-friendly interface.

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division.
- Responsive and visually appealing design.
- Error handling for invalid calculations.
- Operator buttons with distinct colors for easier usability.

## Screenshots

![Calculator Screenshot](screenshot.png)

## How to Use

1. Open `index.html` in your web browser.
2. Use the on-screen buttons to perform calculations:
   - Click numbers and operators to build your expression.
   - Click `=` to evaluate the expression.
   - Click `C` to clear the display.

## Code Structure

### `index.html`

- The main HTML structure of the calculator.
- Contains a display input field for showing calculations and results.
- Buttons for each digit, operator, and functions.

### `style.css`

- CSS file for styling the calculator interface.
- Includes styles for display, buttons, hover effects, and responsive design.

### `app.js`

- JavaScript file for handling calculator operations.
- Functions include:
  - `appendToDisplay(input)`: Adds input to the display screen.
  - `cleardisplay()`: Clears the display screen.
  - `calculate()`: Evaluates the current expression in the display.

## Setup

1. Clone or download this repository.
2. Open `index.html` in a web browser to run the calculator.

## Technologies Used

- **HTML** for structuring the calculator.
- **CSS** for styling and layout.
- **JavaScript** for functionality and interaction.

## Future Improvements

- Implement keyboard support for easier input.
- Add advanced functions such as square root, percentage, and exponentiation.
- Improve error handling for division by zero.

## License

This project is open-source and available under the MIT License.
