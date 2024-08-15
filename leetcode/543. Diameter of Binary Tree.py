# Definition for a binary tree node.
from typing import Optional

# 2024/07/23: 1st try
# time: O(n), space: O(1)
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        # dfs returns the depth of the tree
        def dfs(node):
            if not node:
                return 0
            left = dfs(node.left)
            right = dfs(node.right)
            self.ans = max(self.ans, left + right)
            return max(left, right) + 1
        self.ans = 0
        dfs(root)
        return self.ans
        