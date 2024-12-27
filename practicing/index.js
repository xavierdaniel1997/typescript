var loadingstatus;
(function (loadingstatus) {
    loadingstatus["LOADING"] = "true";
    loadingstatus[loadingstatus["COMPLETED"] = 2] = "COMPLETED";
    loadingstatus["FAILED"] = "crash";
})(loadingstatus || (loadingstatus = {}));
console.log(loadingstatus.LOADING);
var Sir = { collegeName: "ABC", zipCode: 456789, firstname: "lal", age: 60 };
var college = { collegeName: "ABC", zipCode: 456789 };
var newStud = { collegeName: "ABC", zipCode: 456789, firstname: "lal", age: 60 };
function getDetilas(a) {
    console.log("in side the functions ".concat(typeof (a)));
    return a;
}
console.log(getDetilas(33));
console.log(getDetilas("2"));
console.log(getDetilas([5, 7, "44"]));
var newPersons = { name: 'Sam', age: "34", place: "kollam", zipcode: "6677" };
var datasOF = [{ name: "lal", age: 23 }, { name: "Arun", age: 56 }];
var newAgeArr = datasOF.map(function (data) { return data.age; });
console.log(newAgeArr);
