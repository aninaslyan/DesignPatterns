import { IObserver, IObservable } from './interfaces/interfaces';

export class Observable implements IObservable {
    public observers: IObserver[] = [];

    constructor() { }

    public subscribe(observer: IObserver): void {
        if (this.observers.includes(observer)) {
            console.log('This observer has been already attached');
            return;
        }

        this.observers.push(observer);
    }

    public unsubscribe(observer: IObserver): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            console.log('This observer doesn\'t exist');
            return;
        }

        this.observers.splice(observerIndex, 1);
    }

    public notify(data: string): void {
        this.observers.forEach(observer => observer.update(this, data));
    }
}
