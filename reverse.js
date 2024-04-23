// Write a function to reverse a linked list.

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    let next = null;

    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev; // New head of the reversed list
}

// Test the function
function printLinkedList(list) {
    let current = list;
    let result = '';
    while (current !== null) {
        result += current.data + " -> ";
        current = current.next;
    }
    result += 'null';
    console.log(result);
}

// Create a linked list
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log("Original linked list:");
printLinkedList(head); // Output: 1 -> 2 -> 3 -> 4 -> 5 -> null

// Reverse the linked list
const newHead = reverseLinkedList(head);

console.log("\nReversed linked list:");
printLinkedList(newHead); // Output: 5 -> 4 -> 3 -> 2 -> 1 -> null


// The reverseLinkedList function takes the head of a linked list as input and returns the new head of the reversed list.
// It uses three pointers (prev, current, and next) to reverse the links between nodes iteratively.
// Initially, prev is null, current points to the head of the original list, and next is used to temporarily store the next node in the original list.
// Inside the loop, the link of the current node is reversed to point to the previous node (prev), and then the pointers are updated for the next iteration.
// Finally, the function returns the new head of the reversed list, which is the previous node of the original list's tail node.