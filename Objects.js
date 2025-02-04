// Objects are a fundamental part of JS providing a way to group related
// data and functions together. In JS, an object is a collection of key:Value pair
// where each key is a string(or a symbol) and each value can be any data type,
// including other objects.Objects can have properties and methods, making
// versatile for various use cases.



// Syntax ::
// obj ={};



// creating objects:
// There are several ways to create objects in JS. The most common one
// is using object literals.
// const person = {
//     id: 1,
//     name: "Lalit",
//     greet: function() {
//         console.log("Welcome to World Best JS Course...");
//     }
// };

// Correct way to access multiple properties
// console.log(person.id, person.pName); 
// // Output: 1 "laptop"

// // Alternative way using an array
// console.log([person.id, person.pName]); 
// // Output: [1, "laptop"]

// // Calling the function inside the object
// person.greet(); 
// Output: Welcome to World Best JS Course...

// adding and modifying properties:
// person.job = "Software Engineer";
// person.age = "22";
// person["location"] ="Pune";
// console.log(person);




// METHODS::
// we can add dynamic keys in an object


let idType ="personId";

const person = {
    [idType]:"A12345",
    id: 1,
    name: "Lalit",
    greet: function() {
        console.log("Welcome to World Best JS Course...");
    }
};

console.log(person,person.greet())


// useCase : when we want to get the user name and value in react.

// 