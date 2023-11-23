"use strict";
// access modifier hcce access ta k modify kora  k access krte parbe k parbe na
class BankAccount {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    /*--------------
    Getter
    -------------------*/
    get balanc() {
        return this.balance;
    }
    /*--------------
    Setter
    -------------------*/
    set deposit(amount) {
        this.balance = this.balance + amount;
    }
    getBalance() {
        // console.log(`My Current Balance is : ${this.balance}`);
        return this.balance;
    }
    addDeposit(amount) {
        this.balance = this.balance + amount;
    }
}
const myAccounts = new BankAccount(23, 'raju', 200);
// myAccounts.addDeposit(20)
// myAccounts.getBalance()
console.log(myAccounts.balanc);
myAccounts.deposit = 30;
console.log(myAccounts.balanc);
