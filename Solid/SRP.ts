


interface Payment{
  pay():void
}



class UPIPayment implements Payment{
  pay(): void {
    console.log("UPI payment");
    
  }
}

class CardPayment implements Payment{
  pay(): void {
    console.log("Card Payment");
    
  }
}


class PaymentService{
  constructor(
    private _paymentService: Payment
  ){}

  process(){
    this._paymentService.pay()
  }
}

const obj1= new UPIPayment();

const pay = new PaymentService(obj1)

pay.process()