function calculate(a: number, b: number) : number;
function calculate(a: string, b: string) : string;
function calculate(a: any, b: any) : any {
    return a + b;
}

console.log(calculate(10, 20));
console.log(calculate("Hello", "Roy"));