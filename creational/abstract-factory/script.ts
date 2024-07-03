interface Chair { // Product
    sitOn(): void;
}

interface Sofa { // Product
    sitOn(): void;

    lieOn(): void;
}

class VictorianChair implements Chair {
    public sitOn(): void {
        console.log('Sitting on a Victorian chair.');
    }
}

class ModernChair implements Chair {
    public sitOn(): void {
        console.log('Sitting on a Modern chair.');
    }
}

class VictorianSofa implements Sofa {
    public sitOn(): void {
        console.log('Sitting on a Victorian sofa.');
    }

    public lieOn(): void {
        console.log('Lying on a Victorian sofa.');
    }
}

class ModernSofa implements Sofa {
    public sitOn(): void {
        console.log('Sitting on a Modern sofa.');
    }

    public lieOn(): void {
        console.log('Lying on a Modern sofa.');
    }
}

interface FurnitureFactory { // Abstract Factory
    createChair(): Chair;

    createSofa(): Sofa;
}

class VictorianFurnitureFactory implements FurnitureFactory {
    public createChair(): Chair {
        return new VictorianChair();
    }

    public createSofa(): Sofa {
        return new VictorianSofa();
    }
}

class ModernFurnitureFactory implements FurnitureFactory {
    public createChair(): Chair {
        return new ModernChair();
    }

    public createSofa(): Sofa {
        return new ModernSofa();
    }
}

class FurnitureStore {
    private chair: Chair;
    private sofa: Sofa;

    constructor(factory: FurnitureFactory) {
        this.chair = factory.createChair();
        this.sofa = factory.createSofa();
    }

    public displayFurniture(): void {
        this.chair.sitOn();
        this.sofa.sitOn();
        this.sofa.lieOn();
    }
}

const victorianFurnitureStore = new FurnitureStore(new VictorianFurnitureFactory());
console.log('Victorian furniture factory.');
victorianFurnitureStore.displayFurniture();


const modernFurnitureStore = new FurnitureStore(new ModernFurnitureFactory());
console.log('Modern furniture factory.');
modernFurnitureStore.displayFurniture();
