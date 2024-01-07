let score =33
// console.log(typeof score)

//suppose the score is in string.

score="33"
// now we want to convert this in the number format to save it in the db so we will 
// wrapper class
/* *Wrapper class for differet datatypes*
1:- number -> Number(pass value)
2:- String ->String(pass value)
3:- Boolean -> Boolean(pass value) if value is =0 then false otherwise always treated as true
4:- bigInt -> BigInt(pass value)
*/

// Examples:- 

let valueInNumber = Number(score);


// now suppose score is 33a
score ="33a";
valueInNumber = Number(score);
console.log(typeof valueInNumber)
// console.log(valueInNumber) // gives NaN Not a number

// **********************Operations***********************
// 1:- comparision operator
 /**
  * <, >, >=, <=, ==, !=
  * when we compare same datatype then okay no problem but it also allow as to compare 
  * two different datatype which not a good pratice
  * special cases with null value
  */

 console.log(null> 0); // false
 console.log(null === 0); //false
 console.log(null >= 0); // true


 // === strict check it check the datatypes also
 