class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(data) {
        this.items.push(data);
    }

    dequeue() {
        return this.items.length ? this.items.shift() : null;
    }

    peek() {
        return this.items.length ? this.items[0] : null;
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

// Example usage:
const q = new Queue();
q.enqueue(1);
q.enqueue(2);
console.log(q.peek()); // 1
q.dequeue();
console.log(q.peek()); // 2
