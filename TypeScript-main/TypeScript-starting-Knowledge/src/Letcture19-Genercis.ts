// This is the simple union trick

/* const LogandReturn = (value : number | string):number | string  =>{
    if (typeof value === "number" ) {
        return value * 2 
    } else if(typeof value === "string" ) {
        return value.toUpperCase()
    }else{
        throw new Error("Invalid");
        
    }
} 

console.log(LogandReturn(12));
console.log(LogandReturn("Shashwat")); */
// console.log(LogandReturn(true));

// Now we using Genercis 
// in Generics  in the <> we can any word difine for using Genrcis

const LogandReturn1 = <Type>(values : Type):Type=>{
    return values ;
}
const numberResult =LogandReturn1(13);
const Stringresult = LogandReturn1("Shashwat");
const boolen = LogandReturn1(true);

console.log(numberResult);
console.log(Stringresult);
console.log(boolen);


// HomeWork 1

const addingvalues = <Type>(a:Type , b: Type):Type=>{
    if (typeof a=== "number" && typeof b === "number") {
        return a + b as any;
    } else if(typeof a==="string" && typeof b === "string") {
        return a + b as any ;
    }else{
        throw Error("Values botha are not match");
    }
};

const result1 = addingvalues(5 , 10)
const result2 = addingvalues("Hello","World");
// const result3 = addingvalues("hello",09);

console.log(result1);
console.log(result2);



