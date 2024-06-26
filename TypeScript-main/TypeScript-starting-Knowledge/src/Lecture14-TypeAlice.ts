type Details ={
    name : string;
    age :number;
    isStudent : boolean;
    studentId ?: number;
    address :{
        city : string;
        country : string;
    }
}

const student1:Details ={
    name: "Shashwat",
    age: 19,
    isStudent :true,
    studentId:116,
    address:{
        city: "Ahemdabad",
        country : "India"
    }
}

const studen21:Details ={
    name: "Anish",
    age: 19,
    isStudent :true,
    studentId:117,
    address:{
        city: "Ahemdabad",
        country : "India"
    }
}


const student3:Details ={
    name: "vaibhav",
    age: 19,
    isStudent :false,
    // studentId:116,
    address:{
        city: "Ahemdabad",
        country : "India"
    }
}

const student4:Details ={
    name: "Jaydeep",
    age: 19,
    isStudent :true,
    studentId:105,
    address:{
        city: "Ahemdabad",
        country : "India"
    }
}



console.log(student3.isStudent);
