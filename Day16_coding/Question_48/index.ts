//Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops,
//each with properties make, model, and year, use array destructuring to assign the first and second 
//laptops to variables. Then, log these variables

import chalk from "chalk";

let pricesSet1 = [1200, 1500, 1100];
let pricesSet2 = [1000, 1300, 1600];
let combinedPrices = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);
console.log(combinedPrices);