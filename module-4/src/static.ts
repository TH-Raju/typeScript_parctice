class Counter {
    static counter: number = 0;

    // constructor(counter: number) {
    //     Counter.counter = counter;
    // }
    static increment(): number {
        return Counter.counter = Counter.counter + 1
    }
    static deccrement(): number {
        return Counter.counter = Counter.counter - 1
    }
}


const instance1 = new Counter();
const instance2 = new Counter()

console.log(Counter.increment()); // 0 + 1 = 1
console.log(Counter.increment()); // 1 + 1 = 2
