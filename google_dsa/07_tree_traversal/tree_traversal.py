"""Tree Traversal（樹的走訪）模板。

什麼時候用：走訪二元樹、依層處理節點、BST 取排序結果、找最短/最長路徑。
訊號：binary tree、level、depth、BST。
"""

from collections import deque


class TreeNode:
    """二元樹節點。"""

    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def inorder(root, out):
    """DFS 中序：左 -> 根 -> 右（BST 會得到排序結果）。

    時間 O(n)、空間 O(h)（h 為樹高，遞迴堆疊）。
    """
    if not root:
        return
    inorder(root.left, out)
    out.append(root.val)       # 根在左子樹之後、右子樹之前
    inorder(root.right, out)


def inorder_traversal(root):
    """中序走訪的薄包裝，回傳一個 list（方便測試）。"""
    out = []
    inorder(root, out)
    return out


def level_order(root):
    """BFS 層序：一次處理一整層，回傳每層一個 list。

    時間 O(n)、空間 O(n)（佇列最多裝一整層）。
    """
    if not root:
        return []
    q, result = deque([root]), []
    while q:
        level = []
        for _ in range(len(q)):       # 固定這一層的節點數
            node = q.popleft()
            level.append(node.val)
            if node.left:  q.append(node.left)
            if node.right: q.append(node.right)
        result.append(level)
    return result
