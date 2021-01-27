// LIFO -> last in - first out

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        const newNode = new Node(value);

        if (this.size === 0) {
            this.first = newNode;
        } else {
            newNode.next = this.last;
        }
        this.last = newNode;

        return ++this.size;
    }

    pop() {
        if (this.size === 0) return;
        const lastNode = this.last;
        this.last = this.last.next;
        this.size--;
        if (this.size === 0) this.first = null;
        return lastNode.value;
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());