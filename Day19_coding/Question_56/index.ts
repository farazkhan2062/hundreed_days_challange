//Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

let mixedList = [1, "Hello", true, "World", false, "JavaScript", "Python"];
let wordsList = mixedList.filter(item => typeof item === "string");
console.log(wordsList);

let mixedArrey = [3 , "banana" , 5 , "Apple" , 9 ,  true , "Oranges" , 10 , "PYTHON" , false]
let wordsArrey = mixedArrey.filter(item => typeof item === "string");
let wordsArrey2 = mixedArrey.filter(item => typeof item === "number");
let wordsArrey3 = mixedArrey.filter(item => typeof item === "boolean");

console.log(wordsArrey);
console.log(wordsArrey2);
console.log(wordsArrey3);


