//***************This KeyWord**************** */

const user= {
    username:"ak",
    price:999,
    welcomeMsg: function(){
        console.log(`${this.username}, good to have you on board`); //without this keyword error . This keyword is use to refer to current context 
        // console.log(this);
    }
}

// user.welcomeMsg()

// function one(){
//     let username="ak"
//     console.log(this.username);
// }

// one()

// Decleration of arrow function

// const pen=()=>{
//     username="alpha male"
//     console.log(this);
// }

// pen()

// const addNum = (num1,num2)=>{
//     return num1+num2;
// }
// console.log(addNum(0,9));

const addTwo = ()=>({name:"ak"}) // to return an object we have to wrap the function body in parenthesis
console.log(addTwo());


// Immediately Invoked Fnction Expression (IIFE)

// we use it to remove the global scope polution sometime we need to run the function immediately without the polution of the global scope so we use IIFE

(function db_coonect(){
    console.log("DB CONNECTIION");
})();