//if
//if(true)code will execute
//if(false)code will not execute
//<(less than),>(greater than),<=(less than or equal to),==(checks value equal),===(checks value and type),
//!=(not equal to),!==(strict not equal to).
let a=10;
let b=5;
console.log(a<b);//false
console.log(a>b);//true
console.log(a<=10);//true
console.log(a>=11);//false
console.log(a=="10");//true
console.log(a==="10");//false
console.log(a!=b);//true
console.log(a!=="10");//true
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const temperature=50;
if(temperature<50){
    console.log("less than 50");
} else{
    console.log("temperature is greater than or equal to 50");   //temperature is greater than or equal to 50
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//if(temperature===41){
   // console.log("less than 50");
//} else{
   // console.log("temperature is greater than 50");
//}
//console.log("execute");
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//const score=500
//if(score>100){
   // const power="fly"
   // console.log(`user power:${power}`);
//}
//console.log(`user power:${power}`);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//IMPLICIT SCOPE(SHORT HAND NOTATION)
//const balance=1000
//if(balance>50)console.lof("test"),console.log("test 2");//not easy to read
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//NESTING:
const balance=1000
if(balance<500){
    console.log("less than 500");
} else if(balance<750){
    console.log("less than 750");
} else if(balance<900){
    console.log("less than 900");
} else{
    console.log("900 or greater");    //900 or greater
}
//=================================================================================================
const userloggedin=true
const debitcard=true                      //&& check condition on both side
if(userloggedin && debitcard){
    console.log("allow to buy course");   //allow to buy course
}
//=============================================;=====================================================
const loggedinfromgoogle=false;
const loggedinfromemail=true;
if(loggedinfromgoogle||loggedinfromemail){
    console.log("user logged in");  //user logged in
}
//================================================================================
//switch
const month=3
switch(month){
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("febuary");
        break;
    case 3:
        console.log("march");
        break;
    case 4:    
        console.log("april");
        break;
    case 5:
        console.log("default case");  
        break;  
}       //march
//=========================================================
//TRUTHY AND FALSY VALUES
//const useremail="husna@gmail.com"  // got user email
//const useremail=""       //dont have useremail
const useremail=[]         //got user email
if(useremail){
    console.log("got user email");
}  else{
    console.log("dont have user email");
}                      
//========================================================
//FALSY VALUES
//false,0,-0,BigInt 0n,"",null,undefined,NaN
//TRUTHY VALUES
//"0","false"," ",[],{},function(){}
//=======================================================
const useremail1="husnagul@gmail.com"
if(useremail1.length===0){
    console.log("array is empty");
}
//=======================================================
const emptyobject={}
if(Object.keys(emptyobject).length===0){
    console.log("object is empty");
}
//========================================================
//comparisons
//false==0  (true)
//false=="" (true)
//0==""      (true)
//&&  all condition must be true so then execute
//||  if only one condition is true then execute
//========================================================================
//NULLISH COALESCING OPERATOR(??)
let val1;
val1=5??10
console.log(val1);
val1=null??10
console.log(val1);
val1=undefined??10??20
console.log(val1);
//=========================================================================
//TERNIARY OPERATOR
condition?true:false
const teaprice=100
teaprice<=80? console.log("less than 80"):console.log("more than 80");
//==========================================================================

