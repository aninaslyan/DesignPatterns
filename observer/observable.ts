import { Observers, Observer } from '../types';

class Observable {
    observers: Observers = [];

    constructor() {
    }

    subscribe(f: Observer) {
        this.observers.push(f);
    }

    unsubscribe(f: Observer) {
        this.observers.forEach((subscriber, index) => {
            if (subscriber === f) {
                this.observers.splice(index, 1);
            }
        })
    }

    notify(data: string) {
        this.observers.forEach(observer => observer(data));
    }
}
