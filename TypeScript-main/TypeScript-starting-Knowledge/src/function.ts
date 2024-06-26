// Create palidrome function when that palidrom so returen true else false

const palidrome  = (pal:string):boolean=>{
    const mypal= pal.split("").reverse().join("")

    if (mypal === pal) {
        return true
    } else {
        return false
    }

}

console.log(palidrome("KANAK"));


// Task 1 Find the average

const claculateAverage=(num:number[])=>{
    if (num.length === 0 ) {
        console.log("Array is empty");
        return 0;
     }

     const sum = num.reduce((acc,curr)=>acc + curr,0)
     const average = sum/num.length
     return average;
}


const array:number[] = [78,6,66,34,45,3,32,2]
const averageResult = claculateAverage(array)
console.log("Averege : " + averageResult);
 
// Task 2 Find the maximum number

const FindMaxNumber = (arr:number[]):number=>{
    if(arr.length=== 0 ){
        return 0;
    }
    else{

    
    let max:number = arr[0] ;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >max) {
            max = arr[i];
        }
    }    
    
    return max;
}
}

const array1:number[] = [4,5,6,677,654,234,897]
let maxNumber:number = FindMaxNumber(array1)
console.log("maximum number " + maxNumber);


