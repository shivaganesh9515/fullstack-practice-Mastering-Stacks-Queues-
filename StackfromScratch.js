class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop() ?? null;
    }
    peek() {
        return this.items.length ? this.items[this.items.length - 1] : null;
    }
    isEmpty() {
        return this.items.length === 0;
    }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek()); // 20
stack.pop();
console.log(stack.peek()); // 10

/*
Time Complexity:
  push: O(1)
  pop: O(1)
  peek: O(1)
  isEmpty: O(1)
Space Complexity: O(n) where n is number of elements
*/
