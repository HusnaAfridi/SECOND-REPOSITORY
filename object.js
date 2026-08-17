//object literals
//const mySym=symbol("key1")
const jsuser={
    age:20,
    name:"husna",
    location:"peshawar",
    mySym:"key1",
    IsLoggedIn:["tuesday","friday"]
}
console.log(jsuser.name);//husna
console.log(jsuser["location"]);//peshawar//mostly used method.
console.log(jsuser.mySym);//key1
console.log(typeof jsuser.mySym);//string
console.log(jsuser["mySym"]);//key1 //use symbol always in a square bracket.
jsuser.location="islamabad";
console.log(jsuser.location);//islamabad //change the value of location if we overwrite it.
//Object.freeze(jsuser); //print all values in an object
console.log(jsuser);

jsuser.greeting=function(){
    console.log("hello js user");
}
console.log(jsuser.greeting());//hello js user //add a function in an object.

jsuser.greeting2=function(){
    console.log(`hello jsuser,${this.name}`);//hello jsuser,husna
}
console.log(jsuser.greeting2());


//singleton objects

const freefireuser={
    userId:1,
    userName:"husna",
    isloggedIn:true,
}
console.log(freefireuser.userName);//husna
console.log(freefireuser["isloggedIn"]);//true

const regularuser={
    email:"husnashandigul@gmail.com",
    fullname:{
        firstname:"husna",
        lastname:"afridi"
    }
}
console.log(regularuser.fullname.firstname);//husna
console.log(regularuser.fullname.lastname);//afridi

const obj1={1:"a"}
const obj2={2:"b"}

const obj3={obj1,obj2}//nested
 console.log(obj3);//{ obj1: { '1': 'a' }, obj2: { '2': 'b' } }
 const obj4=Object.assign({},obj1,obj2);//merged
console.log(obj4);//{ '1': 'a', '2': 'b' }//assign

const obj5={...obj1,...obj2};//spread merged
console.log(obj3);//{ obj1: { '1': 'a' }, obj2: { '2': 'b' } }

const user1=[
    {
        id:1,
        email:"husnashandigul@gmail.com"

    }
]
console.log(freefireuser);//{ userId: 1, userName: 'husna', isloggedIn: true }
console.log(Object.keys(freefireuser));//[ 'userId', 'userName', 'isloggedIn' ]//array
console.log(Object.entries(freefireuser));//[ [ 'userId', 1 ], [ 'userName', 'husna' ], [ 'isloggedIn', true ] ]
console.log(freefireuser.hasOwnProperty("isLoggedIn"));//false

//destructuring of objects
const course={
    coursename:"js",
    price:2200,
    courseInstructor:"husna"
}
const {coursename,price,courseInstructor}=course;
//course.courseInstructor
console.log(coursename);
console.log(price);
console.log(courseInstructor);
//if we want to change the variable name we can do it like this.
const {coursename:mycoursename,price:myprice,courseInstructor:mycourseInstructor}=course;
console.log(mycoursename);
console.log(myprice);
console.log(mycourseInstructor);