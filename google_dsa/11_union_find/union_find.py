"""Union Find（並查集）模板。

什麼時候用：判斷元素是否在同一組、計算連通塊數量、偵測無向圖的環。
訊號：groups、connected components、"are they in the same set"。
"""


class UnionFind:
    """並查集：路徑壓縮版本，另維護 count（連通塊數量）方便測試。"""

    def __init__(self, n):
        self.parent = list(range(n))
        self.count = n              # 一開始每個節點自成一組

    def find(self, x):
        """回傳 x 所屬集合的代表（根），順便做路徑壓縮。"""
        while self.parent[x] != x:
            self.parent[x] = self.parent[self.parent[x]]  # 路徑壓縮
            x = self.parent[x]
        return x

    def union(self, a, b):
        """合併 a、b。已同組回傳 False（可用來偵測環），否則合併後回傳 True。"""
        ra, rb = self.find(a), self.find(b)
        if ra == rb:
            return False           # 本來就同一組（可用來偵測環）
        self.parent[ra] = rb
        self.count -= 1            # 兩組合成一組，連通塊少一個
        return True

    def connected(self, a, b):
        """a、b 是否在同一組。"""
        return self.find(a) == self.find(b)
