import { Observable } from "./observable";

import { IObservable, IObserver } from "./interfaces/interfaces";

export class Observer implements IObserver {
    constructor(
        private subscription: (data: string) => void,
    ) { }

    public update(observable: IObservable, data: string): void {
        if (observable instanceof Observable) {
            console.log('Observer: Reacted to the event.');
            this.subscription(data);
        }
    }
}
