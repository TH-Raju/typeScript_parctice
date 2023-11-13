"use strict";
// Array Function
// explicit vabe bole dilam string[]
/*
const createArray = (param: string): string[] => {
  return [param];
};

const result1 = createArray("Raj");

*/
const createArray = (param) => {
    return [param];
};
const result1 = createArray("Raj");
const result2 = createArray(true);
const result3 = createArray({ name: "BD" });
const createArray1 = (param1, param2) => {
    return [param1, param2];
};
const result4 = createArray1("Raj", "Pearl");
// Spread Operator
const crush5 = "Orchita";
const myInfo = {
    name: "Raj",
    age: 22,
};
// const newData = {...myInfo, crush5}
const addMyCrush = (param) => {
    const crush6 = "sporshia ";
    const newData = Object.assign(Object.assign({}, param), { crush6 });
    return newData;
};
const result5 = addMyCrush(myInfo);
result5.name;
// normal function
function createArray7(p1, p2) {
    return [p1, p2];
}
