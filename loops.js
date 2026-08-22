//loops(iteration)
//for loop
//for(let index=0;index<Array.length;index++){
//    const element=array[index];
//}

for(let index=0;index<=10;index++){
    const element=index;
    console.log(element);              //print number from 1-9(index=10)
}                                      //print number from 1-10(index<=10)
//===============================================================
for(let i=0;i<10;i++){
    const element=i;
    if(element==5){
        console.log("5 is best number");
    }
console.log(element);
}
//================================================================
for(let i=1;i<= 10;i++){
    console.log(`outer loop value:5{i}`);
    for(let j=0;j<= 10;j++){
        console.log(`inner loop value:${i} and inner loop value:${i}`);
    }
}
//================================================================
for(let i=1;i<= 10;i++){
    console.log(`outer loop value:5{i}`);
    for(let j=0;j<= 10;j++){
        console.log(i+`*`+j+`=`+ i*j);
    }
}
//===============================================================
//LOOP ON ARRAY
let myarray=["HUSNA","husna","Husna"]
console.log(myarray.length);
for(let index=0;index<myarray.length;index++){
    const element=myarray[index];
    console.log(element);
}
//================================================================
//break and continue
for(let index=1;index<=20;index++){
    console.log(`value of i is ${index}`);
}                                          //value of i is 1-20
//===============================================================
for(let index=1;index<=20;index++){
    if (index==5){
        console.log(`detected 5`);
        break;
    }
    console.log(`value of i is ${index}`);
}            