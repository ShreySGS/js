// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date("01-23-2023")//(2023, 0, 23, 5, 3)//("01-23-2023")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(myTimeStamp/1000));

let newDate = new Date()//"02-11-2024"
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay() + 1);
// console.log(newDate.getMonth() + 1);

// `${newDate.getDay()} and the time ${newDate.getTime()}`
newDate.toLocaleString('default', {
    weekday : "long",

})
