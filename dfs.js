const graph = {
  a: ["b", "c"],
  b: ["a", "d", "e"],
  c: ["a", "f", "g"],
  d: ["b"],
  e: ["b"],
  f: ["c"],
  g: ["c"],
};

function dfs(graph, node, visited = new Set()) {
  if (visited.has(node)) return; //means check whether node is already visited
  visited.add(node);

  for (const neighbour of graph[node]) {
    dfs(graph, neighbour, visited);
  }
}
