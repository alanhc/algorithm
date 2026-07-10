"""Dynamic Programming（動態規劃）模板 — 以爬樓梯（Climbing Stairs）為例。

什麼時候用：count ways（數方法數）、min/max cost（最小/最大成本）、
"can you reach"（能不能到達）。
訊號：count ways、min/max cost、can you reach。

做法三步：定義狀態 → 轉移方程 → 初始值與順序。
以下同時給出 memo 遞迴與 O(1) 空間迭代兩種寫法，展示推薦的學習進程。
"""

from functools import lru_cache


# 迭代 O(1) 空間：只保留前兩個狀態，滾動更新。
def climb_stairs(n):
    """爬 n 階，每次可走 1 或 2 階，回傳有幾種爬法。

    時間 O(n)、空間 O(1)。
    """
    if n <= 2:
        return n
    prev2, prev1 = 1, 2                       # dp[1]=1, dp[2]=2
    for _ in range(3, n + 1):
        prev2, prev1 = prev1, prev1 + prev2   # dp[i]=dp[i-1]+dp[i-2]
    return prev1


# memo 遞迴：由上而下，@lru_cache 幫我們記住已算過的子問題。
@lru_cache(None)
def climb_stairs_memo(i):
    """與 climb_stairs 等價的遞迴版本。時間 O(n)、空間 O(n)（遞迴 + 快取）。"""
    if i <= 2:
        return i
    return climb_stairs_memo(i - 1) + climb_stairs_memo(i - 2)
