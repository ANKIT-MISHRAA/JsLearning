// scope level and mini hoisting in js


// function one (){
//     const userName = "ankit";

//          function two(){
//             const website = "youtube"
//             console.log(userName);
//          }
//     two()
//     // console.log(website)
//     }

// one()




if(true){
    const username = "ankit"
    if(username === "ankit"){
        const website = "youtube"
        console.log(username+website)
    }
    // console.log(website)
}
// console.log(username);


console.log(addOne(20));
function addOne (num){
    return 1+num;
}

// console.log(addOne(20));



// console.log(addTwo(30));
// const addTwo = function(num){
//     return(2+num);
// }

// console.log(addTwo(30));