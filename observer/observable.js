class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(f) {
        this.observers.push(f);
    }

    unsubscribe(f) {
        this.observers.forEach((subscriber, index) => {
            if (subscriber === f) {
                this.observers.splice(index, 1);
            }
        })
    }

    notify(data) {
        this.observers.forEach(observer => observer(data));
    }
}
