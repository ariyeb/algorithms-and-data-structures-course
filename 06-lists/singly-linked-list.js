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

    shift() {
        if (this.head == null) return;

        const firstNode = this.head;
        this.head = this.head.next;
        this.size--;
        if (this.size === 0) this.tail = null;
        firstNode.next = null;
        return firstNode;
    }

    unShift(value) {
        const firstNode = new Node(value);
        firstNode.next = this.head;
        this.head = firstNode;
        this.size++;
        if (this.size === 1) this.tail = firstNode;
        return this;
    }

    get(index) {
        if (index >= this.size || index < 0) return;
        if (index === this.size - 1) return this.tail;

        let nodeAtIndex = this.head;
        for (let i = 0; i < index; i++) {
            nodeAtIndex = nodeAtIndex.next;
        }
        return nodeAtIndex;
    }

    set(index, value) {
        const nodeAtIndex = this.get(index);
        if (nodeAtIndex == undefined) return;
        nodeAtIndex.value = value;
        return nodeAtIndex;
    }

    insert(index, value) {
        if (index === 0) {
            this.unShift(value);
            return this.head;
        }
        if (index === this.size) {
            this.push(value);
            return this.tail;
        }

        const nodeBefore = this.get(index - 1);
        if (nodeBefore == undefined) return;

        const nodeAfter = nodeBefore.next;
        const newNode = new Node(value);
        nodeBefore.next = newNode;
        newNode.next = nodeAfter;
        this.size++;
        return newNode;
    }

    remove(index) {
        if (index < 0 || index >= this.size) return;
        if (index === 0) return this.shift();
        if (index === this.size - 1) return this.pop();

        const nodeBefore = this.get(index - 1);
        const nodeToRemove = nodeBefore.next;
        nodeBefore.next = nodeToRemove.next;
        this.size--;
        nodeToRemove.next = null;
        return nodeToRemove;
    }

    toArray() {
        const arr = [];
        let currentNode = this.head;
        while (currentNode != null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }
}

const sll = new SinglyLinkedList();
sll.push("Hello");
sll.push("world");
sll.push("!");
sll.pop();
sll.shift();
sll.unShift("Hello");
console.log(sll.toArray());