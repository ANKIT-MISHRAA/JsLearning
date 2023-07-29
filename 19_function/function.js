

// function sayhello(name){
//     console.log(`hello ${name} sir `)
//     console.log(`namste ${name} sir `)
// }

// sayhello("ankit")
// sayhello("mishra ji")

 
// function addTwoNumber (num1,num2){
//     console.log(num1+num2)
// }

// addTwoNumber(45,55)

// function addTwoNumber (num1,num2){
//     let result = num1+ num2;
//     return result
// }

// const addResult = addTwoNumber(12,12)
// console.log(addResult)

// function loginUser (username){
//     console.log(`user ${username} just logged in`)
// }

//  loginUser("ankit")

// function loginUser (username){
//     return(`user ${username} just logged in`)
// }

//  let status = loginUser("ankit")
// console.log(status)

function loginUser (username){
    if(!username){
        console.log("please enter user name")
        return ;
    }
    
    return`${username} just logged in`

}

console.log(loginUser())
// console.log(loginUser("ankit mishra"))