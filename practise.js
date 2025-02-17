// 1. Reverse String
// var text="Lalit";
// let space="";
// for(let i=text.length-1;i>=0;i--)
// {
//     space+=text[i]
// }
// console.log(space)


// 2.Find the largest number in array
// let arr = [1,2,49,3];
// let max=arr[0]
// for(let i=1;i<=arr.length;i++)
// {
//     // console.log(arr[i])
//     if(arr[i]>max)
//     {
//         max=arr[i];
//     }
// }
// console.log("largest",max)


// 3.Find the second largest number in array
// let arr = [1, 2, 49, 3];
// let max = 0;
// let secondMax = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         secondMax = max; // Store the old max as second max
//         max = arr[i]; // Update max
//     } else if (arr[i] > secondMax && arr[i] !== max) {
//         secondMax = arr[i]; // Update second max only if it's smaller than max
//     }
// }
// console.log("Second largest number is:", secondMax); // Output: 3



// 4.Find the factorial of a Number
// let number=5;
// let check=1;
// for(let i=1;i<=number;i++)
// {
//      check =check*i;
// }
// console.log(check)



// 5.Remove duplicates from an array
// const arr = [1, 3, 3, 6, 2];
// const uniqueArr = [];

// for (let i = 0; i < arr.length; i++) 
// {
//     let isDuplicate = false;

//     // Check if the current element already exists in uniqueArr
//     for (let j = 0; j < uniqueArr.length; j++) 
//     {
//         if (arr[i] === uniqueArr[j]) 
//         {
//             isDuplicate = true;
//             break;
//         }
//     }

//     // If not a duplicate, add it to uniqueArr
//     if (!isDuplicate) {
//         uniqueArr.push(arr[i]);
//     }
// }

// console.log("Array without duplicates:", uniqueArr); // Output: [1, 3, 6, 2]
