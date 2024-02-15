
function sayMyName(){
    console.log("G");
    console.log("o");
    console.log("k");
    console.log("u");
}
// sayMyName-> reference
// sayMyName()// execution

// function addTwoNums(num1, num2) {
//     return num1 + num2;
// }
// console.log(addTwoNums(3, 4));

function loginUserMessage(username = "sam") {//default, else prints undefined
    if(!username){
        return
    }
    return `${username} jst loggin in`
}
// console.log(loginUserMessage("Goku"));//over writes the default

function calcCartPrice(val1, val2, ...num1) {
    return num1
}
// console.log(calcCartPrice(200, 400, 500, 2000));

const user = {
    name: "goku",
    price: 199
}

function handleObj(anyObject) {
    // any else will give undefined(.names)
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
}

// handleObj(user)
// handleObj({
//     name: "son",
//     price: 200
// })

const myArr = [200, 300, 100, 500]

function returnSecVal(getArray) {
    return getArray[1]
}

// console.log(returnSecVal(myArr));
console.log(returnSecVal([100, 200, 300]));
