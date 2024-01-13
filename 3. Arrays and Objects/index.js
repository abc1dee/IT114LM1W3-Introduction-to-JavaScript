/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here
var firstItem = numbers[0];
var fifthItem = numbers[4];
var lastItem = numbers[numbers.length - 1];

// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here
var minNum = Math.min(...numbers);
var maxNum = Math.max(...numbers);
var averageNum = numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: 

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here

let IT114L = {
    courseCode: "IT114L",
    name: "Introduction to Programming",
    units: 3,
    numberOfStudents: 30
};

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here
IT114L.professorName = "Sir Job Lipat";
console.log(IT114L.professorName);
console.log(IT114L);

// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here
let courses = [
    { courseCode: "IT114L", units: 3 },
    { courseCode: "MATH101", units: 4 },
    { courseCode: "ENG202", units: 3 }
];

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: 

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here
