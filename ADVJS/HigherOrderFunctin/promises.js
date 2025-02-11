// Promises in JS.
// A promise is behave like a placeholder for the result of an asynchronous operation.
// promise-->pending-->settle
                    //   |
                    // (resolve or rejected)

// A promise in JS is an object that represents the eventual completion or failure of an asynchronous
// operation.It allows you to handle asynchronous operations more easily and cleanly by providing a way
// to write asynchronous code that looks synchronous.
// It can be in one of three states:
// 1. Pending --> Initital state,neither fulfilled nor rejected.
// 2. Fulfilled(Resolved) --> The operation completed successfully.
// 3. Rejected --> The operation failed or encountered an error.
// Promise have built in methods like then and catch to handle the results of asynchronous operations when they
// complete or encounter erros, making it easier to write asynchronous code that is
// more redable and maintainable compared to traditional callback-based appraches.


// Class promise constructor:
// const shweta=new Promise((resolve,rejected)=>
// {
//     setTimeout(()=>
//     {
//         resolve("I miss you gayu...");
//     },1000)
// })

// shweta.then((res)=>
// {
//     console.log(res)
// }).catch((error)=>
// {
//     console.log("no reply");
// }).finally(()=>
// {
//     console.log("Finally she said i love you too")
// })
