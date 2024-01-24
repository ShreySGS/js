const name = "goku"
const repocnt = 10

console.log(name + repocnt + " value")

console.log(`hello everyone this is ${name} and my repo count is ${repocnt}`)

const gameName = new String("go ku pc")

console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());//ORIGINAL VALUE ISNT CHANGED
console.log(gameName.charAt(2));
console.log(gameName.indexOf('p'));

const newS = gameName.substring(0, 4);
console.log(newS);

const anS = gameName.slice(1, 4)
console.log(anS);

const s1 = "  goku  poku  "
console.log(s1);
console.log(s1.trim());

const URL = "https://goku.com/goku%20sgs"
console.log(URL.replace('%20', '-'));
console.log(URL.includes('oku'));

console.log(gameName.split(' '));
