/*
class BankAccount{
    private balance: number;

    constructor(initilaBalance: number){
        this.balance = initilaBalance;
    }

    deposit(amount: number): void {
        if(amount > 0){
            this.balance += amount;
            console.log(`Deposited ${amount} . Your current balance is ${this.balance}`);
        }else{
            console.log(`Deposit amount must be positive`)
        }
    }

    withdraw(amount:number): void {
        if(amount > 0 && amount <= this.balance){
            this.balance -= amount;
            console.log(`Withdrew ${amount} your current balance is ${this.balance}`)
        }else{
            console.log("Invalid withdrawal amount!");
        }
    }

    getBalance(): number{
        return this.balance;
    }

    setBalance(amount: number): void{
        if(amount >= 0){
            this.balance = amount;
            console.log(`Balance updated to ${this.balance}`);
        }else{
            console.log("Balance cannot be negative!");
        }
    }
}

const myAccount = new BankAccount(1000);

console.log(myAccount.getBalance());

myAccount.deposit(500);
myAccount.withdraw(200);

myAccount.setBalance(2000)
console.log(myAccount.getBalance())

*/

class Admin{
    private password: number;

    constructor(password: number){
        this.password = password;
    }

    setPassword(newPsw: number):void{
        if(newPsw){
            this.password = newPsw
        }
    }

    getPasswod(): number{
        return this.password;
    }
}


const admin = new Admin(1234)


console.log(admin.getPasswod())

admin.setPassword(98766)

console.log(admin.getPasswod())
