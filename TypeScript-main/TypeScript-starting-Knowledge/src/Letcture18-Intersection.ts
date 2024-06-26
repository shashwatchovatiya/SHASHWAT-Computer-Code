// Intersection

// creating Alice
type User = {
    name: string,
    age :number
}

// creating Alice
type MyLocation = {
    city : string,
    country : string
}

// Giving values

const user121:User = {name: "Shashwat",age : 19};
const LoacationOfUser:MyLocation = {city :"Ahemdabad",country : "India"}

// Difine Function 

const PersonalDetails = (user:User ,location:MyLocation):any =>{
    // return `My name is ${user.name} and i am living in ${location.city} City `
    return {...user,...location}
}

// Showing the all function

console.log(PersonalDetails(user121,LoacationOfUser));

// Using Intersection Output
const compleateData: User & MyLocation = PersonalDetails(user121,LoacationOfUser)
console.log(compleateData);


// Intersection Homework 

// Alice 1 

type User11 ={
    name : string,
    email : string
}

//  Alice 2
type Account = {
    accountId : number,
    accountType :string,
    accountBlance : number 
}

// Gvinig values
const bankEmploye101 = {name : "xyz",email: "xyz@gmail.com"}
const employe101Account = {accountId : 27579072531,accountType: "Saving Account", accountBlance : 150000}

// Difine Function

const combinedAccount = (user:User11 ,account : Account):any=>{
    return {...user,...account}
}
const employeallDetails:User11 & Account = combinedAccount(bankEmploye101,employe101Account)

console.log(employeallDetails);




