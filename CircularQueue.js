class CircularQueue {
    constructor(size) {
        this.queue = new Array(size);
        this.size = size;
        this.front = 0;
        this.rear = 0;
        this.count = 0;
    }

    isFull() {
        return this.count === this.size;
    }

    isEmpty() {
        return this.count === 0;
    }

    enqueue(data) {
        if (this.isFull()) return;
        this.queue[this.rear] = data;
        this.rear = (this.rear + 1) % this.size;
        this.count++;
    }

    dequeue() {
        if (this.isEmpty()) return null;
        const data = this.queue[this.front];
        this.front = (this.front + 1) % this.size;
        this.count--;
        return data;
    }
}

// Example usage:
const cq = new CircularQueue(5);
cq.enqueue(1);
cq.enqueue(2);
cq.enqueue(3);
console.log(cq.dequeue()); // 1
