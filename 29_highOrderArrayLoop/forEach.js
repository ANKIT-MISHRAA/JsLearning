const coding = ['pyton','ruby','java','cpp']

// coding.forEach(function(val){
//     console.log(val);
// })


// coding.forEach((item)=>{
//     console.log(item + "hh");
// })

// pass a fiunction as a parameetar

// function printMe (item){
//     console.log(item);
// }

// coding.forEach(printMe )




// forEach store the item , index and array as a parameetr

// console.log(coding);

// coding.forEach((item,index,Arr)=>{
//     console.log(item,index,Arr);
// })


const myCoding = [
    {
        languageName : "javaScript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    },
    {
        languageName : "swift",
        languageFileName : "sw"
    }
]


myCoding.forEach((item)=>{
    console.log(item.languageName);
})