const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com') // string object 

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)  // start with index 0 to index 3
console.log(newString);

const anotherString = gameName.slice(-8, 4)   //the slice() method is used to extract a portion of a string and returns a new string without modifying the original string. The parameters passed to slice() define the start and end positions for the extraction.
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) // return true if url contain the sundar

console.log( typeof gameName.split('-')); // return an object of string splitting the url at '-'