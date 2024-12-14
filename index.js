"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userName = "Brook Blue";
var zipCode = 34;
var isVerify = true;
var skills = ["js", "ts", "dsa"];
var count = [4, 53, 5];
var empArr = [];
var userDetials = {
    first_name: 'Bob',
    last_name: 'marly',
    age: 45
};
var obj = { width: 10, heigth: 15 };
var area = obj.width * obj.heigth;
console.log(area);
var cars = {
    car_name: 'KODAKA',
    brand: 'Scoda',
    price: 23456,
    avlible: true,
    getCarDetails: function () {
        console.log(this.car_name + " " + this.brand + " " + this.price + " " + this.avlible);
    }
};
cars.getCarDetails();
var bikes = {
    model_name: 's1000rr',
    brand: "bMW",
    price: 1230000,
    isavlible: true,
    getBikeDetials: function () {
        console.log(this.model_name + " " + this.brand + " " + this.price + " " + this.isavlible);
    }
};
bikes.getBikeDetials();
// Union Operator ( | ) and Optional Operator ( ? ) ............................................
var datas = ["car", "bike", 45, "totaya", 567];
console.log("this is from the datas array: ", datas);
var student = {
    first_name: "Roy",
    age: "34"
};
var product = {
    product_name: 'shirt',
    product_id: 2432,
    price: 345,
    size: "M",
    inStock: true
};
function getProductDetials(product) {
    return product.product_name;
}
var result = getProductDetials(product);
console.log("from the frunctions", result);
var addSum = function (_a) {
    var a = _a.a, b = _a.b;
    return a + b;
};
var resAddSum = addSum({ a: 2, b: 5 });
console.log("this is the result of resAddSum : ", resAddSum);
