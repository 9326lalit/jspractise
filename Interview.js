// sum of array
// function sum(n)
// {
//     let total=0;
//     for(let i=0;i<n.length;i++)
//     {
//         total += n[i];


//     }
//     console.log(total);

// }
// sum([1,2,3,4])



// find largest number in array
// function sum(n)
// {

//     for(let i=1;i<n.length;i++)
//     {
//         if(n[i]>n[0])
//         {
//             n[0]= n[i];

//         }
//         else{

//         }


//     }
//     console.log("Largest number",n[0])

// }
// sum([1,323,2,66,2])



// reverse an array
// let arr=[1,2,3,4,5]
// // let space=" ";
// for(let i=arr.length ; i>=0 ; i--)
// {
//     console.log(arr[i]);

// }
// // console.log(space);



// remove duplicates
// let arr=[1,2,2,3,4,5]
// for(let i=0 ;i<arr.length ;i++)
// {
//    for(let j=i+1 ; j<arr.length ;j++)
//    {
//     if(arr[i] == arr[j])
//     {
//         arr.splice(j,1);
//         j--;
//     }
//    }
// }

// console.log(arr);


// function Palindrome(n) {
//     let space = "";
//     for (let i = n.length - 1; i >= 0; i--)
//     {
//         space += n[i];
//     }
//     console.log(space);
//     if (n.join("") === space) {
//         console.log("Palindrome")
//     }
//     else {
//         console.log("not");

//     }
// }

// Palindrome([1, 2, 3, 2, 1]);



// const products =[
//     {name :"Laptop" , price:1900},
//     {name :"Mobile" , price:1200},
//     {name :"Tablet" , price:900},
//     {name :"Watch" , price:100}
// ]
// const check = products.filter((curEle)=>
// {
//     // console.log(curEle)
//     return curEle.price > 900;
// })
// console.log(check)


// filter unique values
const numbers = [11, 2, 3, 4, 11, 5, 6, 7, 6, 8, 9];

let unique = numbers.filter((curEle, index, arr) => 
{
   
    return arr.indexOf(curEle) === index;
});

const sortt = unique; // Output: [11, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sortt);
// const check= sortt.sort((a,b)=>a-b)
// console.log(check)
// console.log([...new Set(numbers)]);







// import { check } from "./String.js";
// check(2,0)



// Interview question on Date
// 1. Write a function to add a specified number of days to a given date.
// const addDaysToDate = (date,extraDay)=>
// {
//     date.setDate(date + extraDay);
//     console.log("leaving date .....",new Date( 1709769600000 ))
// }
// const date = new Date("2024-02-29");
// console.log("Enter date...",date)
// const newdate = addDaysToDate(date,7);

// console.log(newdate);


// 2. Write a function to calculate the difference in days between two given dates.

// const getDifDays= (d1,d2) =>
// {
//     let oneDay = 24*60*60*1000;
//     let diff = Math.abs(d2-d1);
//     return Math.round(diff/oneDay);
// }

// const d1 = new Date("2024-02-19");
// const d2 = new Date("2024-03-01");
// console.log(getDifDays(d1,d2))



// Objects
// what is passedByValue and passbyreference
// pass by value -->we are just copy of the primitive value ,and does not affect the original value.
// let a=10;
// const modifyValue =(x) =>(x=20);
// console.log(modifyValue(a));
// console.log(a)

// pass by refernce --> a ref to the memory location 
// of the object is passed to the function ro assigned to a variable.
// let ref = {id:1,name:"TechWizLalit"};
// let ref1= JSON.parse(JSON.stringify(ref));
// ref1.name="lkk";
// console.log(ref1)
// console.log("original",ref)

// to avoid these behaviour and create a true copy of the object,
// you can use method like Object.assign() or the spread operator{...}.



// JSON :: -->is a data interchange format derived from JS objects.
//  Objects can be easily converted to JSON and vice versa.
// Diff between JSON and Object is that in json key in double quotes and in object not in double quotes.
// let student =
// {
//     id:1,
//     name:"lalit",
//     age:22,
//     greet:function()
//     {
//         console.log(`Id is ${student.id} and name is ${student.name}`)
//     }
// }

// let jsondata = JSON.stringify(student);
// console.log("Jsondata key always in double quotes",jsondata);
// let parseObj = JSON.parse(jsondata);
// console.log("Objectdata key always without quotes",parseObj)


// object
// const target = {a:1 , b:2};
// const source = {b:3 , c:4};
// const merge = Object.assign({},target,source);
// console.log(merge)
// {a:1 , b:3 , c:4}
// b:3 because of overwritten and always give latest value 
// check in from left to right for that reason.



// write a function that compares two objects to determine if they have the same properties and values.

// const areObjectsEqual = (obj1,obj2) =>
// {
    // if(obj1.length!=obj2.length)
    // {
        
    //     return false;
    // }
    // else
    // {
    //     return true;
    // }not working
//     let o1 = Object.keys(obj1);
//     let o2 = Object.keys(obj2);
//     console.log(o1)
//     console.log(o2)
//     if(o1.length!==o2.length)
//     {
//         console.log("Both are not  same")
//         return false;
//     }
//     else{
//         console.log("Both are same")
//         return true;
//     }
   
// }
// let objA={id:1 , name:"Lalit"};
// let objB={id:1 , name:"Lk"};
// console.log(areObjectsEqual(objA,objB));



// write a function that transforms an array of an object into an object where the keys are the objects ids;
// let inputArrya =
// [
//     { id:1, name:"Alice"},
//     { id:2, name:"Bob"},
//     { id:3, name:"Charlie"},
// ];
// const new1 = (a) =>
// {
//     let obj ={};
//     for(let key of a)
//     {
//         // console.log(key.id , key);
//         obj[key.id]= key;
//     }

//     return obj;
// }


// console.log(new1(inputArrya));


// ECMA2015-23
// Write a program to swap two variables without using 3rd variable?

// let a=10;
// let b=20;

// // mostly will do using 3rd var
// // let c=b;
// // b=a;
// // a=c;
// // console.log("a",a,"b",b)
// // without using 3rd variable
// [a,b]=[b,a]
// console.log("a",a,"b",b)



// Destructuring objects:
// const user={name:"Lalit",age:23};
// // Extracting properties:
// const name=user.name;
// console.log(name)

// ------------------------------------------------------------

// HOC
//  



// -----------------------------------------------------
// callbackehell
// also know as the Pyramid of Doom,refers to a situation in 
// asynchronous operations.This often results in code that is difficult to
// read, understand, and maintain due to its deeply nested structure.


// 
// let str ="Krishna";
// let str2="veni";
// let ss = str[0]+"for"+str;
// const dd =str2[0]+"for"+str2
// console.log(ss+"_"+dd)

// array sort
// "use strict"
// let arr=[300,2,5,22,500];
// console.log(arr.sort((a,b)=>a-b))


// "use strict"
// a=100;
// console.log(a)


// if([])
// {
//     console.log("Lalit")
// }
// else{
//     console.log("not")
// }


// console.log([]==false)  //true

// let arr=[1,2,3,[4,5,7]]
// console.log(arr.flat())