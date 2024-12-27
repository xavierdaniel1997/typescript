enum loadingstatus {
    LOADING = "true",
    COMPLETED = 2,
    FAILED = "crash"
}

console.log(loadingstatus.LOADING)

interface CollegeOne{
    collegeName: string;
    zipCode: string | number;
}

interface HM{
    firstname: string;
    age: number;
}

let Sir: CollegeOne & HM = {collegeName: "ABC", zipCode: 456789, firstname: "lal", age: 60}

let college: CollegeOne = {collegeName: "ABC", zipCode: 456789}


type MyCollege = CollegeOne & HM;

let newStud: MyCollege = {collegeName: "ABC", zipCode: 456789, firstname: "lal", age: 60}



function getDetilas<T>(a: T):T{
    console.log(`in side the functions ${typeof(a)}`)
    return a;
}

console.log(getDetilas(33))
console.log(getDetilas("2"))
console.log(getDetilas([5, 7, "44"]))


interface ApersonDetails  {
    name: string;
    age: number;
    place: string;
    zipcode: number;
}

type PersonUpdated = {
    [k in keyof ApersonDetails] : string
} 

let newPersons: PersonUpdated = {name: 'Sam', age: "34", place: "kollam", zipcode: "6677"}


let datasOF: {name: string, age: number}[] = [{name: "lal", age: 23}, {name: "Arun", age: 56}]

let newAgeArr: number[] = datasOF.map((data) => data.age)

console.log(newAgeArr)


interface Biju{
    name: string;
    age: number;
    place?: string;
}

let userO: Readonly<Biju> = {
    name: "Babu",
    age: 33,
    place: "kollam"
}

let userO1: Pick<Biju, "age"> = {
    age: 34
}


