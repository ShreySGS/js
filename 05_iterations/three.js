const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// coding.forEach(function (val) {
//     // console.log(val);
// })

// coding.forEach( (val) => {
//     // console.log(val);
// })

// function printMe( item ){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (val, index, arr) => {
//     console.log(val, index, arr);
// })

const myCoding = [
    {
        langName: "java",
        short: "java"
    },
    {
        langName: "javascript",
        short: "js"
    },
    {
        langName: "python",
        short: "py"
    }
]
myCoding.forEach(function (item) {
    console.log(item.langName);
    console.log(item.short);
})