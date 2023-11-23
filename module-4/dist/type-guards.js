"use strict";
// keyof Guard
function add(para1, para2) {
    if (typeof para1 === 'number' && typeof para2 === 'number') {
        return para1 + para2;
    }
    else {
        return para1.toString() + para2.toString();
    }
}
let out = add('1', '2');
console.log(out);
let res = add(2, 4);
console.log(res);
function getUser(user) {
    if ('role' in user) {
        return `I'm an admin and my role is ${user.role}`;
    }
    else {
        return `I'm normal user`;
    }
}
const normalUser1 = { name: 'Mr.' };
const adminUser = { name: "Rj", role: 'admin' };
console.log(getUser(normalUser1));
console.log(getUser(adminUser));
// instanceof guard
class Animals {
    constructor(name, species) {
        this.name = name,
            this.species = species;
    }
    makeSound() {
        console.log(`I'm making sound`);
    }
}
class Dog extends Animals {
    constructor(name, species) {
        super(name, species);
    }
    makeBark() {
        console.log(`I'm Barking`);
    }
}
class Cat extends Animals {
    constructor(name, species) {
        super(name, species);
    }
    makeMiaw() {
        console.log(`I'm miwaw`);
    }
}
function getAnimal(animal) {
    if (animal instanceof Dog) {
        animal.makeBark();
    }
    if (animal instanceof Cat) {
        animal.makeMiaw();
    }
    else {
        animal.makeSound();
    }
}
const animal1 = new Dog('Lyann', "Dog"); //instance of dog
const animal2 = new Cat('Pussy', 'Cat'); // instance of cat
getAnimal(animal1);
getAnimal(animal2);
