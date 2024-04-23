
// Implement a stack using an array.
class Stack {
    constructor() {
        this.items = [];
    }

    // Push element to the top of the stack
    push(element) {
        this.items.push(element);
    }

    // Remove and return the top element of the stack
    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    // Return the top element of the stack without removing it
    peek() {
        if (this.isEmpty()) {
            return "No elements in the stack";
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Return the size of the stack
    size() {
        return this.items.length;
    }

    // Print the stack
    printStack() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
}

// Test the stack
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Stack elements:", stack.printStack()); // Output: Stack elements: 1 2 3
console.log("Top element:", stack.peek()); // Output: Top element: 3
console.log("Stack size:", stack.size()); // Output: Stack size: 3
console.log("Popped element:", stack.pop()); // Output: Popped element: 3
console.log("Stack elements after pop:", stack.printStack()); // Output: Stack elements after pop: 1 2






// The Stack class represents a stack data structure.
// It has an items property, which is an array used to store the elements of the stack.
// The push method adds an element to the top of the stack.
// The pop method removes and returns the top element of the stack.
// The peek method returns the top element of the stack without removing it.
// The isEmpty method checks if the stack is empty.
// The size method returns the number of elements in the stack.
// The printStack method returns a string representation of the stack for printing purposes.