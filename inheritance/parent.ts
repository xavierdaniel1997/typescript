class Parent{
    first_number: number;
    name_of: string;

    constructor(first_number: number, name_of: string){
        this.first_number = first_number,
        this.name_of = name_of
    }

    displayParent():void{
        console.log(`this is from the parent class ${this.first_number} ${this.name_of}`)
    }
}

class Child extends Parent{
    second_number : number;

    constructor(first_number: number, second_number: number, name_of: string){
        super(first_number, name_of)
        this.second_number = second_number;
    }

    displayChild():void{
        console.log(`this is the result of child ${this.first_number} ${this.second_number}`)
    }

    addSum():number{
        return this.first_number + this.second_number;
    }
}

const child = new Child(10, 20, "hello")

child.displayParent();
child.displayChild();
console.log(child.addSum())