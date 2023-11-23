class Animal {
    constructor(
        public name: string,
        public species: string,
        public sound: string
    ) { }

    public makeSound() {
        console.log(`The ${this.name} says ${this.sound}`);
    }
}

const dog = new Animal('Rock', 'dog ', 'Ghew Ghew');
const cat = new Animal("Pussy", 'Cat', "Mew mew")

dog.makeSound()
cat.makeSound()


// Own Practice

class Loveriya {
    constructor(
        public bf: string,
        public gf: string,
    ) { }
    public lover() {
        console.log(`${this.bf} Loves ${this.gf}`);

    }
}

const lover1 = new Loveriya('Raju', 'Taka')
lover1.lover()