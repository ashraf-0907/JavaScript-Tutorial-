// const tinderUser = new Object();
const tinderUser= {};

tinderUser.id="1234"
tinderUser.mail="1234@mail.com"
tinderUser.score="3.0"

 console.log(tinderUser);

const nexted_obj= {
    fullname:{
        first_name:"Hello",
        last_name:"World"
    }
}
// console.log(nexted_obj?.fullname.first_name);

// Concat two object

const obj1={
    name:'ak',
    class:2,
    id:4
}

const obj2={
    score:1,
    time:2,
    class:7
}
//method 1 which fails
// const obj3={obj1,obj2}; // will treat obj1 and obj2 as nexted values
// console.log(obj3);

//method 2 but not used during coding
// const obj3=Object.assign({},obj1,obj2);
// console.log(obj3);

//method 3

// const obj3={...obj1,...obj2,...nexted_obj};
// console.log(obj3);


//more about object

const course={
    coursename:"DBMS",
    courseId:"COC234",
    courseInstructor:"Bengali"
}

const {courseInstructor: instructor} = course;
console.log(instructor);

