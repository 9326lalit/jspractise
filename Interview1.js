// // console.log('hi')

// // find misisng number
// function check(arr)
// {
//     var nn =0;
//     var sum;
//     var d=arr.length+1;
//     for(let i=0;i<arr.length;i++)
//     {
//        nn+=arr[i]; //12
//     }
//     sum=d*(d+1)/2; //15

//     // console.log(nn);//12
//     // console.log(sum);//15
//     console.log("Missing number is...",sum-nn);//3 expected 3
// }
// const arr=[1,2,3,4,6];
// check(arr)

// function firstNonRepeatingChar(s)
// {
//     for(let i=0;i<s.length;i++)
//     {
//         if(s.indexOf(s[i])===s.lastIndexOf(s[i]))
//         {
//             return s[i];
//         }
//     }
//     return null;
// }
// console.log(firstNonRepeatingChar("programming"));



// function areAnagrams(s1,s2)
// {
//     console.log(s1);
//     console.log(s2);
//     var dd= s1.split("").sort().join();
//     var ee= s2.split("").sort().join();
    
//     console.log(dd.includes(ee))
   
// }
// areAnagrams("triangle", "integral"); // Output: true


// function factorial(n)
// {
//     var add=1;
//     for(let i=1;i<=n;i++)
//     {
//         console.log(i)
//         add=add*i;
//     }
//     console.log("Factorial",add)
// }
// factorial(5);  // Output: 120  (5 * 4 * 3 * 2 * 1)



// function findLargest(arr)
// {
//     var max=arr[0];
//     for(let i=1;i<=arr.length;i++)
//     {
//        if(max<=arr[i])
//        {
//          max=arr[i]
//        }
      
//     }
//     console.log(max)

// }
// findLargest([10,100, 5, 20,90, 8]); // Output: 20


// function invertedTriangle(n) {
//     for (let i = n; i >= 1; i--) {
//         console.log("*".repeat(i));
//     }
// }
// invertedTriangle(5);


function pyramidPattern(n) {
    let str=" ";
    for (let i = 1; i <= n; i++) {
        console.log(str.repeat(n - i) + "*".repeat(2 * i - 1));
    }
    // for(let i=n;i>=0;i--)
    // {
    //     console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
    // }
}
pyramidPattern(5);
