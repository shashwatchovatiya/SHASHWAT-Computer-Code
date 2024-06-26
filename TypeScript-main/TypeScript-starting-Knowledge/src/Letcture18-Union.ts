// Create the funtion that take many arrgumnet and many attributes value using union


// Union symbol in typeScript is " | "

const InputValue = (value : number | string):number | string  =>{
    if (typeof value === "number" ) {
        return value * 2 
    } else if(typeof value === "string" ) {
        return value.toUpperCase()
    }else{
        throw new Error("Invalid");
        
    }
} 

console.log(InputValue(12));
console.log(InputValue("Shashwat"));

//  Union HomeWork 1

const HomeworkInput =(value : number | string | boolean):number | string | boolean =>{
    if(typeof value === "number"){
        return "$"+ value.toFixed(2)
    }
    else if(typeof value === "boolean"){
        return value == true ? "Yes" : "No" 
    }else if(typeof value === "string"){
        return value.charAt(0).toUpperCase()+value.slice(1)
    }else{
        throw new Error("Invaild")
    }
}

console.log(HomeworkInput(23));
console.log(HomeworkInput(true));
console.log(HomeworkInput(false));
console.log(HomeworkInput("nrcrew"));

