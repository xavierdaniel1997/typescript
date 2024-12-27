class One{
    name_one : string
    constructor(name_one: string){
        this.name_one = name_one
    }
    displayOne() : void{
        console.log(`From the class One : ${this.name_one}`)
    }
}

class Two extends One{
    name_two : string
    constructor(name_two: string, name_one: string){
        super(name_one);
        this.name_two = name_two;
    }
    displayTwo(): void {
        console.log(`From the class Two : ${this.name_one} ${this.name_two}`)
    }
}

class Three extends Two{
    name_three : string
    constructor(name_three: string, name_two: string, name_one: string){
        super(name_two, name_one);
        this.name_three = name_three;
    }

    displayThree() : void {
        console.log(`From the class Three last child ${this.name_one} ${this.name_two} ${this.name_three}`)
    }
}

const three = new Three("first_name", "second_name", "last_name");

three.displayOne();
three.displayTwo();
three.displayThree();