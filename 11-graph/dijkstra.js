const PriorityQueue = require("../09-binary-heap-min-max/priority-queue");

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(name) {
        if (this.adjacencyList[name] == undefined) this.adjacencyList[name] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        if (this.adjacencyList[vertex1] == undefined) this.addVertex(vertex1);
        if (this.adjacencyList[vertex2] == undefined) this.addVertex(vertex2);
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }

    dijkstra(start, end) {
        if (
            this.adjacencyList[start] == undefined ||
            this.adjacencyList[start].length === 0 ||
            this.adjacencyList[end] == undefined ||
            this.adjacencyList[end].length === 0
        ) return;

        const distances = {};
        const pq = new PriorityQueue();
        const previous = {};

        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                pq.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                pq.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        while (pq.values.length > 0) {
            const smallest = pq.dequeue().val;

            if (smallest === end) {
                const path = [];

                let currentNode = smallest;
                while (previous[currentNode]) {
                    path.push(currentNode);
                    currentNode = previous[currentNode];
                }

                path.push(currentNode);
                path.reverse();

                return path;
            }

            if (smallest && distances[smallest] !== Infinity) {
                for (let neighbor of this.adjacencyList[smallest]) {
                    const currentLength = distances[smallest] + neighbor.weight;

                    if (currentLength < distances[neighbor.node]) {
                        distances[neighbor.node] = currentLength;
                        previous[neighbor.node] = smallest;
                        pq.enqueue(neighbor.node, currentLength);
                    }
                }
            }
        }
    }
}

const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addVertex("J");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
console.log(graph.dijkstra("A", "E"));