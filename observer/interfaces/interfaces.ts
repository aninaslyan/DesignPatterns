export interface IObserver {
    // Receive update from observable.
    update(observable: IObservable, data: string): void;
}

export interface IObservable {
    // Attach an observer to the observable.
    subscribe(observer: IObserver): void;

    // Detach an observer from the observable.
    unsubscribe(observer: IObserver): void;

    // Notify all observers about an event.
    notify(data: string): void;
}
