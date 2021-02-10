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