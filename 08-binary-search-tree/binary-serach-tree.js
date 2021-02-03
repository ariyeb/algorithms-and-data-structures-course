const Queue = require('../07-stack-and-queue/queue');

class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root == undefined) {
            this.root = newNode;
            return this;
        }

        let currentNode = this.root;
        while (currentNode != null) {
            if (currentNode.value === value) return this;
            if (currentNode.value > value) {
                if (currentNode.left == null) {
                    currentNode.left = newNode;
                    return this;
                } else {
                    currentNode = currentNode.left;
                }
            } else {
                if (currentNode.right == null) {
                    currentNode.right = newNode;
                    return this;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
    }

    includes(value) {
        let currentNode = this.root;
        while (currentNode != undefined) {
            if (currentNode.value === value) return true;
            if (currentNode.value > value) currentNode = currentNode.left;
            else currentNode = currentNode.right;
        }
        return false;
    }

    dfsPreOrderTraverse() {
        const valuesArray = [];

        const traverse = (node) => {
            if (node == null) return;
            valuesArray.push(node.value);
            traverse(node.left);
            traverse(node.right);
        };
        traverse(this.root);
        return valuesArray;
    }

    dfsPostOrderTraverse() {
        const valuesArray = [];

        const traverse = (node) => {
            if (node == null) return;

            traverse(node.left);
            traverse(node.right);
            valuesArray.push(node.value);
        };
        traverse(this.root);
        return valuesArray;
    }

    dfsInOrderTraverse() {
        const valuesArray = [];

        const traverse = (node) => {
            if (node == null) return;

            traverse(node.left);
            valuesArray.push(node.value);
            traverse(node.right);
        };
        traverse(this.root);
        return valuesArray;
    }

    bfsTraveres() {
        if (this.root == null) return [];
        const valuesArray = [];
        const q = new Queue();
        q.enqueue(this.root);
        while (q.size > 0) {
            const currentNode = q.dequeue();
            valuesArray.push(currentNode.value);
            if (currentNode.left != null) q.enqueue(currentNode.left);
            if (currentNode.right != null) q.enqueue(currentNode.right);
        }

        return valuesArray;
    }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(12);
bst.insert(17);
// console.log(bst.includes(2));
// console.log(bst.includes(7));
console.log(bst.dfsPreOrderTraverse());
console.log(bst.dfsPostOrderTraverse());
console.log(bst.dfsInOrderTraverse());
console.log(bst.bfsTraveres());