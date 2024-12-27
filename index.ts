

let userName: string = "Brook Blue";
let zipCode: number = 34;
let isVerify: boolean = true;
let skillsa: string[] = ["js", "ts", "dsa"];
let counta: number[] = [4, 53, 5];
let empArr: [] = [];
let userDetials: {first_name: string; last_name: string; age: number} = {
    first_name: 'Bob',
    last_name: 'marly',
    age: 45
};


const obja: { width:number; heigth: number} = { width: 10, heigth: 15 };
const area = obja.width * obja.heigth;
console.log(area)



// Interface....................................................................................

interface Detials{
    car_name : string;
    brand: string;
    price: number;
    avlible: boolean;
    getCarDetails: () => void
}

const cars : Detials = {
    car_name: 'KODAKA',
    brand: 'Scoda',
    price: 23456,
    avlible: true,
    getCarDetails(){
        console.log(this.car_name + " " + this.brand + " " + this.price + " " + this.avlible)
    }
}

cars.getCarDetails()


// Type...........................................................................................

type BikeDetials = {
    model_name: string;
    brand: string;
    price: number;
    isavlible: boolean;
    getBikeDetials: () => void;
}

const bikes : BikeDetials = {
    model_name: 's1000rr',
    brand: "bMW",
    price: 1230000,
    isavlible: true,
    getBikeDetials(){
        console.log(this.model_name + " " + this.brand + " " + this.price + " " + this.isavlible)
    }
}

bikes.getBikeDetials();


// Union Operator ( | ) and Optional Operator ( ? ) ............................................

let datas: (string | number)[] = ["car", "bike", 45, "totaya", 567]

console.log("this is from the datas array: ", datas)


type Student = {
    first_name: string;
    last_name?: string;
    age: number | string;
}

const student : Student = {
    first_name: "Roy",
    age: "34"
}

// Functions .................................................................................

type items = {
    product_name: string;
    product_id: number;
    price: number;
    size: number | string;
    inStock: boolean;
}

const product: items = {
    product_name: 'shirt',
    product_id: 2432,
    price: 345,
    size: "M",
    inStock: true
}

function getProductDetials(product: items){
    return product.product_name
}

const result = getProductDetials(product)
console.log("from the frunctions" ,result)

const addSum = ({a, b}: {a: number, b: number}): number => {
    return a + b;
}

const resAddSum = addSum({a: 2, b: 5})
console.log("this is the result of resAddSum : ", resAddSum)


// Named Type...................................................................................


type StatusType = "pending" | "completed" | "failded";

let statusa : StatusType = "pending";


// Function Overloading

function add(num1: number | string, num2: number | string) : number | string {
    if(typeof num1 === 'string' || typeof num2 === 'string'){
        return num1 + " " + num2;
    }
    return num1 + num2;
}

add(2, 2) // 4
add("2", "2") // 22

// from the above code it very defficult to write code like this because we are reparting the code many times to solve this the Function Overloading come into picture.

function add1(num1: string, num2: string) : string;
function add1(num1: number, num2: number) : number;
function add1(num1: any, num2: any) : any {
    return num1 + num2 ;
}

add1(2, 4);
add1("2", "4");



// Generics.....................................................................................

function getAge<T>(age: T): T{
    return age;
}
getAge<string>("29");
getAge<number>(30);

type UserDetials = {
    first_name: string;
    last_name: string;
    age: number;
    isVerified: boolean;
}
const userDetial: UserDetials = {
    first_name: "Thomas",
    last_name: "P T",
    age: 34,
    isVerified: false,
}

type AdminDetials = {
    user_name: string;
    designation: string;
    role: string;
    isVerified: boolean;
    id: number;
}
const adminDetial: AdminDetials = {
    user_name: "Ribin",
    designation: "1st offeser",
    role: "admin",
    isVerified: true,
    id: 1324
}

const findDetials = <T>(detials: T): T => {
    console.log("this is in side the findDetials res eg of generics :", detials);
    return detials;
}
// const findDetials = <T>(detials: T): T => {
//     console.log(detials); // Log the details
//     return detials;       // Return the details
// };

const findDetialsUser = findDetials<UserDetials>(userDetial)
const findDetialsAdmin = findDetials<AdminDetials>(adminDetial)

function genericsDemo<T>(num: T): T{
    return num;
}

console.log("from the genericsDemo", genericsDemo<number>(45));
console.log("from the genericsDemo is", genericsDemo<string>("55"));


