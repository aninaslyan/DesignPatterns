class House {
    private walls = 'brick';
    private roof = 'tile';
    private windows = 4;
    private doors = 2;

    public setWalls(walls: string): void {
        this.walls = walls;
    }

    public setRoof(roof: string): void {
        this.roof = roof;
    }

    public setWindows(windows: number): void {
        this.windows = windows;
    }

    public setDoors(doors: number): void {
        this.doors = doors;
    }

    public show(): void {
        console.log(`House with ${this.walls} walls, ${this.roof} roof, ${this.windows} windows, and ${this.doors} doors.`);
    }
}

interface HouseBuilder {
    buildWalls(): void;

    buildRoof(): void;

    buildWindows(): void;

    buildDoors(): void;

    getHouse(): House;
}

class ConcreteHouseBuilder implements HouseBuilder {
    private readonly house: House;

    constructor() {
        this.house = new House();
    }

    public buildWalls(): void {
        this.house.setWalls('brick');
    }

    public buildRoof(): void {
        this.house.setRoof('tile');
    }

    public buildWindows(): void {
        this.house.setWindows(4);
    }

    public buildDoors(): void {
        this.house.setDoors(2);
    }

    public getHouse(): House {
        return this.house;
    }
}

class WoodenHouseBuilder implements HouseBuilder {
    private readonly house: House;

    constructor() {
        this.house = new House();
    }

    public buildWalls(): void {
        this.house.setWalls('wood');
    }

    public buildRoof(): void {
        this.house.setRoof('shingles');
    }

    public buildWindows(): void {
        this.house.setWindows(6);
    }

    public buildDoors(): void {
        this.house.setDoors(3);
    }

    public getHouse(): House {
        return this.house;
    }
}

const concreteHouseBuilder = new ConcreteHouseBuilder();
concreteHouseBuilder.buildWalls();
concreteHouseBuilder.buildRoof();
concreteHouseBuilder.buildWindows();
concreteHouseBuilder.buildDoors();
const concreteHouse = concreteHouseBuilder.getHouse();
concreteHouse.show();

const woodenHouseBuilder = new WoodenHouseBuilder();
woodenHouseBuilder.buildWalls();
woodenHouseBuilder.buildRoof();
woodenHouseBuilder.buildWindows();
woodenHouseBuilder.buildDoors();
const woodenHouse = woodenHouseBuilder.getHouse();
woodenHouse.show();
