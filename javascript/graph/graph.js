'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(value) {
    const newVertex = new Vertex(value);
    this.adjacencyList.set(newVertex, []);
    return newVertex;
  }

  getVertex() {
    return [...this.adjacencyList.keys()];
  }

  size() {
    return this.adjacencyList.size;
  }

  addEdge(start, end, weight = 0) {
    if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
      throw new Error("Invalid Vertices");
    }
    const edge = new Edge(end, weight);
    const adjacencies = this.adjacencyList.get(start);
    adjacencies.push(edge);
  }

  getNeighbors(vertex) {
    return this.adjacencyList.get(vertex);
  }

  breadthFirst(start) {
    if (!start) {
      return null;
    }

    const queue = [];
    const visited = {};

    queue.push(start);
    visited[start.value] = true;

    let result = [];

    while (queue.length) {
      let current = queue.shift();
      result.push(current.value);

      let neighbors = this.getNeighbors(current);

      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;
        if (!visited[neighborNode.value]) {
          visited[neighborNode.value] = true;
          queue.push(neighborNode);
        }
      }

      return result;
    }
  }

  depthFirst(node) {
    const visited = {};
    const traversalOrder = [];

    const dfs = (currentNode) => {
      visited[currentNode] = true;
      traversalOrder.push(currentNode);

      if (currentNode in this.graph) {
        const neighbors = this.graph[currentNode];
        for (const neighbor of neighbors) {
          if (!visited[neighbor]) {
            dfs(neighbor);
          }
        }
      }
    };

    dfs(node);
    return traversalOrder;
  }
}

module.exports = Graph;