let a=10
const b=20
var c=30
console.log(a); // 10
console.log(b) ;// 20
console.log(c); // 30

//use of scope
if (true){
    let a=10
    const b=20
    var c=30
}
console.log(a);//10
console.log(b);//20
console.log(c);//30

if (true){
    let a=10
    const b=20
    var c=30
    console.log("INNER:",a); //INNER:10
}

//+++++++++++++++++++SCOPE LEVEL++++++++++++++++++++++++++++++++++++++++++

function one(){
    const username="husna"
    function two(){
    const website="instagram"
    console.log(username);
    }
    //console.log(website);
    two()
}
    one()              //husna
//2nd function access 1st function variable but 1st function cannnot access 2nd function variable.

if(true){
    const username="husna"
if(username==="husna"){ // we can also write true in parenthesis
    const website="instagram"
    console.log(username + website)  ; 
}
//console.log(website);//make error
}
//console.log(username);//make error

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function addone(num){
    return num+1
}
addone(5)     //only return not print
console.log(addone(5));   //now print 6

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//HOISTING
const addtwo=function(num){
    return num+2
}
addtwo(5)  //not print but do not show error
console.log(addtwo); //[Function: addtwo]

