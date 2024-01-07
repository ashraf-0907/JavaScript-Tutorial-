
const accountId=1234
let userMail ="123@email.com"
var userPassword="123"

/*
Please do not use var as it has scope resolution issue only use let  
*/
userCity="Alig" 
 //accountId=0; // Assignment to constant variable is not allowed.
console.log(accountId)
userCity="delhi" // allowed and can be changed this is similar to variable
console.log(userCity)
userMail="345@mail.com" // allowed
console.log(userMail)
userPassword="090"
console.log(userPassword);
console.table([accountId,userMail,userPassword,userCity])