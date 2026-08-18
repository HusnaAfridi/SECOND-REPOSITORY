function myName() {
    console.log("h");
    console.log("u");
    console.log("s");
    console.log("n");
    console.log("a");
}
myName();

function addNumbers(num1,num2){
    console.log(num1+num2);
}
addNumbers(10,20);

//const result = addTwonumbers(3,5);
//console.log("result",result);//undefined

function addNumbers(num1,num2){
    //let result=num1+num2
   // return result
   return num1+num2
}


function loginUsermessage(username ="sam"){
     if(username===undefined){
        console.log("please enter a user name")
        return;
     }
     return `${username} just logged in`;
    }
console.log(loginUsermessage("welcome to js"));
console.log(loginUsermessage());
//**************************************************************************
//******************************************************************************

function calculatecartprice(num1){
    return num1;
}
console.log(calculatecartprice(2));//2

//rest operator or spread operator
function totalPrice(...num1){
    return num1
}
console.log(totalPrice(200,300,400,500,600));//gives array of numbers//[ 200, 300, 400, 500, 600 ]


function calculatecartprice(Val1,Val2,...num1){
    return 1
}
console.log(calculatecartprice(200,300,400,500));//[400,500]//val1=200,val2=300

//object to function
const user={
    username:"husna",
    price:200,
}
function handleUser(user){
    console.log(user);
}
handleUser(user);//{ username: 'husna', price: 200 }

//array to function
const myArray=[1,2,3,4,5]
function handleArray(arr){
    console.log(arr);
}
handleArray(myArray);//[1,2,3,4,5]

//handle array is used to handle the array and print the array in console
//handle user is used to handle the object and print the object in console
