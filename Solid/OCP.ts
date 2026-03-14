


// interface Payment{
//     pay(amount:number):void
// }


// class UPIPayment implements Payment{
//     pay(amount: number): void {
//         console.log("UPI payment ",amount);
        
//     }
// }



// class CashOnDelivary implements Payment{
//     pay(amount: number): void {
//         console.log("COD", amount);
        
//     }
// }


// class PaymentService{
//     constructor(
//                 private _payment:Payment
//     ){}

//     process(amount:number){
//         this._payment.pay(amount)
//     }
// }


// const cod = new CashOnDelivary();
// const payservice = new PaymentService(cod)
// payservice.process(800)