interface UserDataOne{
    firstname: string;
    lastname: string;
    age: number;
    // address:{street: string, state: string, zipcode: string};
    phone: string;
}


class PersonOne implements UserDataOne{
    firstname: string;
    lastname: string;
    age: number;
    phone: string;

    constructor(firstname: string, lastname: string, age: number, phone: string){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.phone = phone
    }

    displayUser():void{
        console.log(this.firstname, this.lastname, this.age, this.phone)
    }
}

const newPerson1 = new PersonOne('Lal', 'Jos', 22, '768565454')
newPerson1.displayUser()