

// Array Methods...
//- push() - Adds one or more elements to the end of an array.
//- pop() - Removes and returns the last element from an array.
//- shift() - Removes and returns the first element from an array.
//- unshift() - Adds one or more elements to the beginning of an array.
//- slice() - Returns a shallow copy of a portion of an array into a new array.
//- splice() - Adds, removes, or replaces elements in an array.
//- concat() - Merges two or more arrays into a new array.
// join() - Combines all elements into a string, separated by a specified separator.
// indexOf() - Returns the first index of a specified element or -1 if not found.
// lastIndexOf() - Returns the last index of a specified element or -1 if not found.
//- includes() - Checks if an array contains a specified element.
//- find() - Returns the first element that satisfies a provided test function.
//- findIndex() - Returns the index of the first element that satisfies a provided test function.
//- filter() - Creates a new array with all elements that pass a provided test function.
//- map() - Creates a new array by applying a function to each element of the array.
//- reduce() - Executes a reducer function on the array and returns a single accumulated result.
//- forEach() - Executes a function for each element in the array.
//- sort() - Sorts the elements of an array (lexicographically by default).
// reverse() - Reverses the order of the elements in an array.
// every() - Checks if all elements in an array pass a test.
// some() - Checks if at least one element in an array passes a test.
// flat() - Flattens a nested array into a single array.
// flatMap() - Maps and flattens the array in a single step.
// fill() - Fills all or part of an array with a static value.
// toString() - Converts the array to a string.
//- Array.isArray() - Checks if a value is an array.





// --------------------------------------------------------------------



// push() -> adds one or more elements to the end of an Array.
// pop() -> removes the last element from an array.
// unshift() -> adds one or more elements to the begging of an array.
// shift() -> that removes the first element from an array.

// push
// let arr =["Lalit","Khairnar"]
// arr.push("mmm");  
// // --> push returns new lenght
// arr.pop();
// // --> gives his particular deleted value
// arr.unshift("Mr")  
// // add element in the first position
// arr.shift()
// // remove the first element
// console.log( arr)


// splice()
// let arr=["Lalit","Lk","Photography","MERN Dev","jk","LL"];
// // splice method gives an empty array
// // splice(start , deleteCount , item1 , item2,...)
// arr.splice(2,2,"Lallan","mm","dfd","fdf");
// console.log(arr);

// search() --> indexOf , lastIndexOf and includes
// let numbers=[1,2,3,4,5,6,7,8,9,10];



// 1> reverse array
// let arr = [1,2,3,4,5]
// let space=" ";
// for(let i=arr.length-1 ; i>=0 ;i--)
// {

//     space = space + arr[i];

// }
// console.log(space)

// 2> Remove duplicate values from an Array
// let arr = [1,2,2,3,4,4,5,5]

// for(let i=0 ; i<=arr.length ;i++)
// {
//     for(let j=i+1 ; j<arr.length ;j++)
//     {
//         if(arr[i]==arr[j])
//         {
//             arr.splice(j,1);
//             j--;
//         }
//     }
    
// }
// console.log(arr)

// 3> Rotate an Array
// let arr = [1, 2, 3, 4, 5]
// for(let i=0;i<arr.length+1 ;i++)
// {
//     let last = arr.pop()
//     arr.unshift(last)
    
// }
// console.log(arr);


// 4>Given an array [1, 2, 4, 5], insert the number 3 at index 2 using splice.
// Delete the number 4 from the array using splice.

// let arr=[1,2,4,5]
// arr.splice(2,0,3);
// arr.splice(3,1)
// console.log(arr)

// 5> indexOf(searchElement , fromIndex) --> The indexOf method returns the first index at which a given element
// can be found in the array, or -1 if it is not present.
// const arr = ["Lalit","khairnar","lk","photography"]
// console.log(arr.indexOf("lk"));
// console.log(arr);

// 6>lastIndexOf() --> gives and real value check and give index number
// const arr = ["Lalit","khairnar","lk","lk","photography","lk"]
// const arr=[1,2,3,4,6,2,3,5];
// console.log(arr.lastIndexOf(3,5)); 
// -->check that from 5 index position check 1 one by one if find then show that number index number

// 7> Includes(searchElement , fromIndex) -->The includes method checks whether an array includes
// a certain element, returning true or false.
// const arr = ["Lalit","khairnar","lk","photography"]
// console.log(arr.includes("lk"));

// delete lk from an array
// const arr = ["Lalit","khairnar","lk","photography"]
// const dlt = arr.indexOf("lk")
// console.log(dlt);

// arr.splice(2,1)
// console.log(arr);


// 8> find() -->find method is used to find the first element in an array .
// find(), findIndex() --> same as map
// find() -->just gives us first element
// const arr=[1,2,3,4,5,6,2,3,5];
// const result = arr.find((curEle)=>
// {
//     return curEle>4;
// })

// console.log(result);


// const arr=[1,2,3,4,5,6,4,2,3,5];
// const result = arr.filter((curEle)=>
// {
//     return curEle != 4;
// })
// console.log(result);
    


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


// sort and compare
// sort -->convert in ascending order
// const fruits =["Mango","Banana","Chiku","Apple"
// const numbers =[11,2,1,3,4,11,5,6,7,6,8,9]
// numbers.sort((a,b)=>a-b)
// --> by defulat sort() compares as a string
// numbers.sort((a,b) => a-b) --> then 11 goes last
// console.log(numbers);

// compare callback function
// const numbers =[11,2,1,3,4,11,5,6,7,6,8,9]
// const sortNumbers = numbers.sort((a,b)=>
// {
//     if(a>b) return 1
//     // a,b means take first two element and match if true then switch like bubble sort
//     // and for oppsite just change the order
//     if(b>a) return -1
// });
// console.log(numbers);



// reduce() -->used to accumulate or reduce an array to a single value.
// syntax : array.reduce(function callback(accumulator , currentValue , index , array){},intialValue);
// just accumulator extra part.
// eg.shoping cart -->gives and total price or percent
const productprice = [100,200,300,400,500];
const totalprice = productprice.reduce((accum , curEle)=>
{
    
    return accum + curEle;
    // accum is 0 + curEle 100 = 100
    // accum is 100 + curEle 200 = 300
    // accum is 300 + curEle 300 = 600
    // accum is 600 + curEle 400 = 1000
    // accum is 1000 + curEle 500 = 1500 (totalprice);
},0); 
// these is 0 is accum value 

console.log("Total Price :",totalprice);




