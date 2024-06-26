// Object TS


// Creating Object for Personal details 

const Person :{name: string;isStudent : boolean;age:number;address :{city:string,country :string}}= {
    name :"Shashwat",
    isStudent : true,
    age : 19,
    address: {
        city : "Ahemdabad",
        country : "India"
    }
};

// Show the Output

console.log(Person.isStudent);


// Task 1
type Products = {
    name:string;
    price : number ;
    quentity :number;
}
const product12:Products  ={
    name: "Dell Latitude-7590",
    price: 50000,
    quentity :10
}

const calculateTotalPrices = (product:Products)=>{
    const {price,quentity} = product;
    return price * quentity
}
console.log(calculateTotalPrices(product12));
