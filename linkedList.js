// . Implement a singly linked list.

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addNode(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
}

// Test the linked list
const linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(4);
linkedList.addNode(5);

// Print the linked list
function printLinkedList(list) {
    if (!list) {
        return;
    }
    console.log(list.data);
    printLinkedList(list.next);
}

printLinkedList(linkedList.head);
