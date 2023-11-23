class Parent {
    name: string;
    age: number;
    address: string;
    constructor(
        name: string,
        age: number,
        address: string,
    ) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    makeSleep(hours: number): string {
        return `this ${this.name} will sleep for ${hours} hours`
    }
}

class Student extends Parent {

    constructor(
        public name: string,
        public age: number,
        public address: string
    ) {
        super(name, age, address);
    }
}

const stu1 = new Student('Raju', 22, 'Feni');
const result = stu1.makeSleep(2)
console.log(result);




// 2nd Inheritence


class Teacher extends Parent {

    designation: string;
    constructor(
        name: string,
        age: number,
        address: string,
        designation: string,
    ) {
        super(name, age, address)
        this.designation = designation;
    }
    takeClass(classs: number): string {
        return `This ${this.name} will take ${classs} class`
    }
}

const teacher1 = new Teacher('Rj', 22, 'BD', "CI")
const output = teacher1.takeClass(3)
console.log(output);

/* --------------------
    Self Practice
    --------------------- */

class Life {
    constructor(
        public ma: string,
        public baba: string,
        public wife: string,
    ) { }

    boysLife() {
        return `Boys Loves his ${this.ma}, ${this.baba} and his ${this.wife}`
    }
}

class Shoshur extends Life {
    shashuri: string;
    constructor(
        ma: string,
        baba: string,
        wife: string,
        shashuri: string,
    ) {
        super(ma, baba, wife)
        this.shashuri = shashuri
    }
    extraLove() {
        return (`Shoshur Loves his ${this.shashuri} also`)
    }
}

const lover3 = new Shoshur('amena', 'abdul', 'rokeya', 'jahanara')
const hisLove = lover3.boysLife()
const personalLove = lover3.extraLove()
console.log(hisLove, '\n', personalLove);

