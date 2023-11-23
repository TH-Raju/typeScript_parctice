"use strict";
class Parent {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours) {
        return `this ${this.name} will sleep for ${hours} hours`;
    }
}
class Student extends Parent {
    constructor(name, age, address) {
        super(name, age, address);
        this.name = name;
        this.age = age;
        this.address = address;
    }
}
const stu1 = new Student('Raju', 22, 'Feni');
const result = stu1.makeSleep(2);
console.log(result);
// 2nd Inheritence
class Teacher extends Parent {
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
    takeClass(classs) {
        return `This ${this.name} will take ${classs} class`;
    }
}
const teacher1 = new Teacher('Rj', 22, 'BD', "CI");
const output = teacher1.takeClass(3);
console.log(output);
/* --------------------
    Self Practice
    --------------------- */
class Life {
    constructor(ma, baba, wife) {
        this.ma = ma;
        this.baba = baba;
        this.wife = wife;
    }
    boysLife() {
        return `Boys Loves his ${this.ma}, ${this.baba} and his ${this.wife}`;
    }
}
class Shoshur extends Life {
    constructor(ma, baba, wife, shashuri) {
        super(ma, baba, wife);
        this.shashuri = shashuri;
    }
    extraLove() {
        return (`Shoshur Loves his ${this.shashuri} also`);
    }
}
const lover3 = new Shoshur('amena', 'abdul', 'rokeya', 'jahanara');
const hisLove = lover3.boysLife();
const personalLove = lover3.extraLove();
console.log(hisLove, '\n', personalLove);
