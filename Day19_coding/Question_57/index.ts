import chalk from "chalk";




let subject1 : number = 89;
let subject2 : number = 78;
let subject3 : number = 90;
let subject4 : number = 95;
let subject5 : number = 88;



let total : number = subject1 + subject2 + subject3 + subject4 + subject5;
let average : number = total / 5;


console.log(chalk.green("All subjects average = " + chalk.yellow(average)));


// A list of grades
let grades = [88, 94, 72, 99, 53, 77, 78, 50];

// Calculates the average grade
let averageGrade = grades.reduce((total, grade) => total + grade,) / grades.length;

// Shows the average grade
console.log(chalk.green("All subjects average = " + chalk.yellow(averageGrade)));
// First, we add up all the grades. Then, we divide by how many grades there are to get the average.

