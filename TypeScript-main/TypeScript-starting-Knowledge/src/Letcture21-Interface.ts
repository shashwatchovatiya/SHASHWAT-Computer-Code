// Interface is like type alice both are same 

// Here writing example of Intreface

// interface
interface Greeks {
    name: string;
    age: number;
}

// Object
const greeing: Greeks ={
    name : "Shashwat",
    age : 19
}

// Task 

interface Products12  {
    name:string;
    price : number ;
    quentity :number;
}
const product13:Products12 ={
    name: "Dell Latitude-7590",
    price: 56000,
    quentity :89
}

const product14:Products12 ={
    name: " Lenovo-5040",
    price: 46000,
    quentity :80
}
const calculateTotalPrice = (product:Products12)=>{
    const {price,quentity} = product;
    return price * quentity
}
console.log(calculateTotalPrice(product13));
console.log(calculateTotalPrice(product14));
