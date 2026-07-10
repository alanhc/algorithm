# 3.7 Tree Traversal（樹的走訪）

## 什麼時候用
- 走訪二元樹的所有節點（前序 / 中序 / 後序）
- 依「層」處理節點（level order）
- BST 想取得排序結果（中序）
- 找最短路徑、樹的深度（BFS 一層層擴散）

**訊號**：`binary tree`、`level`、`depth`、`BST`。

## 模板逐行解說
```python
# DFS 中序：左 -> 根 -> 右（BST 會得到排序結果）
def inorder(root, out):
    if not root:                 # 走到空節點就回頭
        return
    inorder(root.left, out)      # 先把左子樹走完
    out.append(root.val)         # 再處理自己（根）
    inorder(root.right, out)     # 最後走右子樹

from collections import deque
def level_order(root):
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
```

核心觀念：
- **DFS（遞迴）**：把「處理自己」放在左右子樹之間就是中序；放最前面是前序、放最後面是後序。
- **BFS（佇列）**：用一個 `for _ in range(len(q))` 先「凍結」當前這層的節點數，處理完這批才會碰到下一層 → 自然分層。

## 複雜度
- 時間 **O(n)**：每個節點剛好被走訪一次。
- 空間：
  - DFS **O(h)**（h 為樹高，遞迴堆疊；最壞退化成鏈狀是 O(n)）。
  - BFS **O(n)**（佇列最多同時裝一整層，最寬的一層可到 n/2）。

## 易錯點
- **空樹**：`inorder` 要先判 `not root`；`level_order` 要先回傳 `[]`。
- BFS 分層一定要先存 `len(q)` 再迴圈，不能邊跑邊用 `len(q)`（它會一直變）。
- 中序只有在 **BST** 才會是排序結果，一般二元樹不保證。
- 遞迴 DFS 在極深的樹可能爆堆疊，必要時改用明確的 stack 迭代。

## 對應主題卡
- 圖的走訪（BFS/DFS 通用版）→ [[08_graph]]
