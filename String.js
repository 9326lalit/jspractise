// Strings


// String Manipulation Methods
// charAt(index) - Returns the character at the specified index.
// charCodeAt(index) - Returns the Unicode of the character at the specified index.
// concat(string1, string2, ...) - Joins two or more strings.
// includes(substring, start) - Checks if the string contains a specific substring.
// endsWith(substring, length) - Checks if the string ends with a specific substring.
// startsWith(substring, start) - Checks if the string starts with a specific substring.
// indexOf(substring, start) - Returns the index of the first occurrence of a substring.
// lastIndexOf(substring, start) - Returns the index of the last occurrence of a substring.
// padStart(targetLength, padString) - Pads the string with another string from the start to reach a given length.
// padEnd(targetLength, padString) - Pads the string with another string from the end to reach a given length.
// repeat(count) - Returns a new string with a specified number of copies of the original string.
// replace(searchValue, newValue) - Replaces the first occurrence of a substring with a new value.
// replaceAll(searchValue, newValue) - Replaces all occurrences of a substring with a new value.
// slice(start, end) - Extracts a portion of a string and returns it as a new string.
// split(separator, limit) - Splits a string into an array of substrings.
// substring(start, end) - Extracts characters between two indices.
// toLowerCase() - Converts the string to lowercase.
// toUpperCase() - Converts the string to uppercase.
// trim() - Removes whitespace from both ends of the string.
// trimStart() / trimLeft() - Removes whitespace from the start of the string.
// trimEnd() / trimRight() - Removes whitespace from the end of the string.
// String Inspection Methods
// length - Property that returns the length of the string.
// localeCompare(compareString) - Compares two strings in the current locale.
// match(regex) - Returns matches of a string against a regular expression.
// matchAll(regex) - Returns an iterator with all matches of a string against a regular expression.
// search(regex) - Searches for a match between a string and a regular expression and returns the index of the match.
// valueOf() - Returns the primitive value of a string.
// String Construction
// fromCharCode(...codes) - Creates a string from Unicode values.
// fromCodePoint(...codePoints) - Creates a string from Unicode code points.
// raw(template, ...substitutions) - Returns a raw string from a template literal.
// String Comparison Methods
// localeCompare(compareString) - Compares two strings based on the locale.
// includes(substring) - Checks if a string contains a specific substring.




// 1> length
// const str = "Hello Lalit";
// console.log(str.length);


// 2> Escape Charachter
// let text ='My name is "Lalit"';
// console.log(text);

// 3>indexOf() and lastIndexOf()
// const st = "Lalit_Khairnar";
// console.log(st.lastIndexOf("i"));

// 4> Array.from() -->returns an array from any object with a length property.
// let text ='My name is Lalit';
// let stt= Array.from(text);
// let strmm = stt.map((curEle ,index)=>

//      `${curEle}-${index}` 
// )
// console.log(strmm);


// 5>Search method -->returns index no where the first match found otherwise --1 not found.
// but beauty is we can use regular expressions as well with search method
// let text ='My name is Lalit';
// let result = text.search(/lalit/i);
// console.log(result);

// 6>match() -->returns an array of the matched values or null if not match is found.
// let text ='My Lalit name is Lalit';
// let result = text.match("Lalit");
// here the js converts the normat text into regular expression text.match(/Lalit/);without the g(global) flag
// console.log(result);


// 7>matchAll()
// let text ="Lalit khairnar";
// let result = text.matchAll("khairnar");
// console.log(result)
// console.log(...result);
// by default global flag add
// for(let item of result)
// {
//     console.log(item[0]);
// }


// 8>includes()
// let text ="Lalit khairnar";
// let result = text.includes("khairnar");
// console.log(result);



// // return booleans value
// // 9>startswith() -->returns true if a string begins with a specified value.otherwise it return fals.e
// let text ="Lalit khairnar";
// let result = text.startsWith("Lalit",1);
// // 1 is index position means from that index number is starts or not.
// console.log(result)

// return booleans value
// 9>endsWith() -->returns true if a string begins with a specified value.otherwise it return fals.e
// let text ="Lalit khairnar";
// let result = text.startsWith("Lalit",-2);
// // -1 is index position means from that index number is starts or not.
// console.log(result)


// --------------------------------------------------------------------------

// Extracting String Parts:

// 10>Slice() -->slice(Start , end) its deprecated right now
// let text ="Lalit khairnar";
// let result = text.slice(1,4);
// console.log(result);

// exmaple 1> is one person book hotel from start date to end date...
// console.log("Exmaple Find Days Between Two Dates");
// function logic(a,b)
// {
//     const aa = a.slice(0,2);
//     const  bb = b.slice(0,2);
//     // console.log(lo,ll)
//     const change = bb-aa
//     console.log("days", change)

// }
// logic("12/03/2025", "15/03/2025");

// example 2> is check sameMonthYear or not
// function logic(a,b)
// {
//     const aa = a.slice(3,10);
//     const  bb = b.slice(3,10);
//     console.log(aa,bb)
//     if(aa==bb)
//     {
//         console.log("Present in same year and month ")
//     }
//     else
//     {
//         console.log("Not present in same year and month")
//     }

// }
// logic("12/03/2025", "25/03/2025");



// 11> substring(indexEnd ,indexEnd) --> Extracts a portion of the string based on starting and ending indices.
// when pass -index then gives all sentense or string.
// let text = "abc xyss ,okay"
// let result = text.substring(-2);
// console.log(result);


// 12>at() -->returns the charachter at a specified index(position) in a string.
// let text = "abc xyss ,okay"
// let result = text.at(-2);
// console.log(result);


// 13>replace() --> replace only single occurence/we can use regular expression as well
// let text = "abc xyss ,okay"
// let result = text.replace("s","z"); 
// console.log(result);


// 14>for replace all --> use regular expression wit /g(global flag);
// let text = "abc xyss ,okay"
// let result = text.replace(/s/g ,"z"); 
// console.log(result);

// or else replaceAll() method is also there


// 15>charAt(), charCodeAt() , at()
// let text = "abc xyss ,okay";
// console.log(text.charAt(3))  //just find with index number..not take negative values
// console.log(text.charCodeAt(5))  //gives and ascii value
// console.log(text.at(-3)) //give value present in string...negative index strats from -1

// 16>toUpperCase ,toLowerCase
// let text ="Lallantaap";
// console.log(text.toLowerCase())
// console.log(text.toUpperCase())
// console.log(text.toString())


// 17>trim() -->these mainly removes starting and end space only
// let text ="Lallant aapksafsd";
// console.log(text.length);
// let change = text.trim()
// console.log(change.length)


// 18>split() -->
// let text ="abc,xys,aaa";
// let splitt = text.split(",")
// console.log(splitt);

// Example count the numner of vowels in a string?
// aeiou
// let text ="lalalkxyeibou";

// let check = text.split("");
// let vowelcount = 0;

// check.forEach(char =>
// {
//     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//         console.log("Vowel found:", char);
//         // vowelcount= vowelcount+char;

//         // console.log(vowelcount)
//         vowelcount++;
//     } else {
//         console.log("Not a vowel:", char);
//     }}
// )

// console.log(vowelcount)


// 19>String.fromCharCode()
// print a to z
// console.log("a".charCodeAt(0))
// console.log("z".charCodeAt(0))
// for(let char=97 ; char<=122 ; char++)
// {
//     console.log(String.fromCharCode(char));
// }



// to create functions here and calling from another page...just import and call by function name
// export const check= (a,b) =>
// {
//     console.log("alasdf");
// }


// check function given is string is pangram or not?
const pangram = (str) =>
{

    let check = str.toLowerCase().split("");
    // console.log(check);

    const values = check.filter((curEle)=>
    
        // const cc= console.log(`${curEle} , ${index}`)
        // const cc= console.log(curEle.charCodeAt())
        // const bb = console.log(curEle.charCodeAt(0))
        curEle.charCodeAt() >= "a".charCodeAt() && curEle.charCodeAt() <= "z".charCodeAt()

    )
    // console.log(values)
    console.log([...new Set(values)])
}
pangram("The quick brown fox jumps over the lazy dog");