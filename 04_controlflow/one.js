// +++++++++++++if++++++++++++++

// bad practice
// if(true) console.log("test"), console.log("test 2");

// +++++++++++++switch++++++++++++++

// const month = 2
// switch (month){
//     case 1:
//         console.log("jan");
//         break;
//     case 1:
//         console.log("jan");
//         // break;
//     case 2:
//         console.log("feb");
//         // break;
//     case 3:
//         console.log("march");
//         // break;
//     case 4:
//         console.log("april");
//         // break;
//     default:
//         console.log("gan");
//         break;
// }

// +++++++++++++truthy+falsy+++++++++++++
//  truthy
// true, 1, non-empty string("0", "false", " "), [], {}, function(){}   
//  falsy
// false, 0, -0, "", null, NaN, BigInt 0n

// +++++++++++++mt++++++++++++++

// const userEmail = []
// if(userEmail.length === 0){
//     console.log("array is Mt");
// }
// const mTobj = {}
// if(Object.keys(mTobj).length === 0){
//     console.log("obj is Mt");
// }

// ++Nullish Coalescing Operator (??): null undefined++

// let val1
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20
// console.log(val1);

// ++Terniary Operator (?)++

// condition ? true : false

const iceteap = 100
iceteap <= 80 ? console.log("less than 80") : console.log("more than 80");