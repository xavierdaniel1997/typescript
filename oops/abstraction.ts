/*
abstract class BankAccount{
    private bankbalance : number;

    constructor(initialBalance : number){
        this.bankbalance = initialBalance;
    }

    deposit(amount: number){
        if(amount > 0){
            this.bankbalance += amount;
            console.log(`Your current balance is ${this.bankbalance}`)
        }else{
            console.log(`Depost amount should be positive`)
        }
    }

    withDraw(amount: number){
        if(amount >=0 && this.bankbalance > amount){
            this.bankbalance -= amount;
            console.log(`You withdraw ${amount} and current balance is ${this.bankbalance}`)
        }else{
            console.log(`Insiffecent balance`)
        }
    }

    checkBalance(){
        console.log(`your current balance is ${this.bankbalance}`)
    }
}

class SavingAccount extends BankAccount{
    private pinNumber: number;

    constructor(pinNumber: number, initialBalance : number){
        super(initialBalance);
        this.pinNumber = pinNumber;
    }

    changePin(oldPin: number, newPin:number):void{
        if(oldPin===this.pinNumber){
            this.pinNumber = newPin;
            console.log(`your pin in changed ${this.pinNumber} is your new PIN`)
        }
    }
}

const myAccount = new SavingAccount(1122, 5500);

myAccount.changePin(1122, 2211)
console.log("checking balance 1")
myAccount.checkBalance()
console.log("add amoutn")
myAccount.deposit(500)
console.log("checking balance 2")
myAccount.withDraw(1000);
console.log("checking balance 3")

*/


abstract class BankAccount{

    private bankBalance : number;
    constructor(initialBalance: number){
        this.bankBalance = initialBalance;
    }

    deposit(amount: number){
        if(amount > 0){
            this.bankBalance += amount;
            console.log(`Successfully deposited and current balance is ${amount}`)
        }else{
            console.log("Failed to deposit money")
        }
    }

    withdraw(amount: number){
        if(amount > 0 && this.bankBalance > amount){
            this.bankBalance -= amount;
            console.log(`Successfully with draw ${amount} and current balance is ${this.bankBalance}`)
        }
    }

    currentBalance(): void{
        console.log(`your current balance is ${this.bankBalance}`)
    }
}

class SavingAccount extends BankAccount{
    private pinNumber : number;
    constructor(initialBalance: number, pinNumber: number){
        super(initialBalance);
        this.pinNumber = pinNumber;
    }

    changePin(newPin: number): void{
        this.pinNumber = newPin;
        console.log(`Pin number updated new pin number is ${this.pinNumber}`)
    }
}

const myAccount = new SavingAccount(1000, 1212);

console.log("change pin number")
myAccount.changePin(2222);

myAccount.deposit(500)
myAccount.currentBalance();
myAccount.withdraw(100)

