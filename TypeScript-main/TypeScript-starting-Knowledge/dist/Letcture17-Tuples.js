"use strict";
const person1 = ["Shashwat", 19, true];
const person2 = ["Mitanshu", 19, true];
const person3 = ["Dhrumil", 18, false];
// creating function 
const displayDetails = (User) => {
    const [name, age, isDrvinglicence] = User;
    console.log(`Name : ${name}, age : ${age} , Driving Licence : ${isDrvinglicence ? "Yes" : "No"}  `);
};
displayDetails(person1);
displayDetails(person2);
displayDetails(person3);
const person101 = ["Means-Wear", 1100, 16];
const person102 = ["Womeans-Wear", 1300, 38];
const person103 = ["Kids-Wear", 1000, 67];
const ecommerceDisplay = (user) => {
    const [name, price, quenty] = user;
    console.log(`Product name : ${name} , Product Price  : ${price} , Product Quenty : ${quenty}`);
};
// console.log(ecommerceDisplay(person101));
// console.log(ecommerceDisplay(person102));
// console.log(ecommerceDisplay(person103));
ecommerceDisplay(person101);
ecommerceDisplay(person102);
ecommerceDisplay(person103);
const student121 = ["Shashwat", [99, 89, 87, 96]];
const student122 = ["Mitanshu", [93, 82, 74, 93]];
const student123 = ["Dhrumil", [70, 82, 80, 91]];
const calculateAverage = (grad) => {
    const total = grad.reduce((acc, curr) => acc + curr, 0);
    return total / grad.length;
};
const studentAverage = (student) => {
    return calculateAverage(student[1]);
};
console.log("Shashwat Average : " + studentAverage(student121));
console.log("Mitanshu Average : " + studentAverage(student122));
console.log("Dhrumil Average : " + studentAverage(student123));
const city1 = ["Ahemdabad", 45, "Hot"];
const city2 = ["Aabu", 30, "Cold"];
const city3 = ["Surat", 45, "Midume"];
const citys = [city1, city2, city3];
const displayWeather = () => {
    citys.forEach(city => {
        const [CityName, Temprature, Condition] = city;
        console.log(`${CityName} Temprature is ${Temprature}°C and its Condition is ${Condition}`);
    });
};
displayWeather();
