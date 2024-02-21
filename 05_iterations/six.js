const arr = [1, 2, 3]

// const sum = arr.reduce( (acc, num) => {
//     console.log(acc, num);
//     return acc + num
// },0)
// OR
// const sum = arr.reduce( (acc, num) => acc + num, 0)

// console.log(sum);

const shoppingCart = [
    {
        course: "js",
        price: 2999
    },
    {
        course: "python",
        price: 999
    },
    {
        course: "java",
        price: 1999
    },
    {
        course: "ai",
        price: 4999
    }
]

const total = shoppingCart.reduce( (acc, currval) => (acc + currval.price), 0)
console.log(total);