//Question 65: Determine the Remainder: Make a function that gets two numbers and shows the leftover from 
//dividing them using the % sign. For example, remainder(5, 2) should give 1.

import chalk from "chalk";

// This function mixes a text and a number into one text
function remainder(number1: number, number2: number): number {
    return number1 % number2;
} 
    
console.log(chalk.green("your remainder is ")+(chalk.yellow(remainder(10, 3))));