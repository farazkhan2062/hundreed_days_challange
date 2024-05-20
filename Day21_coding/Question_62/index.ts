//Question 62: Making a Student Template: Create a blueprint for student information, including their name, 
//age, and the classes they're taking, and then fill in this blueprint with an example student.

interface Student {
    name : string,
    age : number,
    classes : string[]
};

let student : Student = {
    name : "Faraz",
    age : 20,
    classes : ["Math", "Physics", "Chemistry"]
};

console.log(student);