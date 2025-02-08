// Hoisting ::
// Hoisting is a JS mechanism where variables and function
// declarations are moved to the top of their scope before code execution.
// This means that no matter where functions and variables are declared, they are
// moved to the top of their scope regardless of whether their scope is global or local.

console.log(myvar);
greet();

var myvar=20;
function greet()
{
    console.log("Greet funciton")
}