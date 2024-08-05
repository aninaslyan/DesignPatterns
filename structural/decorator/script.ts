// Allows adding new behaviors to objects dynamically by placing them inside special wrapper objects called decorators.
// Is useful for adhering Open/Closed Principle.

interface Notifier {
    send(message: string): void;
}

class BasicNotifier implements Notifier {
    send(message: string): void {
        console.log(`Basic Notification: ${message}`);
    }
}

// Decorator
class NotifierDecorator implements Notifier {
    protected wrapped: Notifier;

    constructor(notifier: Notifier) {
        this.wrapped = notifier;
    }

    send(message: string): void {
        this.wrapped.send(message);
    }
}

// Concrete Decorators
class EmailNotifier extends NotifierDecorator {
    send(message: string): void {
        super.send(message);
        console.log(`Sending Email: ${message}`);
    }
}

class SMSNotifier extends NotifierDecorator {
    send(message: string): void {
        super.send(message);
        console.log(`Sending SMS: ${message}`);
    }
}

class PushNotifier extends NotifierDecorator {
    send(message: string): void {
        super.send(message);
        console.log(`Sending Push Notification: ${message}`);
    }
}

let notifier: Notifier = new BasicNotifier();

notifier = new EmailNotifier(notifier);
notifier = new SMSNotifier(notifier);
notifier = new PushNotifier(notifier);

notifier.send('Hello, this is a test notification!');
