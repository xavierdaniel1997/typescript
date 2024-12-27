// Method Overloading
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BillingSystem = /** @class */ (function () {
    function BillingSystem() {
    }
    BillingSystem.prototype.calculatePayment = function (a, b) {
        if (b !== undefined) {
            return a * b;
        }
        return a;
    };
    return BillingSystem;
}());
var billing = new BillingSystem();
console.log(billing.calculatePayment(40, 25));
console.log(billing.calculatePayment(1000, 0.1));
console.log(billing.calculatePayment(500));
// Run-Time Polymorphism (Method Overriding)
var Notificationa = /** @class */ (function () {
    function Notificationa() {
    }
    Notificationa.prototype.sendNotification = function (message) {
        console.log("Sending generic notification: ".concat(message));
    };
    return Notificationa;
}());
var EmailNotification = /** @class */ (function (_super) {
    __extends(EmailNotification, _super);
    function EmailNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmailNotification.prototype.sendNotification = function (message) {
        console.log("Sending email: ".concat(message));
    };
    return EmailNotification;
}(Notificationa));
var SMSNotification = /** @class */ (function (_super) {
    __extends(SMSNotification, _super);
    function SMSNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SMSNotification.prototype.sendNotification = function (message) {
        console.log("Sending SMS: ".concat(message));
    };
    return SMSNotification;
}(Notificationa));
// Derived class: Push notification
var PushNotification = /** @class */ (function (_super) {
    __extends(PushNotification, _super);
    function PushNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PushNotification.prototype.sendNotification = function (message) {
        console.log("Sending push notification: ".concat(message));
    };
    return PushNotification;
}(Notificationa));
var emailNotification = new EmailNotification();
var smsNotification = new SMSNotification();
var pushNotification = new PushNotification();
emailNotification.sendNotification("Your product is successfully send");
smsNotification.sendNotification("Your product is successfully send");
pushNotification.sendNotification("Your product is successfully send");
