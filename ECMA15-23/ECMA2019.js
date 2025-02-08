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
const person=[{name:"vinod",age:22}];
const entries = Object.entries(person)
const newEntries=Object.fromEntries(entries);
console.log(entries)
console.log(newEntries)
// console.log(entries==newEntries) 
//we match there reference(not contain).