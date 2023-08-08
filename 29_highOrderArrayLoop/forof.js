// const arr = [1,2,3,4,5]

// for (const num of arr){
//     console.log(num);
// }


const greetig = "hello world!"

for(const greet in greetig){
    console.log(`the each value is ${greetig[greet]}`);
}






// const map = new Map()

// map.set('in','india')
// map.set('usa','united states of america')
// map.set('fr','france')
// map.set('in','india')

// console.log(map);
// for(const [key,value] of map){
//     console.log(key,":=",value );
// }

let myObj = {
    game1 : "gta",
    game2 : "nfs"
}

for(const key of myObj){
    console.log(key);
}

///it gives an error myObj is not itrateble