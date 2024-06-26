// Tuples delered
// readonly write because second time tuples not update or push the anny element
type PersonInfo = readonly [string, number, boolean]

const person1: PersonInfo = ["Shashwat", 19, true];
const person2: PersonInfo = ["Mitanshu", 19, true];
const person3: PersonInfo = ["Dhrumil", 18, false];


// creating function 

const displayDetails = (User: PersonInfo) => {
    const [name, age, isDrvinglicence] = User;
    console.log(`Name : ${name}, age : ${age} , Driving Licence : ${isDrvinglicence ? "Yes" : "No"}  `);

}

displayDetails(person1);
displayDetails(person2);
displayDetails(person3);



// Homework 1

type Ecommerce = readonly [
    name: string,
    pirce: number,
    quenty: number
]

const person101: Ecommerce = ["Means-Wear", 1100, 16];
const person102: Ecommerce = ["Womeans-Wear", 1300, 38];
const person103: Ecommerce = ["Kids-Wear", 1000, 67];

const ecommerceDisplay = (user: Ecommerce) => {
    const [name, price, quenty] = user

    console.log(`Product name : ${name} , Product Price  : ${price} , Product Quenty : ${quenty}`);
}

// console.log(ecommerceDisplay(person101));
// console.log(ecommerceDisplay(person102));
// console.log(ecommerceDisplay(person103));


ecommerceDisplay(person101);
ecommerceDisplay(person102);
ecommerceDisplay(person103);



//  HomeWork 2 
type SchoolMangement   =  readonly[string,[number,number,number,number]];

const student121:SchoolMangement = ["Shashwat",[99,89,87,96]];
const student122:SchoolMangement = ["Mitanshu",[93,82,74,93]];
const student123:SchoolMangement = ["Dhrumil",[70,82,80,91]];

const calculateAverage = (grad : [number,number,number,number]):number =>{
    const total = grad.reduce((acc ,curr)=>acc + curr ,0);
    return total/ grad.length;
}

const studentAverage =(student:SchoolMangement):number=>{
    return calculateAverage(student[1]);
}

console.log("Shashwat Average : " + studentAverage(student121));
console.log("Mitanshu Average : "  + studentAverage(student122));
console.log("Dhrumil Average : " + studentAverage(student123));

// HomwEork 3

type WeatherData = readonly[string,number,string]

const city1:WeatherData = ["Ahemdabad",45,"Hot"];
const city2:WeatherData = ["Aabu",30,"Cold"];
const city3:WeatherData = ["Surat",45,"Midume"];

const citys:WeatherData[] =[city1,city2,city3]
const displayWeather = () =>{
    citys.forEach(city => {
        const[CityName ,Temprature,Condition] =city;
        console.log(`${CityName} Temprature is ${Temprature}°C and its Condition is ${Condition}`);
        
    });
}

displayWeather();