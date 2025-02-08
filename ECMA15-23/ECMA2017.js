// ECMA2017
// List of new useful features added in ES8
// string padding
// Object.values()
// Object.entries()
// Trailing commas in function parameter lists and calls
// Asyn Function

// 1.String Padding -->adding extra charachters(like spaces)to a string to make it a specfic length.
// 1.padStart()
// const cName="techwizlalit";
// const pName=cName.padStart(15);
// // pass value greater than that text.
// console.log(pName)
// 2.padEnd()
// const cName="techwizlalit";
// const padend =cName.padEnd(100,"Lalit");
// console.log(padend)

// 2.Trailing Commas:
function greet(name,age)
{
    console.log(name,age);
}
greet("lalit",22,)
// we pass commoas in last