//class er vitore j method thakbe tar somporke janbo bt tar full details jante parbo na atai abstraction

/* --------------------

Abstraction 2 vabe kora jay
1 - Interface
2 - Abstract Class

--------------------------*/

interface IVehicle {
    startEnginee(): void;
    stopEnginee(): void;
    move(): void;
}

class Vehicle implements IVehicle {
    constructor(
        public name: string,
        public brand: string,
        public model: number
    ) { }
    startEnginee(): void {
        console.log(`I'm starting Enginee`);
    }
    stopEnginee(): void {
        console.log(`I'm stoping Enginee`);
    }
    move(): void {
        console.log(`move right`);
    }
    test() {
        console.log(`I'm for testing purpose`);
    }
}

const vehicle1 = new Vehicle('Car', 'toyota', 2022);

//abstraction class


abstract class VehicleClass {
    constructor(
        public name: string,
        public brand: string,
        public model: number
    ) { }
    abstract startEnginee(): void
    abstract stopEnginee(): void
    move(): void {
        console.log(`move right`);
    }
    test() {
        console.log(`I'm for testing purpose`);
    }
}

class Car extends VehicleClass {
    startEnginee(): void {
        console.log(`I'm starting Enginee`);
    }
    stopEnginee(): void {
        console.log(`I'm stoping Enginee`);
    }
}



