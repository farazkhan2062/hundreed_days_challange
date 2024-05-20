//Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year,
// and a method describe() that logs a sentence about the laptop.

import chalk from "chalk";

// //Define Class of Laptop
// class Laptop {

//     make : string;
//     model : string;
//     year : number;

// // Condtructor to initialize the laptop propeties

// constructor(make : string, model : string, year : number){
//     this.make = make;
//     this.model = model;
//     this.year = year;
// }

// // Method to describe the laptop
// describe() : void {
//     console.log(chalk.yellow(`This is a ${this.make} ${this.model} from ${this.year}`));
// }
// }

// //Create an instance of the Laptop class

// const laptop = new Laptop("HP", "Inspiron", 2022);

// // Call the describe method on the laptop instance
// laptop.describe();

let laptop = {
    make: "Dell",
    model: "XPS 15",
    year: 2021,
    describe: function() {
        console.log(chalk.green(`This laptop is a ${this.year} ${this.make} ${this.model}.`));
    }
};
laptop.describe();