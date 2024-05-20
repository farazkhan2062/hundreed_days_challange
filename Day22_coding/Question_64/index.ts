//Question 64: Combine Strings and Numbers: Write a function that merges a piece of text with a number.
//For example, if provided with "Age: " and 30, it should give back "Age: 30".

import chalk from "chalk";

// This function mixes a text and a number into one text
function combineStringAndNumber(text: string, number: number): string {
    // Joins the text and number into a single text
    return text + number;
}

// Trying it out with "Age: " and 30
console.log(chalk.yellow(combineStringAndNumber("Age: ", 30))); // Shows "Age: 30"
// Here, we put together the text and number.