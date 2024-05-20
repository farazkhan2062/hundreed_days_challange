//Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
import chalk from "chalk";
function average(a, b, c) {
    return (a + b + c) / 3;
}
let findNumber = average(63, 55, 98);
console.log(chalk.green("The average score is ") + chalk.yellow.bold.italic(findNumber));
// This program calculates the average of all scores given
function averageScore(...scores) {
    // Adds all scores together and divides by the number of scores
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
// Example: finding the average of four scores
console.log(averageScore(80, 90, 100, 50, 70)); // Shows the average score
// We add up all the scores, then divide by how many there are.
