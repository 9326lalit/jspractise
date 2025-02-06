
// this.Object -->this keyword refers to an object.
// which object depends on how this is being invoked(used ro called);

// alone this refers to the global object.
// in a function,this refers to the global object.
// in a function ,in strict mode, this is undefined.
// in an event,this refers to the element that received the event.
// Methods like call(),apply(),and bind() can refer this to any object.



// "use strict"
// x=5.18; //this will cause an error(x is not defined).
// console.log(x)


// Lets check the this keyword values in an object methods.
// Regular function expression.
// const obj =
// {
//     name:"Lalit",
//     age:22,
//     greet()
//     {
//         console.log(this);
//     }
// }
// console.log(obj)
// obj.greet()



// Fat arrow function -->this keyword not working with fat arrow function
// const obj =
// {
//     name:"Lalit",
//     age:22,
//     greet:()=>
//     {
//         console.log(this)
//     }
// }
// obj.greet()


// Object methods ...--> Object.keys() , Object.values() , Object.entries() , Object.hasOwnProperty() ,  Object.assign()
// Object.entries() -->returns an array containing arrays of key-value pairs for each enumerable own property of an object.
const product =
{
    id:1,
    name:"Samsung",
    price:45000,
    stock:1000,
    isAvailable:true,
    description:"Powerful mobile with a quad-core i5 processor"
}

console.log(Object.keys(product))
console.log(Object.values(product))
console.log(Object.entries(product)) //give me all in array format
console.log(product.hasOwnProperty(product));  //just check that is there value or key is present or not what we pass in these function.


// Object.assign() ->copies the values of all enumerable own properties from one or more source objects to a target object.
const target ={a:1,b:2};
const source ={b:3,b:5,c:4};
const merge = Object.assign({},target,source);
console.log(merge)


// Object.freeze() -->Freeze an object, preventing new properties from being added to it and existing properties from being modified or deleted.
Object.freeze(product);
product.id="343";
console.log(product)