// The Date() constructor creates Date objects. 
// When called as a function  , it returns a string representing the current time.
// Syntax :-> new Date() , new Date(date string)

// 9 ways to create a new Date objects
// 1. new Date()
// 2. new Date(date string)
// 3.new Date(year , month)
// 4.new Date(year,month,day)
// 5.new Date(year,month,day,hours)
// 6.new Date(year,month,day,hours,minutes)
// 7.new Date(year,month,day,hours,minutes,seconds)
// 8.new Date(year,month,day,hours,minutes,seconds,ms)
// 9.new Date(milliseconds)

// const currentDate = new Date( )
// console.log(currentDate)

// const dateString ="2025-02-03T05:13:30.286Z"
// const nn = new Date(dateString);
// console.log(nn)


// const date1 = new Date(2024,1);
// console.log(date1);

// month in js starts from 0....so 0 is january
// const date1 = new Date(2025,0,12);
// console.log(date1);


// const date1 = new Date(2025,0,12,10,44);
// console.log(date1);


// const date1 = new Date(2025,0,12,10,44,30,222);
// console.log(date1);


// const curlMilli = new Date(2002,8,12).getTime()
// console.log(curlMilli);



// A few useful methods of the Date object in JavaScript
// 1. toLocalString() --> Returns a string representing the date and time 
// portion of a Date object using the current locale's conventions.

// const dd = new Date();
// // console.log(dd)
// const local = dd.toUTCString(); .toLocaleString , toLocaleDateString,toLocaleTimeString
// console.log(local)
 
// parse() -->parses a string representation of a date and returns the number of milliseconds since January 1,1970
// const dateString = "2025-02-03T05:13:30.286Z";
// const parsee =  Date.parse(dateString);
// console.log(parsee)

// Date.now()-->  is a static method of the Date object.
// use Date.now()--> if you want the timestamp right this second.
// It returns the current timestamp ( number of milliseconds) representing the current moment.


//