"use strict";
// Simple array Methode
let fruit = ["apple", "Banana", "Mango", "Orange"];
let addFruit = fruit.push("Kiwi");
console.log(addFruit);
console.log(fruit);
let deleteFruit = fruit.pop();
console.log(deleteFruit);
console.log(fruit);
//******************************* Itreation type*******************
// Using for loop
console.log("Using for loop");
for (let index = 0; index < fruit.length; index++) {
    const element = fruit[index];
    console.log(element);
}
// Using for ....Of loop
console.log("Using for....Of loop");
for (const fr of fruit)
    console.log(fr);
// Using forEach 
console.log("************************Using ForEch Methode ********************");
fruit.forEach((curVal) => console.log(curVal));
// ************Using Map************
let arr = [1, 2, 3, 4, 5, 6];
let doubleData = arr.map((currentVal) => currentVal * 2);
console.log("*****************Using  map ***************");
console.log(doubleData);
// *****************Using  map with number convert string **************
const numberToString = arr.map((cuEel) => cuEel.toString());
console.log("Number to string");
console.log(numberToString);
// ****************Using filter ***********************
const numberToString1 = arr.map((cuEel) => cuEel > 3);
console.log("***********Filter *********");
console.log(numberToString1);
// Filtering  With Even number
const EvenNumber = arr.filter((evennum) => evennum % 2 === 0);
console.log("********** Even Number ***********");
console.log(EvenNumber);
// Filter with number
const filternumber = arr.filter((Filternum) => Filternum > 3);
console.log("************** Filter Number greter than 3 ***************");
console.log(filternumber);
// ******* Task for map ************
// Task 1 String to connvert Upper case
const string1 = ["Shashwat", "Dhrumil", "Mitanshu"];
const stringCun = string1.map((e) => e.toUpperCase());
console.log(stringCun);
// Task 2 find square
const string2 = [2, 3, 4, 5, 6, 7];
const square = string2.map((eve) => eve ** 2);
console.log("********* Conver squear ********");
console.log(square);
// ******* Task for Filter ************
//  Given an array of strings, create a new array that contains only the strings with a length greater than 4.
const names = ["Alice", "Bob", "Anna", "Andrew", "Alex", "Aman"];
const filtername = names.filter((greter) => greter.length > 4);
console.log("************** Print the greter than 4 length ****************");
console.log(filtername);
//  Given an array of strings, filter out the names that start with the letter "A".
const filterwithA = names.filter((A) => A.startsWith('A'));
console.log("********** Start with A name ********");
console.log(filterwithA);
