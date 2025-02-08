// Object Properties-Modern JS.

// const name="Lalit";
// const age=23;

// // traditional way
// // const person={name:name , age:age};
// // using shorthand notation for object property
// const person={name,age};
// console.log(person)



// Destructuring Arrays:
// Destructuring is a JS expression that makes it possible to unpack
// values from arrays or properties from objects, into distinct variables
// That is,we can extract data from arrays and objects and assign them to variables.
// 1. Extracting specific elements:
// const numbers=[10,20,30];
// // const first=numbers[0]; //Traditional way

// // 2.Ignoring elements:
// const[first,second,third]= numbers;
// // const [,,third] = numbers;
// console.log(third);

// Destructuring objects:
// const user={name:"Lalit",age:23};
// // Extracting properties:
// const name=user.name;
// console.log(name)

// Extracting properties:
// const user={name:"Lalit",age:23};
// // const myName= user.name;
// // console.log(myName)
// const {name,age}=user;
// console.log(name)


// Spread Operator:
// The syntax is three dots(...) followed by the array(or iterable).
// 1.Copying an array
// let fruits=["Apple","Orange","Chiku"];
// let nee=[...fruits];
// console.log(nee)

// 2.Concatenating arrays / Combining arrays
// const n1=[1,2,3];
// const n2=[3,4,5];
// const add=[...n1 , ...n2];
// console.log(add)
// const sp=add.splice(2,3)
// console.log(sp)

// 3.Adding elements to existing array
// let fruits=["Apple","Chicku","Kel"];
// fruits.push(...["guava","santra"])
// console.log(fruits)


// one more usecase:
// when you spead a astring using the spread syntax(...),it converts the string into an array
// of its individual charachters.
// traditional way
// const country="India";
// console.log(country.split(""))

// new waydoing it...
// const country="India";
// console.log([...country])



// Rest parameters - Modern JS
// The rest parameter syntax allows a function to accept an indefinite
// number of arguments as an array,providing a more flexible way to work with functions
// that can accept varying numbers of arguments.

// traditional way of doing it
// const sum=(a,b,c,d) =>
// {
//     return a+b+c+d;
// }
// console.log(sum(1,2,3,4))
// with rest parameter
const sum=(...numbers) =>
{
    // return numbers;
    return numbers.reduce((accum,curVal)=>(accum=accum+curVal),0);

}
console.log(sum(1,2,3,4))