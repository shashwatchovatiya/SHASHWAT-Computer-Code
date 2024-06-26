class StudentInfo{
    name :string;
    age:number;
    hobbies :string[] ;


    constructor(name:string,age:number,hobbies:string[]){
        this.name =name;
        this.age =age;
        this.hobbies = hobbies
    }
}

const person123:StudentInfo = new StudentInfo("Shashawt",19,["reading","coding"])
const person124:StudentInfo = new StudentInfo("Vansh",19,["reading","coding"])

console.log(person123);
console.log(person124);

