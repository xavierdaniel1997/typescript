// Base Class
class Payment {
    processPayment(amount: number): void {
      console.log(`Processing payment of ₹${amount}`);
    }
  }
  
  // Derived Class: CreditCardPayment
  class CreditCardPayment extends Payment {
    processPayment(amount: number): void {
      console.log(`Processing Credit Card payment of ₹${amount}`);
    }
  }
  
  // Derived Class: PayPalPayment
  class PayPalPayment extends Payment {
    processPayment(amount: number): void {
      console.log(`Processing PayPal payment of ₹${amount}`);
    }
  }
  
  // Derived Class: CashPayment
  class CashPayment extends Payment {
    processPayment(amount: number): void {
      console.log(`Processing Cash payment of ₹${amount}`);
    }
  }
  
  // Function to demonstrate runtime polymorphism
  function makePayment(paymentMethod: Payment, amount: number): void {
    paymentMethod.processPayment(amount); // Resolved at runtime
  }
  
  // Using the classes
  const creditCard = new CreditCardPayment();
  const paypal = new PayPalPayment();
  const cash = new CashPayment();
  
  // Process payments using different methods
  makePayment(creditCard, 1000);
  makePayment(paypal, 2000);
  makePayment(cash, 500);
  