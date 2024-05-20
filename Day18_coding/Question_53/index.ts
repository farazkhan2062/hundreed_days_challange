//Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a 
//computer programmer knows, like coding languages, tools, and software frameworks.
//Find a way to get three specific skills from this list and show them.

import chalk from "chalk";

let programmer : {
    name : string,
    age : number,
    programming : {
        skill1 : string,
        skill2 : string,
        skill3 : string
    }

} = {
    name : "faraz",
    age : 18,
    programming : {
        skill1 : "coding language",
        skill2 : "Know about tool",
        skill3 : "softwaer fram work"
    }
};
console.log(programmer);


let devolperSkill = {
    languages : ["java", "python","Typescript"],
    framwrok : ["React", "vue", "Angular"],
    tools : ["Git", "Webpack", "Docker"],
};
let {languages, framwrok, tools} = devolperSkill;

console.log(chalk.magenta(`Languages : ${chalk.yellow(languages[0])}, Fram Work : ${chalk.yellow(framwrok[1])},
Tools : ${chalk.yellow(tools[2])}`));