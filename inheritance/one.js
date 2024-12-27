"use strict";
class One {
    constructor(name_one) {
        this.name_one = name_one;
    }
    displayOne() {
        console.log(`From the class One : ${this.name_one}`);
    }
}
class Two extends One {
    constructor(name_two, name_one) {
        super(name_one);
        this.name_two = name_two;
    }
    displayTwo() {
        console.log(`From the class Two : ${this.name_one} ${this.name_two}`);
    }
}
class Three extends Two {
    constructor(name_three, name_two, name_one) {
        super(name_two, name_one);
        this.name_three = name_three;
    }
    displayThree() {
        console.log(`From the class Three last child ${this.name_one} ${this.name_two} ${this.name_three}`);
    }
}
const three = new Three("first_name", "second_name", "last_name");
three.displayOne();
three.displayTwo();
three.displayThree();
