class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}
// min-binary-heap
class PriorityQueue {
    constructor() {
        this.values = [];
    }
    // מכניסים לסוף המערך ומפעפעים למעלה עד המיקום הנכון
    enqueue(val, priority) {
        const newNode = new Node(val, priority);
        this.values.push(newNode);
        if (this.values.length === 1) return this.values;

        let nodeIndex = this.values.length - 1;
        let parentIndex = Math.floor((nodeIndex - 1) / 2);

        while (
            parentIndex >= 0 &&
            this.values[parentIndex].priority > this.values[nodeIndex].priority
        ) {
            this.values[nodeIndex] = this.values[parentIndex];
            this.values[parentIndex] = newNode;
            nodeIndex = parentIndex;
            parentIndex = Math.floor((nodeIndex - 1) / 2);
        }
        return this.values;
    }

    // מוציאים את הנוד האחרון שמים בראש המערך ומפעפעים כלפי מטה עד המיקום הנכון 
    // ומחזירים את הנוד עם הקדימות הכי נמוכה
    dequeue() {
        if (this.values.length === 0) return;

        const highestPriority = this.values[0];
        const lastNode = this.values.pop();
        if (this.values.length === 0) return highestPriority;

        this.values[0] = lastNode;
        if (this.values.length === 1) return highestPriority;

        let nodeIndex, leftChildIndex, leftChildPriority, rightChildIndex, rightChildPriority;
        const updatePointers = (index) => {
            nodeIndex = index;
            leftChildIndex = index * 2 + 1;
            leftChildPriority = this.values[leftChildIndex]?.priority;
            rightChildIndex = index * 2 + 2;
            rightChildPriority = this.values[rightChildIndex]?.priority;
        };

        updatePointers(0);

        while (lastNode.priority >= leftChildPriority || lastNode.priority >= rightChildPriority) {
            if (leftChildPriority <= rightChildPriority || rightChildPriority == undefined) {
                this.values[nodeIndex] = this.values[leftChildIndex];
                this.values[leftChildIndex] = lastNode;
                updatePointers(leftChildIndex);
            } else {
                this.values[nodeIndex] = this.values[rightChildIndex];
                this.values[rightChildIndex] = lastNode;
                updatePointers(rightChildIndex);
            }
        }

        return highestPriority;
    }
}

// const pq = new PriorityQueue();
// console.log(pq.enqueue(5, 5));
// console.log(pq.enqueue(1, 1));
// console.log(pq.enqueue(4, 4));
// console.log(pq.enqueue(0, 0));
// console.log(pq.enqueue(2, 2));
// console.log(pq.enqueue(3, 3));
// console.log(pq.enqueue(0, 0));


// console.log(pq.dequeue());
// console.log(pq.dequeue());
// console.log(pq.dequeue());
// console.log(pq.dequeue());
// console.log(pq.dequeue());
// console.log(pq.dequeue());
// console.log(pq.dequeue());
// console.log(pq.values);

module.exports = PriorityQueue;