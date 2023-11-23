// polymorphism = onk rup

class Person {
    takeNap(): void {
        console.log(`I'm sleeping 8 hour a day`);
    }
}

class Students extends Person {
    takeNap(): void {
        console.log(`I'm sleeping 10 hour a day`);
    }
}

class Developer extends Person {
    takeNap(): void {
        console.log(`I'm sleeping 5 hour a day`);
    }
}

function getNap(param: Person) {
    param.takeNap()
}

const person1 = new Person()
const person2 = new Students()
const person3 = new Developer()
getNap(person1)
getNap(person2)
getNap(person3)



/* ------------
Another Example
--------------*/

class Shape {
    getArea(): number {
        return 0
    }
}


// area -> pi * r**2
class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
        super()
        this.height = height,
            this.width = width
    }
    getArea(): number {
        return this.width * this.height
    }
}

function getAreaOfShape(para: Shape) {
    console.log(para.getArea());
}


getAreaOfShape(new Circle(10))
getAreaOfShape(new Rectangle(8, 6))