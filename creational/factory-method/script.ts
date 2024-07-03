interface Delivery {
    deliver(): void;
}

class AirDelivery implements Delivery {
    public deliver(): void {
        console.log('Delivering by air.');
    }
}

class SeaDelivery implements Delivery {
    public deliver(): void {
        console.log('Delivering by sea.');
    }
}

// Creator
abstract class Logistics {
    public abstract createDelivery(): Delivery;

    public planDelivery(): void { // Factory method
        const delivery = this.createDelivery();
        delivery.deliver();
    }
}

class AirLogistics extends Logistics {
    public createDelivery(): Delivery {
        return new AirDelivery();
    }
}

class SeaLogistics extends Logistics {
    public createDelivery(): Delivery {
        return new SeaDelivery();
    }
}

const airLogistics = new AirLogistics();
const seaLogistics = new SeaLogistics();

console.log('Planning delivery by air -');
airLogistics.planDelivery();

console.log('Planning delivery by sea -');
seaLogistics.planDelivery();
