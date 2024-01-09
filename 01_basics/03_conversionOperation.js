let score = "33"

console.log(typeof score);
console.log(score);

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN (Not an Number)
// true => 1; false => 0

 let isLoggedIn = " "
 let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn);

//  1 => true; 0 => false
//  "" => false; " " => true (space counts)
//  "goku" => true