// object 

// object literals

// const jsUser = {
//     name: "ankit mishra" ,
//     age: 18,
//     address: "lucknow",
//     "email":"ankit@google.com",
//     isLoggedin: true ,
//     lastLoginDayes: ["saturday","sunday"]
// }

// console.log(jsUser.age)
// console.log(jsUser["email"])
// console.log(jsUser["name"])


// store symbol value in object 



const mySym = Symbol("key1")

const jsUser = {
    name: "ankit mishra" ,
    age: 18,
    address: "lucknow",
    "email":"ankit@google.com",
    isLoggedin: true ,
    lastLoginDayes: ["saturday","sunday"],
    [mySym]: "myKey1" 
}

// console.log(typeof(jsUser["mySym"]))


// console.log(jsUser[mySym])
// console.log(typeof(jsUser[mySym]))



// console.log(jsUser.email)
// Object.freeze(jsUser)
// jsUser.email ="new@email.com"
// console.log(jsUser.email)


jsUser.greeting = function() {
    console.log("hello js user")

}


jsUser.greeting2 = function(){
    console.log(`hello user ${this.name}`);

}

jsUser.greeting()
jsUser.greeting2()









