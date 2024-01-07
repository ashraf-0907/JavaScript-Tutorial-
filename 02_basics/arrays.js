const myArray = [0,9,9,0]  // method 1 to declear

console.log(typeof myArray)  // typeof will give object

const arr2= new Array(1,2,3,4); // typeof will give object
console.log(arr2[0]);

// arr2.push(8);
// arr2.pop();

// for (let index = 0; index < arr2.length; index++) {
//     const element = arr2[index];
//     console.log(element);
// }

// arr2.unshift(9);

console.log(arr2);


// slice and splice

//console.log("A",arr2);

const myarr = arr2.slice(1,3); // slice(start_index,range) range is not included 

// console.log(myarr);

const myarr2 = arr2.splice(1,3); // splice also modify the original array and also include the range 

// console.log(myarr2);

const nt_boys= new Array("AK","AA","SA","TUR");
const su_boys= new Array("AB","MF","MU");

//nt_boys.push(su_boys);// will treat su_boys as a single qunatity

// console.log(nt_boys); 
// to overcome this problem we use concat

 const hall_boys=nt_boys.concat(su_boys); // concat return an array 

 hall_boys.sort();

 console.log(hall_boys);