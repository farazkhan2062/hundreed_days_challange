// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a 
//user that can tell you the user's name and age.
let faraz = {
    name: "Faraz",
    age: 25,
    course: "Web Development",
};
console.log(faraz);
let myProfile = (function () {
    let name = "Saleem";
    let age = 25;
    return {
        displayInfo: function () {
            console.log(`Name : ${name} Age : ${age}`);
        }
    };
})();
myProfile.displayInfo();
export {};
