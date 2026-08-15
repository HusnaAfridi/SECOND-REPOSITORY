const myArray = [0, 1, 2, 3, 4, 5];
console.log(myArray);//[ 0, 1, 2, 3, 4, 5 ] //shows the array

console.log(myArray[1]);//1 //shows the value at index 1 in array

const myRepo = ["firstRepo", "secondRepo", "thirdRepo"];
console.log(myRepo[0]);//"firstRepo" //shows the value at index 0 in array
console.log(myRepo[1]);//"secondRepo" //shows the value at index 1 in array
console.log(myRepo[2]);//"thirdRepo" //shows the value at index 2 in array

const myArray1 = [1, 2, 3, 4];
console.log(myArray1[0]);//1 //shows the value at index 0 in array
console.log(myArray1[1]);//2 //shows the value at index 1 in array

//methods of arrays

myArray1.push(5);//add 5 at the end of array
console.log(myArray1);//[ 1, 2, 3, 4, 5 ] //add a value at the end of array

myArray1.pop()//remove last value i.e 5
console.log(myArray1);//[1,2,3,4]

myArray1.unshift(5);//add 5 at the beginning of array
console.log(myArray1);//[5,1,2,3,4] //add a value at the beginning of array

myArray1.shift()
console.log(myArray1);//[1,2,3,4] //remove that added value

console.log(myArray1.includes(9))//false //show the value true if it is present in array otherwise not.
console.log(myArray1.indexOf(26))//shows the position of that value,if the value is not present it will give answer -1.
console.log(myArray1.indexOf(2))//1 the position og 2 is 1(0,1..)//show the position of value

const newArray=myArray1.join()//convert array into a string
//console.log(myArray);//[ 0, 1, 2, 3, 4, 5 ]
console.log(newArray);//1,2,3,4 //string

//slice,splice
console.log("A",myArray1);//A[1,2,3,4]
const myn1=myArray1.slice(1,4);
console.log(myn1);//[2,3,4]
console.log("B",myArray1);//B[1,2,3,4]
const myn2=myArray1.splice(1,4);
console.log("C",myArray1);//C[1]
console.log(myn2);//[2,3,4]

//*****************************************************************************
//*****************************************************************************

const secA=["husna","sana","sara"];
const secB=["x","y","z"];
secA.push(secB);
console.log(secA);//[ 'husna', 'sana', 'sara', [ 'x', 'y', 'z' ] ]//array within an array
const allsec=secA.concat(secB);
console.log(allsec);//[ 'husna', 'sana', 'sara', [ 'x', 'y', 'z' ], 'x', 'y', 'z' ]//all array in one array

const allnewsec=[...secA,...secB];
console.log(allnewsec);//[ 'husna', 'sana', 'sara', [ 'x', 'y', 'z' ], 'x', 'y', 'z' ]

const myarray2=[1,2,3,[4,5,6],[6,7[4,5]]];
const myarray3=myarray2.flat(Infinity);//all arrays in a sequence
console.log(myarray3);//[ 1, 2, 3, 4, 5, 6, 6, undefined ]

console.log(Array.isArray("husna"));//false //it is not present in array//show a value is in array or not.
console.log(Array.from("husna"));//[ 'h', 'u', 's', 'n', 'a' ] //convert string into array.
console.log(Array.from({name:"husna"}))//[]//not convert into array.


let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]//convert into array.

