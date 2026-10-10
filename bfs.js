const graph = {
  a: ["b", "c"],
  b: ["a", "d", "e"],
  c: ["a", "f", "g"],
  d: ["b"],
  e: ["b"],
  f: ["c"],
  g: ["c"],
};

// ALGO
// BFS (FIFO) queue
// visit each add neighbour to queue & put it in ordered array & remove visited one

function bfs(graph, start) {
  const queue = [start];
  const visited = new Set(start);
  const order = [];

  while (queue.length > 0) {
    const node = queue.shift();
    order.push(node);

    for (const neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        visited.push(neighbour);
        queue.push(neighbour);
      }
    }
  }
}
