/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here

console.log(x);
var x = 2;
// TODO 1.2 Use the let keyword to define a variable.
// Your code here
let y = 1;

if (y == 1) {
  let y = 2;

  console.log(y);
  // Expected output: 2
}

console.log(y);
// Expected output: 1

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
const number = 69;
console.log(number);


// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: 
console.log("var is function-scoped and can be re-declared and updated, let is block-scoped and can only be updated, and const is block-scoped and cannot be updated or re-declared")
// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
1 / 2; // 0.5
var p = (1 / 2 === 1.0 / 2.0); // this is true
console.log(p)
// Checkpoint 1.2 What operators did you use?
// Answer: 
console.log("division")

// Your code here

// TODO 1.5 Try out the different string operators

// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here

// Checkpoint 1.3 What operators did you use?
// Answer: 

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here

// Checkpoint 1.4 What operators did you use?
// Answer: 


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators


// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: 
// Your code here