"use strict";
const student101 = {
    name: "Shashwat",
    age: 19,
    gender: "Male",
    greet: (country) => `My name ${student101.name} and My age ${student101.age} and i am from ${country} `
};
const intro = (student101) => {
    const { name, age } = student101;
    return `My name ${name} and My age ${age}`;
};
console.log(intro(student101));
console.log(student101.greet("India"));
