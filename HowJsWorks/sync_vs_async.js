// Synchronous code executes line by line, blocking furthur execution until each line is completed,while 
// asynchronous code allows other code to continue executing while it waits for an asynchronous operation to complete.


// Synchronous example::
// const fun2= () =>
// {
//     console.log("Fun2 starts and ends");
// }

// const fun1= () =>
// {
//     console.log("Fun1 is start");
//     fun2();
//     console.log("Fun1 is end");
// }
// fun1()


// Asynchronous Example::
// const fun2 = () => {
//     setTimeout(() => {
//         console.log("Fun2 starts and ends");
//     }, 3000)
//     // then where these is goesfor a second...so these is goes to the web api section then return 
// }

// const fun1 = () => {
//     console.log("Fun1 is start");
//     fun2();
//     console.log("Fun1 is end");
// }
// fun1()
