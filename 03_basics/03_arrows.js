const user = {
    username: "goku",
    price: 100,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "son"
// user.welcomeMessage()

// console.log(this);//{}->empty odj in node, window{} in browser 

// function chai() {
//     let username = "goku"
//     console.log(this.username);//->doesn't work->gives undefined
//     // console.log(this);//gives so many values
// }
// chai()

// +++++++basic arrow func++++++++(explicit return)
// const addTwo = (num1, num2) => {
//     return num1 + num2// return keyword is mandatory
// }

// ++++implicit return(no return keyword)
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "goku"})

console.log(addTwo(3, 4))