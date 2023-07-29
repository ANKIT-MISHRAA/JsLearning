// const user = {
//     userName : "ankit",
//     age : 10,
//     welcomeMassage : function (){
//         console.log(`hello ${this.userName} wellcome`)
//     }
// }

// user.welcomeMassage()

// user.userName = "sam"

// user.welcomeMassage()

// console.log(this);


// function chai () {
//     let userName = "ankit"
//     console.log(this.username);
// } 

// chai()

// //////////////// print undifined



// const  chai = function(){
//     let userName = "ankit" ;
//     console.log(this.userName);
// }

// chai()

// const chai = ()=> {
//     let userName = "Ankit" 
//     console.log(this.userName);

// }
// chai()


//  const addtwoNumbers = (num1,num2) =>{
//     return num1+num2
//  }

//  console.log(addtwoNumbers(23,23));


//      ===================    implisit return

const addtwoNumbers = (num1,num2) => num1+num2
const addtwoNumbers = (num1,num2) => (num1+num2)

console.log(addtwoNumbers(34,66))