enum Roles{
    admin = "Admin",
    user = "User"
}

type LoginDetails = {
    name ?: string;
    email : string;
    password : string;
    role : Roles
}

const User1 = {
    email : "shashwat@gmail",
    password : "12sddaf",
    role : Roles.user
}

const User2 = {
    email : "jaymin@gmail",
    password : "12sddaf",
    role : Roles.admin
}

const User3 = {
    email : "vraj@gmail",
    password : "12sddaf",
    role : Roles.user
}

const isAdmin = (User:LoginDetails)=>{
    const {email,role} = User;

    return role === "Admin" ?`${email} is editing website  `: `${email} is not editing Website`
}

// Showing Output
console.log(isAdmin(User1));
console.log(isAdmin(User2));
console.log(isAdmin(User3));
