

type Student ={
    name: string;
    age:number;
    gender ?: string;
    greet: (country:string) => string;
} 

const student101:Student ={
    name : "Shashwat",
    age :19,
    gender : "Male",
    greet:(country :string ):string=>`My name ${student101.name} and My age ${student101.age} and i am from ${country} `
}


const intro : (student101:Student) => void = (student101:Student)=>{
    const {name,age} =student101;
    return `My name ${name} and My age ${age}`
}

console.log(intro(student101));
console.log(student101.greet("India"));

