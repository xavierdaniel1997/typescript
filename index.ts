import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { height } from "@fortawesome/free-regular-svg-icons/faAddressBook";

let userName: string = "Brook Blue";
let zipCode: number = 34;
let isVerify: boolean = true;
let skills: string[] = ["js", "ts", "dsa"];
let count: number[] = [4, 53, 5];
let empArr: [] = [];
let userDetials: {first_name: string; last_name: string; age: number} = {
    first_name: 'Bob',
    last_name: 'marly',
    age: 45
};


const obj: { width:number; heigth: number} = { width: 10, heigth: 15 };
const area = obj.width * obj.heigth;
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