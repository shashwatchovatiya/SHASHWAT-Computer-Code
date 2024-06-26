"use strict";
var Roles;
(function (Roles) {
    Roles["admin"] = "Admin";
    Roles["user"] = "User";
})(Roles || (Roles = {}));
const User1 = {
    email: "shashwat@gmail",
    password: "12sddaf",
    role: Roles.user
};
const User2 = {
    email: "jaymin@gmail",
    password: "12sddaf",
    role: Roles.admin
};
const User3 = {
    email: "vraj@gmail",
    password: "12sddaf",
    role: Roles.user
};
const isAdmin = (User) => {
    const { email, role } = User;
    return role === "Admin" ? `${email} is editing website  ` : `${email} is not editing Website`;
};
// Showing Output
console.log(isAdmin(User1));
console.log(isAdmin(User2));
console.log(isAdmin(User3));
