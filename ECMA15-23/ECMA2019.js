// Array.prototype.{flat,flatMap}
// Object.fromEntries()
// String.prototype.{trimStart,trimEnd}
// Symbol.prototype.description
// Optional catch binding

// 1. Array.flat & Array.flatMap
// flat() -->is a new array instance method that can create a one-dimensional 
// array from a multidimensional array.(nested arrays into a single,flat array).
// const nestedArr = [1,2,[3,4],5];
// console.log(nestedArr.flat())

// const nestArr=[1,[2,3,[4,5],6],7]
// console.log(nestArr.flat(3))

// flatMap() -->is a newArray instance method that combines flat() 
// with map().It's useful when calling a function that returns and 
// array in the map() callback,but you want your resulted array to be flat:
// const arr=["My Name","is Lalit"];
// const newarr= arr.flatMap((curVal)=>curVal.split("  "));
// console.log(newarr)

// Object.fromEntries()  -->have an entries() method,since ES2017;
// It returns an array containing all the object own properties,as an array of [key,value] pairs:
// const person=[{name:"vinod",age:22}];
// const entries = Object.entries(person)
// const newEntries=Object.fromEntries(entries);
// console.log(entries)
// console.log(newEntries)
// console.log(entries==newEntries) 
//we match there reference(not contain).

// String.prototype.{trimStrat,trimEnd}
// trimStart() -->Return a new string with removed white space from the start of the original string
// console.log("Testing".trimStart());
// console.log("                     Testing".trimStart());
// console.log("TEsting    ".trimStart());
// // trimEnd() -->Return a new string with removed white space
// console.log("    testing".trimEnd())
// console.log(" testing    ".trim())
// console.log("  testing   ".trimEnd());


// Symbol.prototype.description
// In JS,a symbol is a primitive data type introduced in ECMAScript 2015.
// It represents a unique identifier that is immutable
// and guranteed to be unique.Symbols are often used as property keys in objects to avoid naming conflicts.
// const mySymbol= Symbol("This is my symbol");
// console.log(mySymbol.description);
// console.log(typeof mySymbol)


// Optional Catch Binding
// In JS new features called "optional catch binding" was introduced
// for the try...catch statement.This feature allows
// you to omit the parameter in the catch block,making it optional.
// we prev.had to do:
try
{
//...
}
catch(e)
{
//if error in try then catch handle error
}