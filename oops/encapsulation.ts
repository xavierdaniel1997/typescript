class BankAccount1{
    private accountNumber: string;
    private owner: string;
    protected balance: number

    constructor(accountNumber: string, owner: string, balance: number){
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.balance = balance
    }

    deposit(amount: number): void{
        if(amount > 0){
            this.balance = amount;
        }
    }

    withdraw(amount: number){
        if(amount > 0 && this.balance > amount){
            this.balance -= amount;
        }
    }

    accountDetilas(): void{
        console.log(`${this.accountNumber}, ${this.owner}`)
    }
}

class PrimaryAccount extends BankAccount1{
    pinNumber: number;
    constructor(accountNumber: string, owner: string, balance: number, pinNumber: number){
        super(accountNumber, owner, balance);
        this.pinNumber = pinNumber;
    }

    checkBalance(checkPin: number){
        if(this.pinNumber === checkPin){
            console.log(`your balance is ${this.balance}`)
        }else{
            console.log(`Enter the right pin number`)
        }
    }
}

const myAccount1 = new PrimaryAccount('12345678', 'Jos', 1000, 12);

myAccount1.checkBalance(12);
