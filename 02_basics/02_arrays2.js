const marvel_hoes = ["thor", "ironman", "spiderman"]
const dc_hoes = ["superman", "flash", "batman"]

// marvel_hoes.push(dc_hoes)
// console.log(marvel_hoes);
// console.log(marvel_hoes[3][1]);

// const hoes = marvel_hoes.concat(dc_hoes)
// console.log(hoes);

// const new_hoes = [...marvel_hoes,  ...dc_hoes]
// console.log(new_hoes);

const arr = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10]], 11]
const rearr = arr.flat(Infinity)//depth

// console.log(rearr);

console.log(Array.isArray("GOKU"));
console.log(Array.from("GOKU"));
console.log(Array.from({name: "goku"}));// interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));