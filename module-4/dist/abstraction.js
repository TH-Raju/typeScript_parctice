"use strict";
//class er vitore j method thakbe tar somporke janbo bt tar full details jante parbo na atai abstraction
class Vehicle {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    startEnginee() {
        console.log(`I'm starting Enginee`);
    }
    stopEnginee() {
        console.log(`I'm stoping Enginee`);
    }
    move() {
        console.log(`move right`);
    }
    test() {
        console.log(`I'm for testing purpose`);
    }
}
const vehicle1 = new Vehicle('Car', 'toyota', 2022);
//abstraction class
class VehicleClass {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    move() {
        console.log(`move right`);
    }
    test() {
        console.log(`I'm for testing purpose`);
    }
}
class Car extends VehicleClass {
    startEnginee() {
        console.log(`I'm starting Enginee`);
    }
    stopEnginee() {
        console.log(`I'm stoping Enginee`);
    }
}
