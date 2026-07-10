# 3.7 Tree Traversal — 練習題目

> 每題限時 **20 分鐘**，超時就看解答、隔天重做。用 Google Doc 或紙筆手寫。

## 代表題（先做這題把模板練熟）
- **Binary Tree Level Order Traversal**（LeetCode 102）
  - 就是本主題 BFS 層序模板本體，注意用 `len(q)` 先凍結每層節點數。

## 練習清單（對應文件第三梯：樹／走訪）
| 題目 | 難度 | 重點 |
|------|------|------|
| Binary Tree Level Order Traversal | Medium | 本模板本體，BFS 分層 |
| Invert Binary Tree | Easy | 遞迴交換左右子樹 |
| Maximum Depth of Binary Tree | Easy | DFS 回傳 `1 + max(左, 右)` |
| Same Tree | Easy | 同步遞迴比對兩棵樹 |
| Validate Binary Search Tree | Medium | 中序遞增，或帶上下界遞迴 |

## 20 分鐘限時提示
1. **~2 分**：先問清楚——節點值有重複嗎？可能是空樹嗎？要回傳值還是節點？
2. **~8 分**：先判斷 DFS 還是 BFS——「依層 / 最短」用 BFS，「路徑 / 深度 / 排序」用 DFS。
3. **~5 分**：邊寫邊講，記得處理空樹 / 單一節點。
4. **~5 分**：拿 `[1,null,2,3]` dry run，逐步講佇列或遞迴堆疊的變化。

## 自我檢查
- [ ] 能默寫 DFS 中序與 BFS 層序兩個模板
- [ ] 看到「binary tree + level」30 秒內判斷用 BFS
- [ ] 能講出中序為什麼在 BST 會得到排序結果
