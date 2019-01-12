const largestValue = (root) => {
  let results = []
  const dfs = (node, depth) => {
    if (!node) return
    if (!results[depth]) results[depth] = node.val
    else results[depth] = Math.max(results[depth], node.val)
    dfs(node.left, depth+1)
    dfs(node.right, d+1)
  }

  dfs(root, 0)
  return results
}