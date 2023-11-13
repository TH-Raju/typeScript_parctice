"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const makePromise = () => {
    return new Promise((resolve, reject) => {
        const data = "Data Fetched";
        if (data) {
            resolve(data);
        }
        else {
            reject("Failed to fetch");
        }
    });
};
const getPromiseData = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromise();
    return data;
});
// Using Boolean
const makePromise1 = () => {
    return new Promise((resolve, reject) => {
        const data = false;
        if (data) {
            resolve(data);
        }
        else {
            reject("Failed to fetch");
        }
    });
};
const getPromiseData1 = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromise1();
    return data;
});
// Using Object
const makePromise2 = () => {
    return new Promise((resolve, reject) => {
        const data = { data: "Data is Fetched" };
        if (data) {
            resolve(data);
        }
        else {
            reject("Failed to fetch");
        }
    });
};
const getPromiseData2 = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromise2();
    return data;
});
const makePromise3 = () => {
    return new Promise((resolve, reject) => {
        const data = { data: "Data is Fetched" };
        if (data) {
            resolve(data);
        }
        else {
            reject("Failed to fetch");
        }
    });
};
const getPromiseData3 = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromise3();
    return data;
});
const makePromise4 = () => {
    return new Promise((resolve, reject) => {
        const data = { data: "Data is Fetched" };
        if (data) {
            resolve(data);
        }
        else {
            reject("Failed to fetch");
        }
    });
};
const getPromiseData4 = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromise4();
    return data;
});
