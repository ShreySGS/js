// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "m@g.com",
    fullname: {
        userfullname: {
            firstname: "Son",
            lastname: "Goku"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const obj4 = Object.assign({}, obj1, obj2, obj3)//(target->{}, source)
// console.log(obj4);

const obj5 = {...obj1, ...obj2, ...obj3}
// console.log(obj5);

// database obj come in array
const users = [
    {
        id: 1,
        email: "g@gamil.com"
    },
    {
        id: 2,
        email: "h@gamil.com"
    },
    {
        id: 3,
        email: "i@gamil.com"
    }
]

// console.log(users[0].email); 0 indexing
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));// returns array with objkeys
// console.log(Object.values(tinderUser));// returns array with objvalues
// console.log(Object.entries(tinderUser));// returns key value paired arrays

// console.log(tinderUser.hasOwnProperty('isLoggeIn'));// returns bool

const course = {
    coursename: "javascript",
    price: "free",
    courseInstructor: "hitesh"
}

const {courseInstructor: instructor} = course
console.log(instructor);

// react
// const navbar = ({company}) => {//props.company

// }
// navbar(company = "hitesh")

// json(aps) //xml(complicated)

// {
//  "name": "goku",
//  "coursename": "js",
//  "price": "free"
// }
 
// [
//     {},
//     {},
//     {}
// ]