class Fibonacci implements IterableIterator<number | undefined> {
    private num1 = 0;
    private num2 = 1;
    private current = 0;

    constructor(private maxValue?: number) {
    }

    next(): IteratorResult<number | undefined> {
        this.current = this.num1 + this.num2;
        this.num1 = this.num2;
        this.num2 = this.current;

        if (this.maxValue && this.maxValue < this.current) {
            return {
                done: true,
                value: undefined
            }
        }

        return {
            done: false,
            value: this.current
        }
    }

    [Symbol.iterator](): IterableIterator<number | undefined> {
        return this;
    }
}

let fib = new Fibonacci(13);
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());

// or
// for(let f of fib) {
//     console.log(f);
// }
