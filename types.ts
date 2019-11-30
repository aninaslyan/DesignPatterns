// Observer types
export type Observers = Array<(T: string) => string>;

export type Observer = (T: string) => string;

// Iterator types
// IterableIterator type comes from ts
export interface Iterator<T> {
    next(value?: any): IteratorResult<T>;
    return?(value?: any): IteratorResult<T>;
    throw?(e?: any): IteratorResult<T>;
}

interface IteratorResult<T> {
    done: boolean;
    value: T;
}
