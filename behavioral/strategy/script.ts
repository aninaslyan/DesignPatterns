// Easy to switch between different payment methods without modifying the PaymentContext class.

interface PaymentStrategy {
    pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paying ${amount} using Credit Card.`);
    }
}

class PayPalPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paying ${amount} using PayPal.`);
    }
}

class CryptoPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paying ${amount} using Crypto.`);
    }
}

class PaymentContext {
    constructor(private paymentStrategy: PaymentStrategy) {
    }

    executePayment(amount: number): void {
        this.paymentStrategy.pay(amount);
    }
}


let paymentContext = new PaymentContext(new CreditCardPayment());
paymentContext.executePayment(100);

paymentContext = new PaymentContext(new PayPalPayment());
paymentContext.executePayment(200);
