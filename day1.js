// task - 1

let name = "Bala";
let age = 25;
let city = "Coimbatore";

console.log(`Name: ${name}
Age: ${25}
City: ${city}`)

// task - 2

let a = 20;
let b = 5;

console.log(`Addition: ${a+b}
Subtraction: ${a-b}
Multiplication: ${a*b}
Division: ${a/b}
Remainder: ${a%b}`)

// task - 3

let age1 = 15;

if (age1 >= 18){
    console.log(`Adult`)
}
else {
    console.log(`Minor`)
}

// task - 4

let number = 7;

if (number%2 === 0) {
    console.log(`Even`)
}
else {
    console.log(`Odd`)
}

// task - 5 

let number1 = -10;

if (number1 > 0) {
    console.log(`Positive`)
}
else if (number1 === 0) {
    console.log(`Zero`)
}
else {
    console.log(`Negative`)
}

// task - 6

let marks = 65;

if (marks >= 50) {
    console.log(`Pass`)
}
else {
    console.log(`Fail`)
}

// task - 7

var isLoggedIn = true;

if (isLoggedIn) {
    console.log(`Welcome User`)
}
else {
    console.log(`Please Login`)
}

// task - 8

var isLoggedIn = true;
let isAdmin = false;

if(isLoggedIn && isAdmin) {
    console.log(`Adim Dashboard`)
}
else if(isLoggedIn || isAdmin) {
    console.log(`User Dashboard`)
}
else {
    console.log(`Please Login`)
}

// task - 9 

let balance = 1000;
let price = 300;
let remainingBalance = balance - price;

if (balance >= price) {
    console.log(`Purchase successful
Remaining Balance: ${remainingBalance}`)
}
else {
    console.log(`Insufficient Balance`)
}

// task - 10 

let mark = 82;

if (mark >= 90 && mark <= 100) {
    console.log(`Grade: A+`)
}
else if(mark >= 75 && mark <= 89) {
    console.log(`Grade: A`)
}
else if(mark >= 60 && mark <= 74) {
    console.log(`Grade: B`)
}
else if(mark >= 50 && mark <= 59) {
    console.log(`Grade: C`)
}
else {
    console.log(`Grade: Fail`)
}