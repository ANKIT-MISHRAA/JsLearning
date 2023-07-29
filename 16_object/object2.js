// Object // Singleton object

// const tinderUser = new Object()

// const tinderUser = {}

// tinderUser.id = 1233
// tinderUser.name = "sammy"
// tinderUser.loggedin = false

// console.log (tinderUser);


const usernew = {
    email : "m@google.com",
    fullName :{
        userName:{
            userFirstName : "ankit " ,
            userLastName : "mishra"
        }}
    
}

// console.log(usernew.fullName.userName)
//console.log(usernew.fullName.userName.userLastName);


const obj1 = { 1 : "A" , 2 : "B"}
const obj2 = { 3 : "A" , 4 : "B"}
const obj3 = { 5 : "A" , 6 : "B"}

// const obj4 = {obj1,obj2,obj3}
// console.log(obj4)


// const obj4 = Object.assign(obj1,obj2,obj3)
// console.log(obj4)

////////////////////// with the help of spred /////

const obj4 = {...obj1 , ...obj2 , ...obj3}
console.log(obj4)



// ====================== arry in multy objects-=============

const user = [{
    id : 101 ,
    email : "ravi@gogle.com"
 } ,
{
    id : 102 ,
    email : "ravi@gogle.com"
},
{
    id : 103 ,
    email : "ravi@gogle.com"
},
{
    id : 104 ,
    email : "ravi@gogle.com"
}]

console.log(user[2].id)





const tinderUser = {}

tinderUser.id = 1233
tinderUser.name = "sammy"
tinderUser.loggedin = false

console.log (Object.keys(tinderUser));
console.log (Object.values(tinderUser));
console.log (Object.entries(tinderUser));




console.log(tinderUser.hasOwnProperty('name'));




















 
