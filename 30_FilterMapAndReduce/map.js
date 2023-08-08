const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNumbers.map((item)=> item+10)
// console.log(newNum);


//chaining

const newNumber = myNumbers
                .map((item)=> item*10)
                .map((item=>item+2))
                .filter((item=> item<50))

console.log(newNumber);