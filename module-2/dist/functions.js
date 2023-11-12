"use strict";
// normal function
function add(n1, n2) {
    return n1 + n2;
}
// array function
const addArrow = (n1, n2) => {
    return n1 + n2;
};
// callback function
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((ar) => ar * ar);
// function in object
const person = {
    name: "Raju",
    balance: 5,
    addBalance(m) {
        console.log(`my new balance ${this.balance + m}`);
    },
};
