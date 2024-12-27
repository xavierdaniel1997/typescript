// **Basic Types**
//   `string`, `number`, `boolean`, `array`, `object`, `tuple`.
//   Read-only properties and `const`.


let first_name: string = "John";
let age: number = 23;
let isVerified: boolean = true;
let skills: string[] = ["TS", "JS", "DSA"];
let emptySkill: [] = [];
let count: number[] = [1, 4, 6, 3];
let mixedArr: (string | number)[] = ["tree", 25, "DDS", 3]
let obj : {name: string, age: number, place: string} = {name: "joy", age: 34, place: "UAE"};
// Defineing a tuple
let person5:[string, number, boolean] = ["hello", 345, true]



//Functions in typescript

function addNumbers(a: number, b: number) : number {
    return a + b;
}
let num1 = 10;
let num2 = 40;
console.log(addNumbers(num1, num2))

function addStrings(name: string = "robin"){
    return `hello ${name}`
}

console.log(addStrings())
console.log(addStrings("Alice"))


// Enums in TypeScript

enum currentStatus {
    PENDING = 1,
    SUCCESS,
    FAILED
}

console.log(currentStatus.PENDING)
console.log(currentStatus.SUCCESS)
console.log(currentStatus.FAILED)


// Union and Intersection Types

// union

type ID = string | number;

let userId : ID = "adf33534";
console.log(userId)
userId = 23;
console.log(userId)

// intersection

interface Cars {
    brand: string;
    color: string;
}

interface Electric {
    batteryLife: number;
}

let myCar1: Cars & Electric = {
    brand: 'MG',
    color: 'white',
    batteryLife: 100000, 
};

console.log(myCar1);

// Type Assertions vs Type Casting

interface User {
    name: string;
    id: number;
}

let user = {} as User;

user.name = "Rocky";
user.id = 1324245;

console.log("this is frm the eg type assertion : ", user)


// type casting

let ageis = "23";
console.log("my age is : ",typeof(ageis) , ageis)
let convertAge = Number(ageis)
console.log("my age is : ",typeof(convertAge) , convertAge)




