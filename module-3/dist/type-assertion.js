"use strict";
let emni;
emni = "Emni";
// jodi sudu emni. (dot) d tahle kono method pabo na
// emni.
// but type assertion kore bole dile ata ki type tahle methods pabo
emni.length;
function kgToGram(param) {
    if (typeof param === "string") {
        const value = parseFloat(param) * 1000;
        return `The Converted result is : ${value} gram`;
    }
    if (typeof param === "number") {
        const value = param * 1000;
        return value;
    }
}
const resultToBeNumber = kgToGram(1000);
const resultToBeString = kgToGram("2000");
console.log(resultToBeNumber);
