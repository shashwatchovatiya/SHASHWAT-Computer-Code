// ************************* Number **************************************

// Function create
function sum( a:number,b:number):number{
    return a + b;
}
// Fuction call
console.log(sum(90,67));

let x:number = 89;
let negVal:number = NaN ;


// ************************* String **********************************
// Task 1

// Write long text and then show only first 10 word
function truncateString(str:string, maxLength:number){
    if (str.length > maxLength) {
        return str.slice(0,maxLength) + "...."
    } else {
        return str
    }
}

const text = "Hii My name is shashwat"
const shortText = truncateString(text,10)


console.log(shortText);

// Task 2
//declare 2 varible type is string and then comapre them they both are same or not they same so show true and they are deffrent so show false 


var str1:string = "Shashwat"
var str2:string = "shashwat"

function check(str1:string,str2:string){
    if (str1==str2) {
       return true
    } else {
        return false
    }
} 
console.log(check(str1,str2));


// Task 3 
let phone:string = "Iphone15"
let price:number = 130000

let message:string = `The product ${phone} is priced at ${price} in doller `;

console.log(message)


// ******************* Boolen ********************************

// task 1
let p:number= 4;
let q:number = 8;
function Divid(n:number):boolean{
    if(n%p==0 && n%q==0)
        return true;
    else
        return false;
}

console.log(Divid(90));


// *******************BIG INT *****************************

let bignumber:bigint = 9007199254740991n
console.log(bignumber);

let anotherBignumber:bigint = 900719925474099198n
console.log(anotherBignumber);

// sum
let sum1:bigint = bignumber + anotherBignumber
console.log("Sum "+sum1);
// Multiplication
let sum2:bigint = bignumber * anotherBignumber
console.log("Sum2 "+sum2);
// Divided
let sum3:bigint =anotherBignumber / bignumber  
console.log("Sum3 "+sum3);
// Diffrence
let sum4:bigint = bignumber + anotherBignumber
console.log("Sum4 "+sum4);