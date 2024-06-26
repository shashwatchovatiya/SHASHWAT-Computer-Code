"use strict";
// Object TS
// Creating Object for Personal details 
const Person = {
    name: "Shashwat",
    isStudent: true,
    age: 19,
    address: {
        city: "Ahemdabad",
        country: "India"
    }
};
// Show the Output
console.log(Person.isStudent);
const product12 = {
    name: "Dell Latitude-7590",
    price: 50000,
    quentity: 10
};
const calculateTotalPrices = (product) => {
    const { price, quentity } = product;
    return price * quentity;
};
console.log(calculateTotalPrices(product12));
