// List of new useful features added in ES8
// BigInt
// Nullish Coalescing Operator ??
// Optional Chaining Operator ?.
// promise.allSettled

// 1.BigInt -->BigInt in JS is a data type used to represent 
// and perform operations on large integers that exceed the limits of regular numbers.
// const largeNum=BigInt("232423234988498534534")
// console.log(largeNum)





// When to Use Optional Chaining?
// When accessing deeply nested properties that may not always exist.
// When calling optional methods that may not be defined.
// When handling dynamic API responses where some fields may be missing.
// Optional Chaining (?.) in JavaScript
// Optional chaining (?.) is a safe way to access nested object properties without causing errors if any property in the chain is null or undefined.
// const user = {
//     name: "Lalit",
//     address: {
//       city: "Malegaon",
//       pincode: 423203
//     }
//   };
  
//   console.log(user.address?.city);  // ✅ Output: "Malegaon"
//   console.log(user.address?.state); // ✅ Output: undefined (No error)
//   console.log(user.contact?.phone); // ✅ Output: undefined (No error)
  

// const users = [{ name: "Alice" }, { name: "Bob" }];

// console.log(users[0]?.name); // ✅ Output: "Alice"
// console.log(users[2]?.name); // ✅ Output: undefined (No error)

// Example 2: Accessing Nested Methods
// const person = {
//   name: "John",
//   greet: () => "Hello!"
// };

// console.log(person.greet?.());  // ✅ Output: "Hello!"
// console.log(person.sayBye?.()); // ✅ Output: undefined (N


// Promise.allSettled()-->cover later