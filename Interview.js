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
//     for (let i = n.length - 1; i >= 0; i--) {
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
  
//   return curEle.price > 400;
 
// });

// console.log(check);


// filter unique values
// const numbers =[11,2,3,4,11,5,6,7,6,8,9]
// let unique = numbers.filter((curEle, index , numbers)=>{
    // console.log(curEle);
    // console.log(index);
    
    
    // console.log("curele" + curEle+" index"+ numbers.indexOf(curEle));
    
    // console.log(numbers[index]);
    // console.log(numbers.indexOf(curEle));
    // if( numbers.indexOf(curEle) === index)
    // {
    //     console.log(curEle)
    // }

    //or set method
    
// })
// console.log(unique);

// console.log([...new Set(numbers)]);







// import { check } from "./String.js";
// check(2,0)