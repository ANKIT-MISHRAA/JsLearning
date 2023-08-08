// for(let i=0 ; i<=10 ; i++){
//     let eliment = i ;
//     console.log(eliment);
//     if(i==5){
//         console.log("5 is a best number");
//     }
//     console.log(eliment);
// }


// for (let i = 0 ; i<=10 ; i++){
//     console.log(`for outer loop value ${i}`);
//     for(let j = 0 ; j<=10 ; j++){ 
//     // console.log(`for outer loop value ${i} and inner loops value ${j}`);
//     console.log(i + "*" + j + "=" + i*j );
//     }
// }


// let myArray = ["superman" ,"batman" ,"ironman"]

// for (let i = 0 ; i < myArray.length ; i++){
//     let eliment = myArray[i]
//     console.log(eliment)
// }


// break and continue


for (let i=0 ; i<= 20 ; i++){
    if(i == 5){
        console.log(`detected 5`);
        break;
    }
    console.log(`value of i is ${i}`)
}


for (let index=0 ; index<20 ; index++){
    if(index == 5){
        console.log(`5 is ditected`);
        continue;
    }
    console.log(`the value of index is ${index} `);
}