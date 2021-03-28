/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let nodes = []
  if (!root) {
    return []
  }

  let queue = [];
  queue.push(root);
  while(queue.length) {
    const currSize = queue.length;
    nodes.push([])
    for (let i = 1; i <= currSize; ++i) {
      const node = queue.shift();
      nodes[nodes.length - 1].push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  return nodes;
};