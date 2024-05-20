//Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each 
//section based on what you need at that moment, like adjusting labels based on user choices.

import chalk from "chalk";

function dynamicKey(key: string, value : string) {
    return `dynamicKey-${key +
        
        value}`;
}

console.log(chalk.green(dynamicKey("faraz" , " Sr Engineer")));

