"use strict";
// access-modifier and getter setter er motoi
//private public protected
class A {
    constructor(num) {
        this.num = num;
    }
}
class B extends A {
    constructor(num) {
        super(num);
    }
}
