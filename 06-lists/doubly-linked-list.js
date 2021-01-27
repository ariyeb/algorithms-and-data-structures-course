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

    shift() {
        if (this.head == null) return;
        let firstNode = this.head;
        this.size--;
        if (this.size === 0) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            firstNode.next = null;
        }
        return firstNode;
    }

    unShift(value) {
        const firstNode = new Node(value);
        if (this.size === 0) {
            this.head = firstNode;
            this.tail = firstNode;
        } else {
            this.head.prev = firstNode;
            firstNode.next = this.head;
            this.head = firstNode;
        }
        return this;
    }

    get(index) {
        if (index >= this.size || index < 0) return;
        const middle = Math.floor(this.size / 2);
        if (index <= middle) {
            let currenNode = this.head;
            for (let i = 0; i <= middle; i++) {
                if (i === index) return currenNode;
                currenNode = currenNode.next;
            }
        } else {
            let currentNode = this.tail;
            for (let i = this.size - 1; i > middle; i--) {
                if (i === index) return currentNode;
                currentNode = currentNode.prev;
            }
        }
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

        const nodeAtIndex = this.get(index);
        if (nodeAtIndex == undefined) return;
        const nodeBfore = nodeAtIndex.prev;
        const newNode = new Node(value);
        nodeBfore.next = newNode;
        newNode.prev = nodeBfore;
        newNode.next = nodeAtIndex;
        nodeAtIndex.prev = newNode;
        this.size++;
        return newNode;
    }

    remove(index) {
        if (index < 0 || index >= this.size) return;
        if (index === 0) return this.shift();
        if (index === this.size - 1) return this.pop();
        const nodeToRemove = this.get(index);
        const nodeBfore = nodeToRemove.prev;
        const nodeAfter = nodeToRemove.next;
        nodeBfore.next = nodeAfter;
        nodeAfter.prev = nodeBfore;
        nodeToRemove.next = null;
        nodeToRemove.prev = null;
        size--;
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

    reverse() {

    }
}

const dll = new DoublyLinkedList();
dll.push("Hello");
dll.push("world");
dll.push("!");
dll.pop();
dll.shift();
dll.unShift("Hello");
console.log(dll.toArray());