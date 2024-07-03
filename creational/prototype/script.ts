interface Prototype {
    clone(): Prototype;
}

class Circle implements Prototype {
    public radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    public clone(): Circle {
        return new Circle(this.radius); // Shallow copy
    }

    public draw(): void {
        console.log(`Drawing a circle with radius ${this.radius}`);
    }
}

class Rectangle implements Prototype {
    public width: number;
    public height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    public clone(): Rectangle {
        return new Rectangle(this.width, this.height);
    }

    public draw(): void {
        console.log(`Drawing a rectangle with width ${this.width} and height ${this.height}`);
    }
}

const circle1 = new Circle(10);
const circle2 = circle1.clone();
circle1.draw();
circle2.draw();

const rectangle1 = new Rectangle(20, 30);
const rectangle2 = rectangle1.clone();
rectangle1.draw();
rectangle2.draw();
