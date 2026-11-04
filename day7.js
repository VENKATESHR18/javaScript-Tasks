// task - 1

const marks = 75;

const checkResult = new Promise((resolve, reject) => {
  if (marks >= 35) {
    resolve("Student Passed");
  } else {
    reject("Student Failed");
  }
});

checkResult
  .then((result) => {console.log(result);})
  .catch((error) => {console.log(error);});

// task - 2

const username = "admin";
const password = "1234";

const login = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (username === "admin" && password === "1234") {
      resolve("Login Successful");
    } else {
      reject("Invalid Credentials");
    }
  }, 2000);
});

login
  .then((result) => {console.log(result);})
  .catch((error) => {console.log(error);});

// task - 3

const productPrice = 5000;

const calculateDiscount = new Promise((resolve, reject) => {
  if (productPrice <= 0) {
    reject("Invalid Product Price");
  } else {
    const discount = productPrice * 10 / 100;
    const finalPrice = productPrice - discount;

    resolve(finalPrice);
  }
});

calculateDiscount
  .then((price) => {console.log("Discounted Price:", price);})
  .catch((error) => {console.log(error);})
  .finally(() => {console.log("Price Calculation Completed");});

// task - 4

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    return response.json();
  })
  .then((users) => {
    users.forEach((user) => {console.log(user.name);});})
  .catch((error) => {console.log("Error:", error.message); });

// task - 5

const getUsers = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const users = await response.json();

    users.forEach((user) => {
      console.log("Name:", user.name);
      console.log("Email:", user.email);
      console.log("Phone:", user.phone);
      console.log("-------------------");
    });

  } catch (error) {console.log("Error:", error.message);}};

getUsers();

// task - 6

const getProduct = async () => {
  try {
    const response = await fetch(
      "https://dummyjson.com/products/1"
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const product = await response.json();

    console.log("Product Title:", product.title);
    console.log("Product Price:", product.price);
    console.log("Product Category:", product.category);

  } catch (error) { console.log("Error:", error.message);}};

getProduct();