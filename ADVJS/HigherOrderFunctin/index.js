// First Class Function --It's just a concept
// A language feature where functions are treated as first-class citizens.
// Functions can be assigned to variables,passed as arguments to other functions,
// and returned from other functions.


// function Hello(name)
// {
//     return "Hello,"+name+"!";
// }

// var greet=Hello;
// console.log(greet("Lalit"))




// HOC ->Higher Order Functions:
// A higher-order-function is a function that takes one or
// more functions as arguments or returns a function as a result.

// Callback functions:
// A callback function is a function passed as an argument to anohter function 
// and is executed after the completetion of a task.
// function processUserInput(name,callback)
// {
//     console.log("Recieved",name);
//     callback(name);
// }

// function greet(name)
// {
//     console.log(`Hello ${name}`);
// }

// processUserInput("lalitt",greet)
// -----------------------------------------------
// Write a program to perform mathematical operations
// using callback functions and two variables in JS.

// function mathematical(value1,value2,calculate)
// {
//     console.log("addition is",value1+value2);
//     // callback(value1,value2)
//     return calculate(value1,value2)

// }

// function calculate(v1,v2)
// {
//     console.log("substraction",v1-v2)
// }

// mathematical(2,3,calculate)
// ----------------------------------------------




// callbackehell
// also know as the Pyramid of Doom,refers to a situation in 
// asynchronous operations.This often results in code that is difficult to
// read, understand, and maintain due to its deeply nested structure.