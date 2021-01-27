class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
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
            this.tail = newNode;
        }
        this.size++;

        return this;
    }

    pop() {
        if (this.head == null) return;

        this.size--;
        let lastNode = this.head;
        if (this.size === 0) {
            this.head = null;
            this.tail = null;
            return lastNode;
        }

        let secondTolasrNode = lastNode;
        while (lastNode.next !== null) {
            secondTolasrNode = lastNode;
            lastNode = lastNode.next;
        }
        this.tail = secondTolasrNode;
        this.tail.next = null;

        return lastNode;
    }
    // O(n)

    toArray(){
        
    }
}

const sll = new SinglyLinkedList();
sll.push("Hello");
sll.push("world");
sll.push("!");
sll.pop();
console.log(sll);