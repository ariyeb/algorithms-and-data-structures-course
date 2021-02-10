const Queue = require("../07-stack-and-queue/queue");
const Stack = require("../07-stack-and-queue/stack");

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(name) {
        if (this.adjacencyList[name] == undefined) this.adjacencyList[name] = [];
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] == undefined) this.addVertex(vertex1);
        if (this.adjacencyList[vertex2] == undefined) this.addVertex(vertex2);
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        const vertex2Index = this.adjacencyList[vertex1]?.indexOf(vertex2);
        if (vertex2Index && vertex2Index !== -1) this.adjacencyList[vertex1].splice(vertex2Index, 1);
        const vertex1Index = this.adjacencyList[vertex2]?.indexOf(vertex1);
        if (vertex1Index && vertex1Index !== -1) this.adjacencyList[vertex2].splice(vertex1Index, 1);
    }

    removeVertex(vertex) {
        if (this.adjacencyList[vertex] == undefined) return;
        for (let toVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, toVertex);
        }
        delete this.adjacencyList[vertex];
    }

    dfsTraverse(start) {
        const visited = {};
        const result = [];

        const traverse = (vertex) => {
            if (!vertex) return;

            visited[vertex] = true;
            result.push(vertex);

            for (let neighbor of this.adjacencyList[vertex]) {
                if (visited[neighbor] == undefined) {
                    traverse(neighbor);
                }
            }
        };
        traverse(start);

        return result;
    }

    bfsTraverse(start) {
        const q = new Queue();
        q.enqueue(start);
        const result = [];
        const visited = {};
        visited[start] = true;

        while (q.size > 0) {
            const currentVertex = q.dequeue();
            result.push(currentVertex);

            for (let neighbor of this.adjacencyList[currentVertex]) {
                if (visited[neighbor] == undefined) {
                    visited[neighbor] = true;
                    q.enqueue(neighbor);
                }
            }
        }

        return result;
    }

    dfsTraverseIterative(start) {
        const stack = new Stack();
        stack.push(start);
        const result = [];
        const visited = {};
        visited[start] = true;

        while (stack.size > 0) {
            const currentVertex = stack.pop();
            result.push(currentVertex);

            for (let neighbor of this.adjacencyList[currentVertex]) {
                if (visited[neighbor] == undefined) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            }
        }

        return result;
    }
}

const graph = new Graph();
// graph.addVertex("Netanya");
// graph.addVertex("Jerusalem");
// graph.addEdge("Netanya", "Jerusalem");

graph.addVertex("0");
graph.addVertex("1");
graph.addVertex("2");
graph.addVertex("3");
graph.addVertex("4");
graph.addVertex("5");

graph.addEdge("0", "1");
graph.addEdge("0", "2");
graph.addEdge("1", "3");
graph.addEdge("2", "4");
graph.addEdge("3", "4");
graph.addEdge("3", "5");
graph.addEdge("4", "5");
// console.log(graph.adjacencyList);
console.log(graph.dfsTraverse("0"));
// ["0", "1", "3", "4", "2", "5"]
console.log(graph.bfsTraverse("0"));
console.log(graph.dfsTraverseIterative("0"));