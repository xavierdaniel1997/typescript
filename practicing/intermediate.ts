// interface


interface Users {
    first_name: string;
    last_name: string;
    email: string;
    age: number;
}


let user1: Users = {
    first_name: "Biju",
    last_name: "Pole",
    email: "biju@gmail.com",
    age: 24
}

interface Employees extends Users {
    employeeId: number;
    department: string;
}

let employee1: Employees = {
    first_name: "Devin",
    last_name: "Carlos",
    email: "devinCarlos@gmail.in",
    age: 35,
    employeeId: 1245,
    department: "IT"
}

console.log('this is from the employees detials: ', employee1)

// Types (`type`)

type Vehicles = {
    engineType: string,
    model: number,
    price: number | string,
    typeOf: string
}

const zen: Vehicles = {
    engineType: "petrol",
    model: 2000,
    price: 45000,
    typeOf: "car"
}

// Key Utility Types in TypeScript

// Partial<Type>

interface UserEg1 {
    name: string;
    age: string | number;
    email: number;
}
let usereg1: Partial<UserEg1> = {
    name: "lalan"
}

type Samp1 = {
    name: string;
    age: number;
    email: string
}
let samp1: Partial<Samp1> = { name: "Tony" }

// Required<Type>

interface UserEg2 {
    name: string;
    age: number;
    email: string;
}
let userEg2: Required<UserEg2> = {
    name: "Roshne",
    age: 23,
    email: "rosh@gmail.com"
}

console.log("this is from the usereg2 : ", userEg2)

// Readonly<Type>

let userEg3: Readonly<UserEg2> = {
    name: "Basker",
    age: 33,
    email: "basker@gmail.com"
}
console.log(userEg3)
// userEg3.email = "basker123@gmail.com"; not possible to add new value like const

// console.log(userEg3)

// Pick<Type, Keys>

let user4: Pick<UserEg1, "name" | "age"> = {
    name: "Alan",
    age: 23
}

// Omit<Type, Keys>


interface Student {
    id: number;
    name: string;
    age: number;
    email: string;
    password: string;
}

const stud1: Omit<Student, "password"> = {
    id: 34342,
    name: "Anand",
    age: 23,
    email: "anand@gmail.com"
}

// Record<Keys, Type>

type ProductID = "p1" | "p2" | "p3";
type Stock = Record<ProductID, number>;

const stock: Stock = {
    p1: 100,
    p2: 200,
    p3: 300,
};

// Type Guards

// typeof

function getResult(word: number | string) {
    if (typeof word === "number") {
        console.log(`it's a number ${word}`)
    } else {
        console.log(`it's a word ${word}`)
    }
}

getResult(23);
getResult("hello")

// instanceof

class Circle {
    radius: number;
    constructor(radius: number) {
        this.radius = radius
    }

    getArea(): number {
        return Math.PI * this.radius ** 2;
    }
}
class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
}
function calculateArea(shape: Circle | Rectangle) {
    if (shape instanceof Circle) {
        console.log(`Circle Area: ${shape.getArea()}`);
    } else if (shape instanceof Rectangle) {
        console.log(`Rectangle Area: ${shape.getArea()}`);
    }
}
const myCircle = new Circle(5);
const myRectangle = new Rectangle(10, 20);

calculateArea(myCircle);
calculateArea(myRectangle);


// keyof

interface Person {
    name: string;
    age: number;
    email: string;
}

type personsKey = keyof Person;

function getPersonDetilas(persons: Person, key: personsKey): number | string {
    return persons[key]
}

let person: Person = {
    name: "albin",
    age: 33,
    email: "albin@gmail.com"
}

console.log(getPersonDetilas(person, "name"))
console.log(getPersonDetilas(person, "age"))
console.log(getPersonDetilas(person, "email"))


// Generic Keyword and Functions

function addItems<T>(val1: T) : T{
    return val1;
}

const res1 = addItems(45)
const res2 = addItems("hello")

// Mapped Types

type PersonDetials = {
    name: string;
    age: number;
    email: string;
}

let personOne : PersonDetials = {name: "Lalan", age: 23, email: "lalan@gmail.com"}

type PersonUpdate = {
    [k in keyof PersonDetials] : string;
}

let persontwo : PersonUpdate = {name: "Lal Jos", age: "33", email: "mrjos@gmail.com"}


// as const

const config = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
    environment: "production",
} as const;