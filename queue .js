
// Implement a queue using a linked list.
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    // Add an element to the rear of the queue
    enqueue(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.front = newNode;
        } else {
            this.rear.next = newNode;
        }
        this.rear = newNode;
        this.size++;
    }

    // Remove and return the element at the front of the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        const frontData = this.front.data;
        this.front = this.front.next;
        if (this.front === null) {
            this.rear = null;
        }
        this.size--;
        return frontData;
    }

    // Return the element at the front of the queue without removing it
    peek() {
        if (this.isEmpty()) {
            return "No elements in the queue";
        }
        return this.front.data;
    }

    // Check if the queue is empty
    isEmpty() {
        return this.size === 0;
    }

    // Return the size of the queue
    getSize() {
        return this.size;
    }

    // Print the queue
    printQueue() {
        let current = this.front;
        let str = "";
        while (current) {
            str += current.data + " ";
            current = current.next;
        }
        return str;
    }
}

// Test the queue
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log("Queue elements:", queue.printQueue()); // Output: Queue elements: 1 2 3
console.log("Front element:", queue.peek()); // Output: Front element: 1
console.log("Queue size:", queue.getSize()); // Output: Queue size: 3
console.log("Dequeued element:", queue.dequeue()); // Output: Dequeued element: 1
console.log("Queue elements after dequeue:", queue.printQueue()); // Output: Queue elements after dequeue: 2 3




// The Node class represents each element (or node) in the queue. It has a data property to store the node's data and a next property to point to the next node in the queue.
// The Queue class represents the queue itself. It has front and rear properties that point to the front and rear nodes of the queue respectively, and a size property to keep track of the number of elements in the queue.
// The enqueue method adds an element to the rear of the queue.
// The dequeue method removes and returns the element at the front of the queue.
// The peek method returns the element at the front of the queue without removing it.
// The isEmpty method checks if the queue is empty.
// The getSize method returns the number of elements in the queue.
// The printQueue method returns a string representation of the queue for printing purposes.