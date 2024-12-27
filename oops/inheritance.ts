class College{
    first_name: string;
    last_name: string;
    phone: string;
    age: number;
    location: string;

    constructor(firstname: string, lastname: string, phone: string, age: number, location: string){
        this.first_name = firstname;
        this.last_name = lastname;
        this.phone = phone;
        this.age = age;
        this.location = location;
    }

}

class Students extends College{
    department: string;
    semister: string;

    constructor(firstname: string, lastname: string, phone: string, age: number, location: string, department: string, semiter: string){
        super(firstname, lastname, phone, age, location);
        this.department = department;
        this.semister = semiter;
    }

    viewStudentDetails(): void{
        console.log(this.first_name, this.last_name, this.phone, this.age, this.location, this.department, this.semister)
    }
}

const stud12 = new Students("Lal", "A S", "8777073355", 34, "London", "CS", "2nd")

stud12.viewStudentDetails()