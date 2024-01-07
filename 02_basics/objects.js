// there are two method to declear the object literal and constructor

// when we make object using constructor then a singlton object is created

// object literals
const sym= Symbol("sdk");
// here obj is key value pair
const jsUser = {
    name: "Ak",
    "full name":"MAK",
    [sym]:"lko",
    enroll: "GL9642",
    fno: "20COB348",
    age:21,
    backlogs:[],
    cpi:8.72,
}

// to method to access the object 

console.log(jsUser["full name"]);
console.log(jsUser);

// modify the value
jsUser["full name"] ="PK";
console.log(jsUser);

jsUser.admitted = function admit(){
    console.log("You are admitted");
}

jsUser.admittedtwo = function admit(){
    console.log(`you are admitted,${this.name}`)
}

console.log(jsUser.admitted());
console.log(jsUser.admittedtwo());



 