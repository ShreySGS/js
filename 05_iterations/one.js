// forof cant be used for obj

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"

for (const greet of greetings) {
    // console.log(greet);
}

// Maps

const map = new Map()
map.set('in', "India")
map.set('ru', "Russia")
map.set('fr', "France")

console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}