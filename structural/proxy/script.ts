// Can perform additional operations like lazy initialization, access control, logging, caching before forwarding the request to the real object

interface Image {
    display(): void;
}

class RealImage implements Image {
    private filename: string;

    constructor(filename: string) {
        this.filename = filename;
        this.loadFromDisk();
    }

    private loadFromDisk(): void {
        console.log(`Loading image from disk: ${this.filename}`);
    }

    display(): void {
        console.log(`Displaying image: ${this.filename}`);
    }
}

// Proxy
class ProxyImage implements Image {
    private realImage: RealImage | null = null;
    private filename: string;

    constructor(filename: string) {
        this.filename = filename;
    }

    display(): void {
        if (this.realImage === null) {
            this.realImage = new RealImage(this.filename);
        }
        this.realImage.display();
    }
}

const image = new ProxyImage('photo.jpg');

// Image will be loaded from disk only when display() is called
image.display();
