// Write a function to check if a linked list contains a cycle.


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function hasCycle(head) {
    if (!head || !head.next) {
        return false; // No cycle if there are less than 2 nodes
    }

    let slow = head;
    let fast = head.next;

    while (fast !== slow) {
        if (!fast || !fast.next) {
            return false; // Reached end of list, no cycle
        }
        slow = slow.next;
        fast = fast.next.next;
    }

    return true; // Cycle detected
}

// Test the function
const head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(3);
head1.next.next.next = head1; // Create a cycle: 3 -> 1

console.log("Linked list 1 has cycle:", hasCycle(head1)); // Output: Linked list 1 has cycle: true

const head2 = new Node(1);
head2.next = new Node(2);
head2.next.next = new Node(3);

console.log("Linked list 2 has cycle:", hasCycle(head2)); // Output: Linked list 2 has cycle: false




// The hasCycle function takes the head of a linked list as input and returns true if there is a cycle in the list, and false otherwise.
// It uses two pointers: slow and fast, initially pointing to the head and the next node of the head respectively.
// In each iteration, the slow pointer moves one step forward, while the fast pointer moves two steps forward.
// If there's a cycle, eventually the fast pointer will catch up with the slow pointer. If the fast pointer reaches the end of the list (null), there's no cycle.
// The function returns true if a cycle is detected, and false otherwise.