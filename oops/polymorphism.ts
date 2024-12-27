// Method Overloading


class BillingSystem {
  calculatePayment(hoursWorked: number, hourlyRate: number): number;
  calculatePayment(baseAmount: number, discount: number): number;
  calculatePayment(baseAmount: number): number;

  calculatePayment(a: number, b?: number): number {
    if (b !== undefined) {
      return a * b;
    }
    return a;
  }
}

const billing = new BillingSystem();
console.log(billing.calculatePayment(40, 25));
console.log(billing.calculatePayment(1000, 0.1));
console.log(billing.calculatePayment(500));


// Run-Time Polymorphism (Method Overriding)


class Notificationa {
    sendNotification(message: string): void {
        console.log(`Sending generic notification: ${message}`);
    }
}

class EmailNotification extends Notificationa {
    sendNotification(message: string): void {
        console.log(`Sending email: ${message}`);
    }
}

class SMSNotification extends Notificationa {
    sendNotification(message: string): void {
        console.log(`Sending SMS: ${message}`);
    }
}

// Derived class: Push notification
class PushNotification extends Notificationa {
    sendNotification(message: string): void {
        console.log(`Sending push notification: ${message}`);
    }
}

const emailNotification = new EmailNotification()
const smsNotification = new SMSNotification()
const pushNotification = new PushNotification()

emailNotification.sendNotification("Your product is successfully send")
smsNotification.sendNotification("Your product is successfully send")
pushNotification.sendNotification("Your product is successfully send")