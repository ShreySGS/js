// var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    // console.log("inner:", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

// ++++++++++++++++interesting+++++++

addnum(5)

function addnum(num) {
    return num+1    
}

// addTwo(5)// gives error

const addTwo = function(num){
    return num+2;
}
// addTwo(5)