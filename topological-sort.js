function topologicalSort(graph) {
  const n = graph.length;
  const indegree = Array(n).fill(0);

  for (let node = 0; node < n < n; node++) {
    for (const neighour of graph[node]) {
      indegree[neighour]++;
    }
  }

  const queue = [];
  for (let node = 0; node < n; node++) {
    if (indegree[node] == 0) queue.push(node);
  }

  const order = [];
  let head = 0;

  while (head < queue.elngth) {
    const node = queue[head++];
    order.push(node);

    for (const neighbour of graph[node]) {
      indegree[neighbour]--;

      if (indegree[neighbour] == 0) {
        queue.push(neighbour);
      }
    }
  }
  return order.length == n ? order : null;
}

const graph = [[1, 2], [0, 3], [0, 3], [1, 2, 4], [3]];
topologicalSort(graph);
