# 3.11 Union Find（並查集）

## 什麼時候用
- 判斷兩個元素是否在同一組（same set）
- 動態計算連通塊數量（connected components）
- 偵測無向圖是否成環（union 時發現兩端已同組）
- 集合合併類問題（帳號合併、朋友圈）

**訊號**：`groups`、`connected components`、`are they in the same set`。

## 模板逐行解說
```python
class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))     # 一開始每個節點自成一組（parent 指向自己）
        self.count = n                   # 連通塊數量

    def find(self, x):
        while self.parent[x] != x:
            self.parent[x] = self.parent[self.parent[x]]  # 路徑壓縮：接到祖父，壓平樹
            x = self.parent[x]
        return x                         # 回傳根（代表元素）

    def union(self, a, b):
        ra, rb = self.find(a), self.find(b)
        if ra == rb:
            return False                 # 已同組 → 偵測到環，不再合併
        self.parent[ra] = rb             # 把一組的根掛到另一組的根下
        self.count -= 1                  # 兩組變一組
        return True

    def connected(self, a, b):
        return self.find(a) == self.find(b)   # 同根即同組
```

核心觀念：**用「樹的根」代表一個集合**。同一組的元素最終都指向同一個根，所以「是否同組」就退化成「根是否相同」。`find` 沿著 parent 往上爬到根；路徑壓縮在爬的過程中把節點直接接近根，讓樹越來越扁。

## 複雜度
- 時間 **近似 O(1)**（均攤）：只做路徑壓縮時，單次操作接近常數，嚴格上界是 O(log n)；再加上按秩合併可達反阿克曼函數 α(n)，實務上視為常數。
- 空間 **O(n)**：一個 parent 陣列。

## 易錯點
- **union 是 C++ 保留字**：C++ 版方法要改名 `unite`。
- `union` 回傳值的語意：**回傳 False 代表本來就同組**，正好拿來偵測環（Redundant Connection）。
- 別忘了初始化 `parent[i] = i`（C++ 可用 `iota`）。
- 要算連通塊數量就在成功合併時 `count -= 1`，不要在 `find` 裡改。

## 對應主題卡
- 圖的走訪（另一種找連通塊的方式）→ [[10_graph_bfs_dfs]]
