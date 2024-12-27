export class Vehicle {
    constructor(brand_name, model) {
        this.brand_name = brand_name;
        this.model = model;
    }
    displayVehicle() {
        console.log(`Vehicle Detials : ${this.brand_name} ${this.model}`);
    }
}
