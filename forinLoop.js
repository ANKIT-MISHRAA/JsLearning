const myObject = {
    js : "javaScript",
    CPP : "C++",
    Rb : "ruby",
    swift : "swift by apple"
}

for(const k in myObject){
    console.log(`${k} is shourtcut of ${myObject[k]}`);
    console.log(k);
}

const programming = ['js','cpp','py','java']

for(const k in programming){
    console.log(programming[k]);
}