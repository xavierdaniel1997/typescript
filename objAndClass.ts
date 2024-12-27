class Person{
    first_name: string;
    last_name: string;
    age: number;

    constructor(first_name: string, last_name: string, age: number){
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }

    introduce() : void {
        console.log(`Hi I am ${this.first_name} ${this.last_name} and i am ${this.age}`)
    }
}


const person1 = new Person("Alan", "Jose", 34);
person1.introduce()