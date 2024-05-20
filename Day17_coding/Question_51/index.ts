//Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle 
//and refactor it into an arrow function.

import chalk from "chalk";

// Original function for calculating the area of a rectangle
function calculateArea(width: number, height: number){
    return width * height;
}

// Refactored into an arrow function
let calculateAreaArrow = (width: number, height: number): number => width * height;

// Example usage of the arrow function
console.log(chalk.yellowBright("Area of rectangle is ") + (chalk.green(calculateAreaArrow(8, 7)))); // Logs the area of the rectangle
console.log(chalk.magenta("The Area of Rectangle is ") + (chalk.green(calculateArea(8, 5))));
