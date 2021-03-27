# mergeTwoLists

## 问题
输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。  
示例：
```
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
```

## 思路
使用双指针遍历两个连表，初始化一个节点，然后按照 l1 和 l2 的大小顺序交替遍历，直至其中一个节点为空，遍历完成，剩余部分合并至 dum 链表，最终返回 `dum.next`即可

[传送门](https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/)
