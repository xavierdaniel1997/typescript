import { Vehicle } from "./vehicle";

class Car extends Vehicle{
    seatCapacity: number;
    fuelType: string;

    constructor(brand_name:string, model: string, seatCapacity: number, fuelType: string){
        super(brand_name, model);
        this.seatCapacity = seatCapacity;
        this.fuelType = fuelType;
    }

    displayCarDetails() : void{
        console.log(
            `Car Details ${this.brand_name} ${this.model} ${this.seatCapacity} ${this.fuelType}`
        )
    }
}

const car1 = new Car("Totoya", "Corolla", 4, "Petrol");
car1.displayVehicle();
car1.displayCarDetails();