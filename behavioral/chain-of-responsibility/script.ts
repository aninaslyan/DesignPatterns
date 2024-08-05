// Decouple the sender of a request from its receiver by giving multiple objects a chance to handle the request.
// Dynamically add or change handlers without affecting the client code

interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: string): void;
}

abstract class AbstractHandler implements Handler {
    private nextHandler: Handler | null = null;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    handle(request: string): void {
        if (this.nextHandler) {
            this.nextHandler.handle(request);
        }
    }
}

class LevelOneSupport extends AbstractHandler {
    handle(request: string): void {
        if (request === 'Level One') {
            console.log('Level One Support: Handling the request.');
        } else {
            console.log('Level One Support: Passing request to the next level.');
            super.handle(request);
        }
    }
}

class LevelTwoSupport extends AbstractHandler {
    handle(request: string): void {
        if (request === 'Level Two') {
            console.log('Level Two Support: Handling the request.');
        } else {
            console.log('Level Two Support: Passing request to the next level.');
            super.handle(request);
        }
    }
}

class LevelThreeSupport extends AbstractHandler {
    handle(request: string): void {
        if (request === 'Level Three') {
            console.log('Level Three Support: Handling the request.');
        } else {
            console.log('Level Three Support: Passing request to the next level.');
            super.handle(request);
        }
    }
}

const levelOne = new LevelOneSupport();
const levelTwo = new LevelTwoSupport();
const levelThree = new LevelThreeSupport();

// set up the chain
levelOne.setNext(levelTwo).setNext(levelThree);

levelOne.handle('Level One');
levelOne.handle('Level Two');
levelOne.handle('Unknown issue');
