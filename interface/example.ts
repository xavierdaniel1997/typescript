// Basic Interface

interface Employee {
    first_name: string;
    last_name: string;
    age: number;
    department: string;
}

const employee: Employee = {first_name: "john", last_name: "Deo", age: 23, department: "sales"};

// Optional Properties

interface Company {
    company_name: string;
    location: string;
    turnOver: number;
    CEO?: string;
}
const company: Company = {
    company_name: "AB&C",
    location: "USA",
    turnOver: 10000
}

// Function Interfaces

interface MathFun {
    (x: number, y: number) : number;
}

const addNum: MathFun = (a, b) => {
    return a + b;
}
const res = addNum(10, 10)
console.log(res)

// Extending Interfaces

interface Vehicle{
    brand: string;
}
interface Car extends Vehicle{
    model: string;
    year: number;
}

const myCar: Car = {
    brand: "Toyota",
    model: "innova",
    year: 2010,
}


// User Interface in class to make the multiple inhertance

interface Engine{
    engineType: string;
    startEngine(): void;
}

interface Wheeles{
    numberOfWheels: number;
    rotateWheels(): void;
}

class Bus implements Engine, Wheeles{
    color: string;
    engineType: string;
    numberOfWheels: number;

    constructor(color:string, engineTyep: string, numberOfWheels: number){
        this.color = color,
        this.engineType = engineTyep,
        this.numberOfWheels = numberOfWheels
    }

    startEngine(): void {
        console.log(`Starting the ${this.engineType} engine.`);
      }
    
      rotateWheels(): void {
        console.log(`Rotating ${this.numberOfWheels} wheels with a ${this.color} color`);
      }
    
      performAction(): void {
        this.startEngine();
        this.rotateWheels();
      }
}

const bus1 = new Bus("red", "Deseal", 6);
bus1.performAction()

