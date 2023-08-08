// const myNums = [1,2,3]

// // const mytotal = myNums.reduce(function(acc,curentvalue){
// //     console.log(`acc : ${acc}  curentvalue : ${curentvalue}` );
// //     return acc+curentvalue
// // },0) 
// // console.log(mytotal);

// const mytotal = myNums.reduce((prival,curval)=>(prival+curval),0)

// console.log(mytotal);


// shoping cart

const shopingCart = [
    {
        itemName :"javaScript",
        price : 1999
    },
    {
        itemName :"python",
        price : 999
    },
    {
        itemName :"java dsa",
        price : 3999
    },
    {
        itemName :"jmachin learning",
        price : 9999
    }
]

totalPay = shopingCart.reduce((prival,item)=>prival+item.price,0)
console.log(totalPay);
