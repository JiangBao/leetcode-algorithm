# maxTreeDepth

## 问题
输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。

例如：

给定二叉树 [3,9,20,null,null,15,7]，
```
    3
   / \
  9  20
    /  \
   15   7
```
返回它的最大深度 3 。

## 思路
深度遍历，递归遍历左右子树，最终`depth = Math.max(left, right) + 1`

[传送门](https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/)
