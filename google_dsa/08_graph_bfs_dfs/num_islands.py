"""Graph BFS/DFS（圖的走訪）／Flood Fill 模板。

什麼時候用：grid 上數連通塊、最短路徑、判斷連通、拓撲排序。
訊號：grid、islands、shortest path、connected。
BFS vs DFS：最短路用 BFS；四方向向量 [(1,0),(-1,0),(0,1),(0,-1)]。
"""

from collections import deque


def num_islands(grid):
    """數 grid 中有幾座島（'1' 陸地、'0' 海水，四方向連通）。

    時間 O(rows*cols) = O(V+E)、空間 O(rows*cols)。
    """
    if not grid:
        return 0
    rows, cols = len(grid), len(grid[0])
    seen = set()
    count = 0

    def bfs(r, c):
        q = deque([(r, c)])
        seen.add((r, c))
        while q:
            x, y = q.popleft()
            for dx, dy in [(1, 0), (-1, 0), (0, 1), (0, -1)]:   # 四方向
                nx, ny = x + dx, y + dy
                if (0 <= nx < rows and 0 <= ny < cols
                        and grid[nx][ny] == '1' and (nx, ny) not in seen):
                    seen.add((nx, ny))
                    q.append((nx, ny))

    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1' and (r, c) not in seen:
                count += 1      # 找到新島的起點
                bfs(r, c)       # 把整座島標記為 seen
    return count
