# 3.11 Union Find — 練習題目

> 每題限時 **20 分鐘**，超時就看解答、隔天重做。用 Google Doc 或紙筆手寫。

## 代表題（先做這題把模板練熟）
- **Number of Connected Components in an Undirected Graph**（LeetCode 323）
  - 把每條邊 union 起來，最後回傳 `count`（連通塊數量）就是答案。

## 練習清單（對應文件第五梯：並查集）
| 題目 | 難度 | 重點 |
|------|------|------|
| Number of Connected Components (LC 323) | Medium | 本模板本體，數 count |
| Graph Valid Tree | Medium | n 個點恰 n-1 條邊 + 全連通，或用 union 偵測環 |
| Redundant Connection | Medium | union 回傳 False 的那條邊就是多餘的邊（偵測環）|
| Accounts Merge | Medium | 把共用 email 的帳號 union 在一起，再依根分組 |
| Number of Provinces | Medium | 鄰接矩陣，把相連城市 union，數 count |

## 20 分鐘限時提示
1. **~2 分**：先問清楚——節點編號從 0 還是 1？邊會重複嗎？是無向圖嗎？要回傳組數還是判斷連通？
2. **~8 分**：先講「用 DFS/BFS 也能做」，再說「用並查集能動態合併、單次近 O(1)」，點出路徑壓縮。
3. **~5 分**：邊寫邊講，記得 `parent[i]=i` 初始化、union 回傳 False 代表已同組。
4. **~5 分**：拿 `n=5, edges=[[0,1],[1,2],[3,4]]` dry run，逐步講 parent 變化與最後 count=2。

## 自我檢查
- [ ] 能默寫 find（含路徑壓縮）與 union
- [ ] 看到「connected components / same set / 偵測環」30 秒內判斷用並查集
- [ ] 能講清楚為什麼 union 回傳 False 可以偵測環
