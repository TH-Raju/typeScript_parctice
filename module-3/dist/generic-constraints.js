"use strict";
// type ta kmn hobe ta force kore bole deya like extends
const addCrushMind = (info) => {
    const crush7 = "Mukta";
    const crushMind = Object.assign(Object.assign({}, info), { crush7 });
    return crushMind;
};
const info = {
    name: "Raj",
    age: 200,
};
const result6 = addCrushMind(info);
