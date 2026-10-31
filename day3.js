// task - 1

const name = "Venkatesh";
const age = "23";
const city = "Chennai";
const role = "Frontend Developer"

console.log(`Hello, my name is ${name}.
I am ${age} years old.
I live in ${city}.
I am a ${role}.`);

// task - 2

const add = (a, b) => {
    console.log(a + b);
};

add(20, 30);

const subtract = (a, b) => {
    console.log(a - b)
}

subtract(20, 10)

const mutiply = (a, b) => {
    console.log(a * b)
}
mutiply(5, 10)

const divide = (a, b) => {
    console.log(a / b)
}
divide(10, 2)

// task - 3

const greet = (name, role = "Developer") => {
    console.log(`Hello ${name}, you are a ${role}`)
}
greet("Venkatesh", "Frontend Developer")

// task - 4 

const student = {name: "rahul", age: 25, course: "Mern", city: "Chennai"};

const Datas = ({name, age, course, city}) => {
    console.log(`Student: ${name}
age: ${age}
course: ${course}
city: ${city}`);
}

Datas(student)

// task - 5

const product = {name: "Laptop", price: 60000, quantity: 2};

const productData = ({name, price, quantity}) => {
    let total = price * quantity
    console.log(`${name}
Price: ${price}
Quantity: ${quantity}
Total: ${total}`)
}

productData(product)

// task - 6

const products1 = ["Laptop", "Mouse"];
const products2 = ["keyboard", "Monitor"];

const totalProduct = [...products1, ...products2]

console.log(totalProduct)

// task - 7 

const user = {name: "Rohit", age: "25", role: "Developer" }

const userUpdate = {...user, age: "26", role: "Senior Developer"}

console.log(`Original:
${user.name}
${user.age}
${user.role}
`)

console.log(`Updated :
${userUpdate.name}
${userUpdate.age}
${userUpdate.role}`)

// task - 8

const calculate = (...prices) => {
    let total = 0;
    for(const price of prices) {
        total += price;
    }
    return total;
}
console.log(calculate(100, 200))

// task - 9

const createUser = (name = "Guest", age = 18, city = "Unknown") => {
    console.log(`${name}
${age}
${city}`)
}

createUser("Venkatesh")

// task - 10

const userInfo = { name: "virat", age: 25, address: { city: "Chennai" }}


const getCity = () => {
    return userInfo.address?.city ?? "Unknown city"
}

console.log(getCity())

// task - 11

const users = [
    { name: "rahul", role: "Designer" },
    { name: "virat", role: "Developer" },
    { name: "hardik", role: "Tester" }
];

for (const userData of users) {
    const { name, role } = userData;
    console.log(`${name} - ${role}`);
}

// task - 12

const userName = "Samson";
const userAge = "30";
const userRole = "Developer";

const userInformation = {
    userName, userAge, userRole
}

console.log(userInformation)

// task - 13

const userDetail = {name: "Venkatesh", role: "Adim"};
const isLoggedIn = false;

const checkLogin = (userDetails) => {
    const {name, role} = userDetails;
    if(isLoggedIn){
        console.log(`Welcome ${name}
Role: ${role}`)
    }
    else {
        console.log(`Please Login`)
    }
}

checkLogin(userDetail)

// task - 14

const Product = { name: "Laptop", price: 60000, category: "Electronics"}

const getProductInfo = (getProductData) => {
    const  {name, price, category} = getProductData;
    console.log(`Product: ${name}
Price: ${price}
Category: ${category}`)
};

getProductInfo(Product)

const newProduct = {...Product,price: 65000}

console.log(`${newProduct.name}
Price: ${newProduct.price}
Category: ${newProduct.category}`)

// task - 15 

const userID = {name: "virat", age: 25, role: "Frontend Developer", adrress: {city: "Chennai"}}

const getUserName = (getName) => {
    const {name} = getName
    console.log(`${name}`)
}
getUserName(userID)

const getLocation = () => {
   console.log(userID.adrress?.city ?? "Unknown")
}

getLocation(userID)

const getUserMessage = (getUser) => {
    const {name, age, role } = getUser;
    console.log(`${name} is a ${age} years old ${role} from ${userID.adrress?.city ?? "Unknown"}`)
}

getUserMessage(userID)

const updateUser = (users) => {
    const update = {...users, age: 26, role: "Senior Developer"}
    console.log(`${update.name} is a ${update.age} year old ${update.role} from ${userID.adrress?.city ?? "Unknown"}`)
}

updateUser(userID)

const getUserData = [{name: "virat", age: 25, role: "Frontend Developer"},
    {name: "rohit", age: 26, role: "Backend Developer" }, 
    {name: "smith", age: 27, role: "tester"}
];

const printUsers = (getData) => {
    
    for(const userDatas of getData) {
        const {name, role} = userDatas;
        console.log(`${name} - ${role}`)
    }
}
printUsers(getUserData)