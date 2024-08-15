# Definition for a binary tree node.
from typing import Optional

# 2024/07/20: 1st try
# time: O(n), space: O(n)
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        def isSameTree(p, q):
            if not p and not q: # two empty trees are the same
                return True
            if not p or not q: # if one of them is empty, they are not the same
                return False
            return p.val == q.val and isSameTree(p.left, q.left) and isSameTree(p.right, q.right)
        if not root:
            return False
        return isSameTree(root, subRoot) or self.isSubtree(root.left, subRoot) or self.isSubtree(root.right, subRoot)