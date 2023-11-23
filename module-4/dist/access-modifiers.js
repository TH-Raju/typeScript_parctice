"use strict";
// access modifier hcce access ta k modify kora  k access krte parbe k parbe na
class BankAccout {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
}
const myAccount = new BankAccout(23, 'raju', 200);
// myAccount.balance = 0  // ata update krte parbo na karon ata private
console.log(myAccount);
// protected toiri krleo access pabo private krle pabo na public to paboi...
// class StuAcc extends BankAccout{
//     test(){
//         this.id
//     }
// }
