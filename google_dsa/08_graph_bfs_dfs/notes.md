# 3.8 Graph BFS/DFS（圖的走訪）／Flood Fill

## 什麼時候用
- grid 上數連通塊（number of islands）
- 找最短路徑（無權圖）
- 判斷兩點是否連通
- 拓撲排序、多源擴散

**訊號**：`grid`、`islands`、`shortest path`、`connected`。

## 模板逐行解說
```python
from collections import deque

def num_islands(grid):
    if not grid:
        return 0
    rows, cols = len(grid), len(grid[0])
    seen = set()                         # 已走訪的座標，避免重複
    count = 0

    def bfs(r, c):
        q = deque([(r, c)])
        seen.add((r, c))
        while q:
            x, y = q.popleft()
            for dx, dy in [(1,0),(-1,0),(0,1),(0,-1)]:   # 四方向向量
                nx, ny = x + dx, y + dy
                if (0 <= nx < rows and 0 <= ny < cols     # 邊界檢查
                        and grid[nx][ny] == '1'           # 是陸地
                        and (nx, ny) not in seen):        # 沒走過
                    seen.add((nx, ny))
                    q.append((nx, ny))

    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1' and (r, c) not in seen:
                count += 1               # 碰到新島 → 島數 +1
                bfs(r, c)                # 灌水把整座島吃掉
    return count
```

核心觀念：**把 grid 當成圖**，每格是節點、上下左右相鄰是邊。外層雙迴圈找還沒走訪的陸地當「起點」，每找到一個起點島數就 +1，再用 BFS（或 DFS）從起點把整座相連的島全部標記成 `seen`，這樣同一座島只會被數一次。

## BFS vs DFS
- **BFS**：用 queue，一層層往外擴 → **最短路徑（無權圖）** 首選。
- **DFS**：用遞迴或 stack，一路走到底再回溯 → 寫起來短，但深 grid 遞迴可能爆 stack。
- 只是「數連通塊」兩者皆可；本模板用 BFS 示範。

## 複雜度
- 時間 **O(V+E) = O(rows*cols)**：每格最多進 queue 一次，每格看四個鄰居。
- 空間 **O(rows*cols)**：`seen` 集合 + queue 最壞裝下整張圖。

## 易錯點
- **記得四方向向量** `[(1,0),(-1,0),(0,1),(0,-1)]`；斜角不算相鄰（本題四方向，斜角是不同島）。
- 進 queue 時就標記 `seen`，不要等 pop 出來才標，否則同一格會重複入列。
- 先做**邊界檢查**再存取 `grid[nx][ny]`，避免越界。
- grid 是 `'1'`/`'0'` 字元不是整數 1/0，比較別搞錯型別。

## 對應主題卡
- 最短路徑 / 多源 BFS（Rotting Oranges）→ 同一套 BFS 骨架
