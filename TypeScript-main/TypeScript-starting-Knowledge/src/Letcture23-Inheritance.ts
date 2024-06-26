class StudentInfo1{
    name :string;
    age:number;
    hobbies :string[] ;


    constructor(name:string,age:number,hobbies:string[]){
        this.name =name;
        this.age =age;
        this.hobbies = hobbies
    }

    introduce():string{
        return `HII I AM ${this.name} . I AM ${this.age} YEARS OLD & I LOVE ${this.hobbies.join(",")}`
    }
}

const person125:StudentInfo1 = new StudentInfo1("Shashawt",19,["reading","coding"])
const person126:StudentInfo1 = new StudentInfo1("Rajat",19,["reading","coding"])

console.log(person123);
console.log(person124);