"use strict";
class Animal {
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`);
    }
}
const dog = new Animal('Rock', 'dog ', 'Ghew Ghew');
const cat = new Animal("Pussy", 'Cat', "Mew mew");
dog.makeSound();
cat.makeSound();
// Own Practice
class Loveriya {
    constructor(bf, gf) {
        this.bf = bf;
        this.gf = gf;
    }
    lover() {
        console.log(`${this.bf} Loves ${this.gf}`);
    }
}
const lover1 = new Loveriya('Raju', 'Taka');
lover1.lover();
