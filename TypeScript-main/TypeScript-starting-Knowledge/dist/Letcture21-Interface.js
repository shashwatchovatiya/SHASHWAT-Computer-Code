"use strict";
// Interface is like type alice both are same 
// Object
const greeing = {
    name: "Shashwat",
    age: 19
};
const product13 = {
    name: "Dell Latitude-7590",
    price: 56000,
    quentity: 89
};
const product14 = {
    name: " Lenovo-5040",
    price: 46000,
    quentity: 80
};
const calculateTotalPrice = (product) => {
    const { price, quentity } = product;
    return price * quentity;
};
console.log(calculateTotalPrice(product13));
console.log(calculateTotalPrice(product14));
