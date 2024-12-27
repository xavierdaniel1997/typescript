// let abc: string | number = "hello world"


// abc = 123

// console.log(abc)


// function addItem(a: number, b: number) : number;
// function addItem(a: string, b: string) : string;
function addItem<T>(a: T): T{
    return a 
}

console.log(addItem(10));
console.log(addItem(`jjfkdjf`))