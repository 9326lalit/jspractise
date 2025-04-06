// Find the largest number in the array.
// Input: [3, 7, 2, 9, 5]  
// Output: 9  

// const arr =[1,2,3,4,5,6,7,8,9];

// let check = arr[0];
// for(let i=0;i<=arr.length;i++)
// {
//     if(arr[i]>check)
//     {
//         check=arr[i];
//     }
   
// }
// console.log("larget number",check)

// // smallest
// const arr1 =[3,6,55,76,22,4,1,2];
// let check1 = arr[0];

// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]<check1)
//     {
//         check1=arr[i];
//     }
   
// }
// console.log("smallest number",check1)


// sum of array..
// var add=0;
// for(let i=0;i<arr.length;i++)
// {
//     add = add+arr[i];
// }
// console.log(add)


// reverse array
// for(let i=arr.length-1;i>=0;i--)
// {
//     console.log(arr[i])
// }


// Count even and odd
// var total=0;
// var odd= 0;
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]%2==0)
//     {
//         const check = arr[i];
//         total=total+1;    }
//     else
//     {
//         const dd = arr[i];
//         odd=odd+1;
//     }
// }
// console.log("Total even",total)
// console.log("Total odd",odd)


// const arr = [1,2,3,5];
// find last second largest number
// let firstMax = -Infinity, secondMax = -Infinity; // ✅ Handle negative numbers too

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > firstMax) {
//         secondMax = firstMax; // ✅ Before updating firstMax, store it in secondMax
//         firstMax = arr[i];     // ✅ Update firstMax
//     } else if (arr[i] > secondMax && arr[i] !== firstMax) {
//         secondMax = arr[i]; // ✅ Update secondMax only if arr[i] is not firstMax
//     }
// }

// console.log("Second largest number:", secondMax); // ✅ Correct output


// find missing number
// not able to solve
// const arr = [1, 2, 4, 5, 6]; // Missing number is 3
// let n = arr.length + 1; // Total numbers including missing one

// let expectedSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
// let actualSum = arr.reduce((acc, num) => acc + num, 0); // Sum of array elements

// let missingNumber = expectedSum - actualSum; // The missing number
// console.log("Missing number:", missingNumber);



// Find duplicates 
// var arr=   [4,4,4,4, 3, 2, 7, 8,8, 2,  1]  
// // Output: [2, 3] 
// var duplicates=[];
// for(let i=0;i<arr.length;i++)
// {
//     for(let j=i+1;j<arr.length;j++)
//     {
//        if(arr[i]==arr[j] && !duplicates.includes(arr[i]))
//        {
//           duplicates.push(arr[i]);
//        }
//     }
// }
// console.log("Duplicate elements are...", duplicates)


// const arr =[1,2,3,4,5];
// const check = arr.find((d,b)=>b>3);
// // d is current value and b is index
// console.log(check)


const arr =[1,2,3,4,5];
let items = arr.map((item)=> (item>2));
console.log(items)