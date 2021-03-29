/**
 * Definition for a binary tree node.
 */
function Node(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 *     1
 *    /\
 *   2  3
 *  /\  /\
 * 4 5 6  7
 */
let node4 = {left: null, right: null, val: 4 }; 
let node5 = {left: null, right: null, val: 5 }; 
let node6 = {left: null, right: null, val: 6 }; 
let node7 = {left: null, right: null, val: 7 };
let node3 = {left: node6, right: node7, val: 3 };
let node2 = {left: node4, right: node5, val: 2 };
let node1 = {left: node2, right: node3, val: 1 };

// 前序遍历
function preorderTraversal(root) {
  if (!root) return;

  let nodes = [];
  let stack = [root];
  while(stack.length) {
    let item = stack.pop();
    nodes.push(item.val);
    if (item.right) {
      stack.push(item.right);
    }
    if (item.left) {
      stack.push(item.left);
    }
  }

  return nodes;
}

// 中序遍历
function inorderTraversal(root) {
  if (!root) return;

  let nodes = [];
  let stack = [root];
  while(stack.length) {
    let item = stack[stack.length - 1];

    if (!item.left || (item.left && item.left.isOK)) {
      stack.pop();
      item.isOK = true;
      nodes.push(item.val);
      item.right && stack.push(item.right);
    } else if (item.left && !item.left.isOK) {
      stack.push(item.left);
    }
  }

  return nodes;
}

// 后序遍历
function postorderTraversal(root) {
  if (!root) return;

  let nodes = [];
  let stack = [root];
  while(stack.length) {
    let item = stack[stack.length - 1];

    if ((item.left === null && item.right === null) || (item.left && item.left.isOK && item.right && item.right.isOK) || (item.left && item.left.isOk && item.right == null) || (item.left == null && item.right && item.right.isOk)) {
      item.isOK = true;
      nodes.push(item.val);
      stack.pop();
    } else if (item.left && !item.left.isOK) {
      stack.push(item.left);
    } else if (item.right && !item.right.isOK) {
      stack.push(item.right);
    }
  }

  return nodes;
}

// 层次遍历
function levelOrder(root) {
  if (!root) return;

  let queue = [root];
  while(queue.length) {
    nodes.push([]);
    for (let i = 0; i < queue.length; i++) {
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
}
