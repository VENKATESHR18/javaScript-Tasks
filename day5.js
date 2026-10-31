// task - 1

const numbers = [10, 20, 30, 40]

const checkNumber = numbers.some((num) => num > 35)
console.log(checkNumber)

// task - 2

const marks = [50, 60, 70, 80, 93]

const checkMark = marks.every((mark) => mark > 50)
console.log(checkMark)

// task - 3

const roles = ["adim", "manager", "developer", "tester"]

const currentRole = "adim"
const checkRole = roles.includes(currentRole)
console.log(checkRole)

// task - 4

const salary = [50000, 30000, 40000, 50000, 60000]

const totalSalary = salary.reduce((sum, sal) => {
    return sum + sal
}, 0)
console.log(totalSalary)

// task - 5

const cart = [{product: "laptop", price: 100000, quantity: 2},
    {product: "mobile", price: 80000, quantity: 1},
    {product: "earphones", price: 25000, quantity: 2},
    {product: "tablet", price: 40000, quantity: 1}
]

const totalPrice = cart.reduce((price, item) => {
    return price + (item.price * item.quantity)
}, 0)
console.log(totalPrice)

// task - 6

//const salary = [50000, 30000, 40000, 50000, 60000]

const filterSalary = salary.filter((sal) => sal > 30000) 
console.log(filterSalary)

// task - 7

const student = [{id: 1, name: "rahul"}, {id: 2, name: "virat"}, {id: 3, name: "rohit"}]

const checkID = student.find((students) => students.id === 2)
console.log(checkID)

// task - 8 

//const student = [{id: 1, name: "rahul"}, {id: 2, name: "virat"}, {id: 3, name: "rohit"}]

const checkIndex = student.findIndex((students) => students.id === 3)
console.log(checkIndex)

// task - 9

// const cart = [{product: "laptop", price: 100000, quantity: 2},
//     {product: "mobile", price: 80000, quantity: 1},
//     {product: "earphones", price: 25000, quantity: 2},
//     {product: "tablet", price: 40000, quantity: 1}
// ]

const ascending = cart.sort((a,b) => a.price - b.price)
console.log(ascending)

// task - 10

const employee = [{id: 101, name: "kohli"}, 
    {id: 102, name: "rohit"}, 
    {id: 103, name: "smith"}, 
    {id: 104, name: "kane"}, 
    {id: 105, name: "root"}
]

const selectName = employee.map((emp) => emp.name)
console.log(selectName)