// scope in js refers to the context in which variables are declared and accessed.It defines the visibility and lifetime of variables.
// When a variable is declared,it is bound to a specific scope,
// and its accessibility is determined by that scope.

// We have Gloabl Scope ,Function Scope and Block Scope.
// we can say function and block scope is called Local Scope.

// // Lexical Scoping:
// Lexical scoping is a way of managing variable access in JS based on the physical stucture of the code.
// or we can say in JS is like a set of rules that determines where a variable can be used in your code.
// It follows the physical structure of your code, so if a variable is declared inside a
// function or block, it can usually be used only within that function or block.

// var a=10;
// var b=20;
// // what will be the value of a?  -->these is lexical scope we saw physically then we console.like that.
// console.log(a)


// // Scope Chaining:
// Scope chaining is the process by which JS, when looking for the value of a
// variable,checks the current scope and then looks in the outer(enclosing) scopes until it finds the variable
// or reaches the global scope.



// Global and local variable:::::
// Global variable:A variable declared in the global scope is referred to as a global variable.It has
// global visibility and can be accessed from anywhere in the code.

// Local variable: A variable declared within a function(function scope) or a block(block scope)is often referred to as a local variable.
// it has local visibility,limited to the function or block where its declared.

const globalVariable="I'm gloable variable";
function myfun()
{
    const localVariable="I'm local variable";
    console.log(localVariable)
    console.log(globalVariable)
    if(true)
    {
        const blockVariable="I'm block variable";
        console.log(blockVariable);
        console.log(localVariable)
        console.log(globalVariable)
    }
}
myfun();
console.log(globalVariable)
// console.log(localVariable) -->refernce error
