import { Vehicle } from "./vehicle";
class Car extends Vehicle {
    constructor(brand_name, model, seatCapacity, fuelType) {
        super(brand_name, model);
        this.seatCapacity = seatCapacity;
        this.fuelType = fuelType;
    }
    displayCarDetails() {
        console.log(`Car Details ${this.brand_name} ${this.model} ${this.seatCapacity} ${this.fuelType}`);
    }
}
const car1 = new Car("Totoya", "Corolla", 4, "Petrol");
car1.displayVehicle();
car1.displayCarDetails();
