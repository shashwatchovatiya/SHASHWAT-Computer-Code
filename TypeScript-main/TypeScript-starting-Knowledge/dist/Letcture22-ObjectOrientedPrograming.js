"use strict";
class StudentInfo {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}
const person123 = new StudentInfo("Shashawt", 19, ["reading", "coding"]);
const person124 = new StudentInfo("Vansh", 19, ["reading", "coding"]);
console.log(person123);
console.log(person124);
