"use strict";
// Define a function with two generic type parameters, T and U
function add(A, B) {
    console.log(typeof A); // Log the type of the first parameter
    console.log(typeof B); // Log the type of the second parameter
}
// Call the function with different types of arguments
const result11 = add(56, "shashwat"); // T is inferred as number, U is inferred as string
const result12 = add("Rajat", 89); // T is inferred as string, U is inferred as number
console.log("Hiiii"); // Prints "Hiiii"
