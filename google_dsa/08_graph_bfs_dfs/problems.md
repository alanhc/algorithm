# 3.8 Graph BFS/DFS — 練習題目

> 每題限時 **20 分鐘**，超時就看解答、隔天重做。用 Google Doc 或紙筆手寫。

## 代表題（先做這題把模板練熟）
- **Number of Islands**（LeetCode 200）
  - 就是本主題模板本體，練熟「外層找起點 + BFS/DFS 灌水」的骨架。

## 練習清單（對應文件第三梯：圖 BFS/DFS）
| 題目 | 難度 | 重點 |
|------|------|------|
| Number of Islands | Medium | 本模板本體，連通塊計數 |
| Clone Graph | Medium | BFS/DFS + hash map 記錄原節點→複製節點 |
| Course Schedule | Medium | 拓撲排序（入度 BFS / DFS 找環） |
| Rotting Oranges | Medium | 多源 BFS，所有腐爛橘子同時入列 |
| Pacific Atlantic Water Flow | Medium | 從兩邊界反向 BFS/DFS，取交集 |

## 20 分鐘限時提示
1. **~2 分**：先問清楚——連通是四方向還是八方向？grid 可變動嗎（能否原地標記）？要最短路還是只要連通？
2. **~8 分**：說明「把 grid 當圖」，外層掃起點、內層 BFS/DFS 灌水；最短路才強調用 BFS。
3. **~5 分**：邊寫邊講，記得邊界檢查、進 queue 就標 `seen`、處理空 grid。
4. **~5 分**：拿 `[["1","1","0"],["1","0","0"],["0","0","1"]]` dry run，講清楚為什麼答案是 2。

## 自我檢查
- [ ] 能默寫 BFS 模板（含四方向向量）
- [ ] 看到「grid + connected / islands」30 秒內判斷用 BFS/DFS
- [ ] 能講出 BFS 為何適合無權圖最短路、複雜度 O(V+E)
