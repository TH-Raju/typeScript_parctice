"use strict";
// Ternary operator
var _a, _b;
const age = 22;
// if (age > 18) {
//   console.log("yes");
// } else {
//   console.log("No");
// }
const isAdult = age >= 18 ? "yes" : "no";
console.log(isAdult);
// Nullish Coeslancing Operator
const isAuthenticatedUser = null; // Null or undefiend
const userName = isAuthenticatedUser !== null && isAuthenticatedUser !== void 0 ? isAuthenticatedUser : "guest";
console.log(userName);
const manus1 = {
    name: "Raj",
    age: 22,
    address: {
        city: "No City",
        road: "No road",
    },
};
const home = (_b = (_a = manus1 === null || manus1 === void 0 ? void 0 : manus1.address) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : "No Home"; // Nullish Coeslancing operator
console.log({ home });
