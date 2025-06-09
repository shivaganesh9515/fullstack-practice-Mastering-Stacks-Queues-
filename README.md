# fullstack-practice-Mastering-Stacks-Queues-
Practical Implementation &amp; Use Cases

# Stack Implementation Using Array

This Stack class implements a basic stack data structure using a JavaScript array. It supports the following operations:

* `push(item)`: Adds an item to the top of the stack.
* `pop()`: Removes and returns the top item from the stack. Returns `null` if the stack is empty.
* `peek()`: Returns the top item without removing it. Returns `null` if the stack is empty.
* `isEmpty()`: Returns `true` if the stack has no elements, otherwise `false`.


```js
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
```

* **Space Complexity**: O(n), where `n` is the number of elements currently in the stack.

-----------------------------------------------------------------------------------------------------------------------------------------------------------

# Queue Implementation Using Linked List

* **enqueue(data)**: Adds an element to the end of the queue.
* **dequeue()**: Removes and returns the element at the front of the queue.
* **peek()**: Returns the element at the front without removing it.
* **isEmpty()**: Checks if the queue is empty.

* A **Node** class stores individual elements with `data` and a pointer to the `next` node.
* The Queue maintains two pointers: `head` (front) and `tail` (end).
* The size of the queue is also tracked for efficiency.

```javascript
const q = new Queue();
q.enqueue(10);
q.enqueue(20);
console.log(q.peek());  // Output: 10
console.log(q.dequeue());  // Output: 10
console.log(q.peek());  // Output: 20
console.log(q.isEmpty()); // Output: false
q.dequeue();
console.log(q.isEmpty()); // Output: true
```


* **O(n)**, where *n* is the number of elements currently in the queue.

-----------------------------------------------------------------------------------------------------------------------------------------------------------

# Reverse String Using Stack

1. Each character of the input string is pushed onto the stack.
2. Characters are popped off the stack one by one to build the reversed string.
3. Since stack pops elements in reverse order, the final string is the input string reversed.

```javascript
function reverseString(str) {
  const stack = [];
  for (let ch of str) stack.push(ch);
  
  let reversed = "";
  while (stack.length) reversed += stack.pop();
  
  return reversed;
}

console.log(reverseString("hello")); // Output: olleh
```

* **Space Complexity:** O(n), where n is the length of the string (due to stack storage).

-----------------------------------------------------------------------------------------------------------------------------------------------------------

# Circular Queue Implementation Using Array

* Fixed size queue with wrap-around behavior.

  * `enqueue(data)`: Adds an element to the rear of the queue.
  * `dequeue()`: Removes an element from the front of the queue.
  * `isFull()`: Checks if the queue is full.
  * `isEmpty()`: Checks if the queue is empty.


* The queue uses two pointers: `front` and `rear` to track the start and end of the queue.
* Both pointers wrap around to the start of the array when reaching the end (`modulus` operation).
* `count` keeps track of the number of elements for quick full/empty checks.

```javascript
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

// Usage example:
const cq = new CircularQueue(5);
cq.enqueue(1);
cq.enqueue(2);
cq.enqueue(3);
console.log(cq.dequeue()); // Output: 1
```


* **Space Complexity:** O(n), where n is the fixed size of the queue.

-----------------------------------------------------------------------------------------------------------------------------------------------------------

# Balanced Parentheses Checker Using Stack

* Uses a **stack** to track opening brackets.
* Matches each closing bracket with the last unmatched opening bracket.
* Returns `"Valid"` if the string is balanced, else `"Invalid"`.
* Handles all three types of brackets: `()`, `{}`, `[]`.

* Iterate through each character in the input string.
* If the character is an opening bracket, push it onto the stack.
* If it’s a closing bracket, pop the top of the stack and check if it matches the corresponding opening bracket.
* If there’s a mismatch or stack is empty when expecting a match, the expression is invalid.
* After processing the entire string, if the stack is empty, all brackets matched correctly.

```javascript
function isBalanced(expression) {
  const stack = [];
  const pairs = { ')': '(', '}': '{', ']': '[' };

  for (let char of expression) {
    if ('({['.includes(char)) {
      stack.push(char);
    } else if (')}]'.includes(char)) {
      if (!stack.length || stack.pop() !== pairs[char]) {
        return "Invalid";
      }
    }
  }

  return stack.length === 0 ? "Valid" : "Invalid";
}

// Dry runs:
console.log(isBalanced("(){}[]")); // Output: Valid
console.log(isBalanced("({[})"));  // Output: Invalid
```


