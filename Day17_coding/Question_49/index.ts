//Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple 
//hobbies. It should log each hobby with a statement saying you enjoy that hobby.

import chalk from "chalk";

function logHobbies(hobbies: string[]) {
  hobbies.forEach((hobby) => {
    console.log(chalk.green(`I enjoy ${hobby}`));
  });
}
logHobbies(["reading", "writing", "coding", "cycling"]);