class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }


    push(value) {
        const newNode = new Node(value);
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;

        return this;
    }

    pop() {
        if (this.head == null) return;

        const lastNode = this.tail;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            lastNode.prev = null;
        }
        this.size--;
        return lastNode;
    }
    // O(1)
}

const dll = new DoublyLinkedList();
dll.push("Hello");
dll.push("world");
dll.push("!");
dll.pop();
console.log(dll);