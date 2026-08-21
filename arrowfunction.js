const user={
    username:"husna",
    price:200,
    welcomeMessage:function(){
       // console.log(`${this.username},welcome to website`);
    }
}
console.log(this);//{}
user.welcomeMessage()//husna,welcome to the website
user.username="sana"  //if we want to change the name we can do it by this process
user.welcomeMessage()//sana welcome to the website
console.log(this)//{}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function one(){
    let username="husna"
    //console.log(this);//undefined
}
one() 
//THIS works in object not in function.
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//const me=function(){
    let username="husna"
   // console.log(this.username);
//}
//me()             //undefined
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//ARROW FUNCTION
//const me=()=>{
   // let username="husna"
   // console.log(this.username); //undefined
//}
//me()
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//ARROW FUNCTION //()=>{}
    const addtwo=(num1,num2)=>{
        return num1+num2              //we type return for curly brackets
    }
console.log(addtwo(3,4));   //7           //explicit return
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const addTwo=(num1,num2)=>num1+num2   //we don't write return for parenthesisi
console.log(addTwo(3,4));     //7         //explicit return
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// addTwonumber=(num1,num2)=>{{username:"husna"}};
//console.log(addtwonumber(3,4));
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE) use to resist pollution from global scope.
//function text(){
    //console.log(`DB CONNECTED`);
//}
//text()             //DB CONNECTED
//++++++++++++++++++++++++++++++++++++++++++++++++++
(function text(){
    console.log(`DB CONNECTED`);
})()                      //DB CONNECTED
//()();
//+++++++++++++++++++++++++++++++++++++++++++++++++++
//(function arrcode(){
 //   console.log(`DB CONNECTED TWO`);
//})
//+++++++++++++++++++++++++++++++++++++++++++++++++++
//((name)=>{
   // console.log(`DB CONNECTED TWO ${NAME}`);
//})('husna')

const me=()=>{
  console.log("meri husna")
}
me()
