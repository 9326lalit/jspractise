// rev string

// const word ="Lalit"
// let space=" "
// for(let i=word.length-1;i>=0;i--)
// {
//     space=space+word[i];
// }

// console.log(space)


// for loop and for in  , for each and for of loops

// 1> for of loop ==>is used to iterate overr the values of
//  an iterable object,such as arrays,strings,or other iterable objects.
let fruits = ["apple","mango","grapes","orange"]
// for(let items of fruits)
// {
//     console.log(items);
    
// }


// 2> for in loop ==> is used to iterate over 
// the properties (including indices) of an object.

// for(let items in fruits)
// {
//     console.log(items)
// }


// 3> for each loop==> the arr.forEach() method calls the provided function
// once for each element of the array. The provided function may perform any kind
// of operation on the elements of the given array.

// arrname.forEach(funciton callback(currentvalue , array(optional) , thisvalue(optional)))
// fruits.forEach((curEle , index , arr)=>
// {
//     console.log(`${curEle} ${index} `);
    
// })

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let  sum=" " ;
// for(let i=0;i<numbers.length+1;i++)
// {
//     // sum= sum + i;
//     // if(i%2==0)
//     // {
//     //     console.log("Even",i);
//     // }
//     // return sum
//     // sum = sum + numbers[i];
//     sum = console.log(i*2);

// }
// console.log("new", sum)

// 4> Map function
// map()  creates a new array from calling a function for every array
// element.map() does not change the original array.

// let fruits = ["apple","mango","grapes","orange"]

// const myap = fruits.map((curEle , index , arr) =>
// {
//     return `${curEle} ${index}` ;
// })
// console.log(myap)