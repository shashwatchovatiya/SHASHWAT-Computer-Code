"use strict";
// Intersection
// Giving values
const user121 = { name: "Shashwat", age: 19 };
const LoacationOfUser = { city: "Ahemdabad", country: "India" };
// Difine Function 
const PersonalDetails = (user, location) => {
    // return `My name is ${user.name} and i am living in ${location.city} City `
    return { ...user, ...location };
};
// Showing the all function
console.log(PersonalDetails(user121, LoacationOfUser));
// Using Intersection Output
const compleateData = PersonalDetails(user121, LoacationOfUser);
console.log(compleateData);
// Gvinig values
const bankEmploye101 = { name: "xyz", email: "xyz@gmail.com" };
const employe101Account = { accountId: 27579072531, accountType: "Saving Account", accountBlance: 150000 };
// Difine Function
const combinedAccount = (user, account) => {
    return { ...user, ...account };
};
const employeallDetails = combinedAccount(bankEmploye101, employe101Account);
console.log(employeallDetails);
