//  +++++++NUMBERS+++++++
const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString());//original property doesnt change
// console.log(balance.toString().length);//3
// console.log(balance.toFixed(1));//after decimal (100.0) returns a string

const otherNum = 123.8966

// console.log(otherNum.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));//IN =10,00,000 US = 1,000,000

//  +++++++MATH+++++++
// console.log(Math);
// console.log(Math.abs(-4)) ;
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.max(4, 3, 6, 9));//min

console.log(Math.floor(Math.random())*10 + 1);//0-1(Math.random())

const max = 20
const min = 10
console.log(Math.floor(Math.random() * (max - min + 1)) + min);//min - max nos
