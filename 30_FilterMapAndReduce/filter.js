// for each not return the value

// filter

// const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNum.filter((num)=>num<6)
// console.log(newNum);


// if use for each how to code

let arr = []
let  myNum = [1,2,3,4,5,6,7,8,9,10]

// myNum.forEach((val)=>{
//     if(val<6){
//         arr.push(val)
//     }
// })

// console.log(arr);

const books = [  
    {title : 'bookOne',genre : 'fiction', publish : 1981, edition:2004},
    {title : 'bookTwo',genre : 'Nonfiction', publish : 1986, edition:2004},
    {title : 'bookThree',genre : 'history', publish : 1994, edition:2004},
    {title : 'bookfour',genre : 'fiction', publish : 1999, edition:2004},
    {title : 'bookfive',genre : 'nonfiction', publish : 2004, edition:2004}
]

// let userbook = books.filter((bk)=>bk.genre==='fiction')
// console.log(userbook);

// let userbook = books.filter((bk)=>bk.publish<1995)
// console.log(userbook);

let userbook = books.filter((bk)=>{
    return bk.publish<2000 && bk.genre ==='fiction'
})

console.log(userbook);


