//Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values.
//It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) 
//should be false.
function forLogic(name1, age) {
    if (name1 === "faraz" && age === 30)
        return true;
    else
        return false;
}
;
console.log(forLogic("faraz", 30));
console.log(forLogic("saleem", 30));
console.log(forLogic("faraz", 28));
console.log(forLogic("saleem", 30));
export {};
