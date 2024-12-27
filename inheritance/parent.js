"use strict";
class Parent {
    constructor(first_number, name_of) {
        this.first_number = first_number,
            this.name_of = name_of;
    }
    displayParent() {
        console.log(`this is from the parent class ${this.first_number} ${this.name_of}`);
    }
}
class Child extends Parent {
    constructor(first_number, second_number, name_of) {
        super(first_number, name_of);
        this.second_number = second_number;
    }
    displayChild() {
        console.log(`this is the result of child ${this.first_number} ${this.second_number}`);
    }
    addSum() {
        return this.first_number + this.second_number;
    }
}
const child = new Child(10, 20, "hello");
child.displayParent();
child.displayChild();
console.log(child.addSum());
