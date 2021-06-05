class Graph {
    private vertices: Set<string>;
      constructor() {
          this.vertices = new Set<string>;
          this.adjacencyList = {};
      }
       addVertex(vertex) {
          this.vertices.add(vertex);
          this.adjacencyList[vertex] = {};
      }
  
      addEdge(vertex1, vertex2, weight) {
          this.adjacencyList[vertex1][vertex2] = weight;
      }
  
      changeWeight(vertex1, vertex2, weight) {
          this.adjacencyList[vertex1][vertex2] = weight;
      }
      dijkstra(source): DisjktraTable {
          let distances = {},
              parents = {},
              visited = new Set();
          for (let vertex of this.vertices.values()) {
              if (vertex === source) {
                  distances[source] = 0;
              } else {
                  distances[vertex] = Infinity;
              }
              parents[vertex] = null;
          }
          
          let currVertex = this.vertexWithMinDistance(distances, visited);
  
          while (currVertex !== null) {
              let distance = distances[currVertex],
                  neighbors = this.adjacencyList[currVertex];
              for (let neighbor in neighbors) {
                  let newDistance = distance + neighbors[neighbor];
                  if (distances[neighbor] > newDistance) {
                      distances[neighbor] = newDistance;
                      parents[neighbor] = currVertex;
                  }
              }
              visited.add(currVertex);
              currVertex = this.vertexWithMinDistance(distances, visited);
          }
  
          console.log(parents);
          console.log(distances);
          console.log(this.adjacencyList);
          return {distances, parents};
      }
       vertexWithMinDistance(distances, visited) {
          let minDistance = Infinity,
              minVertex = null;
          for (let vertex in distances) {
              let distance = distances[vertex];
              if (distance < minDistance && !visited.has(vertex)) {
                  minDistance = distance;
                  minVertex = vertex;
              }
          }
          return minVertex;
      }
  
      getShortestPath(origin: string, vertex: string) {
        if(!this.vertices.has(origin) || !this.vertices.has(vertex)) {
          throw Error('Vertex does not exist')
        };
        const table: DisjktraTable = this.dijkstra(origin);
        const path: Array<> = [];
        let nextVertex: string = vertex;
        while(nextVertex) {
          path.push(nextVertex);
          nextVertex = table.parents[nextVertex];
        }
        console.log('Final path: ', path.reverse());
      }
  }
  
  interface DisjktraTable {
    distances: Object;
    parents: Object;
  }
  
  
  let g = new Graph();
  
  g.addVertex('A');
  g.addVertex('B');
  g.addVertex('C');
  g.addVertex('D');
  g.addVertex('E');
  
  g.addEdge('A', 'B', 6);
  g.addEdge('A', 'D', 1);
  g.addEdge('B', 'A', 6);
  g.addEdge('B', 'D', 2);
  g.addEdge('B', 'E', 2);
  g.addEdge('B', 'C', 5);
  g.addEdge('D', 'A', 1);
  g.addEdge('D', 'B', 2);
  g.addEdge('D', 'E', 1);
  g.addEdge('E', 'C', 5);
  g.addEdge('E', 'D', 1);
  g.addEdge('E', 'B', 2);
  g.addEdge('C', 'B', 5);
  g.addEdge('C', 'B', 5);
  
  g.getShortestPath('A', 'C')