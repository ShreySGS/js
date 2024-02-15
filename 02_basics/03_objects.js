// constructor
// singleton
// Object.create

// literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Goku",
    "full name": "Son Goku",
    age: 21,
    [mySym]: "mykey2",
    location: "Banglore",
    email: "goku@gmail.com",
    isLoggedIn: false,
}

// console.log(JsUser.name);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym]);

// Object.freeze(JsUser) // obj detAILS CANT BE MANIPULATED
// JsUser.email = "goku@chat.com"
// console.log(JsUser.email)
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS user");
}
JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());