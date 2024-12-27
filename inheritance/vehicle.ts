export class Vehicle{
    brand_name: string;
    model: string

    constructor(brand_name: string, model: string){
        this.brand_name = brand_name;
        this.model = model
    }

    displayVehicle(): void {
        console.log(`Vehicle Detials : ${this.brand_name} ${this.model}`)
    }
}




