//Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details.
//Include its brand, model, and other key features like how much storage it has, the size of its screen,
//and how long its battery lasts.
import chalk from "chalk";
let smartphone = {
    brand: "Realme",
    model: "C2",
    storage: "128GB",
    screenSize: "6.5 inches",
    battery: "18 hours",
    describe: function () {
        console.log(chalk.green(`My Smart Phone name is ${chalk.yellow.italic(this.brand)} model ${chalk.yellow.italic(this.model)}, others features are my mobile has ${chalk.yellow.italic(this.storage)} storage,\n${chalk.yellow.italic(this.screenSize)} Screen size and battery backup is ${chalk.yellow.italic(this.battery)}.`));
    }
};
smartphone.describe();
// Sets up details about a smartphone
let smartphone1 = {
    make: "Samsung",
    model: "Galaxy S21",
    specs: {
        storage: "128GB",
        screenSize: "6.2 inches",
        batteryLife: "18 hours"
    }
};
console.log(chalk.magentaBright("Shows what we've set up about the smartphone"));
console.log(smartphone1);
