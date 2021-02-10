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
console.log(graph.adjacencyList);

// ["0", "1", "3", "4", "2", "5"]