const graph = [[1, 2], [0, 3], [0, 3], [1, 2, 4], [3]];

function shortestPath(graph, start, target) {
  const queue = [start];
  const distance = Array(graph.length).fill(-1);
  const parent = Array(graph.length).fill(-1);

  distance[start] = 0;
  let head = 0;

  while (head < queue.length) {
    const node = queue[head++];

    if (node === target) break;

    for (const neighbor of graph[node]) {
      if (distance[neighbor] === -1) {
        distance[neighbor] = distance[node] + 1;
        parent[neighbor] = node;
        queue.push(neighbor);
      }
    }
  }

  if (distance[target] === -1) return null;

  const path = [];

  for (let node = target; node !== -1; node = parent[node]) {
    path.push(node);
  }

  path.reverse();

  return { distance: distance[target], path };
}

console(shortestPath(graph, 0, 4));
