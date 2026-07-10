# 3.9 Binary Heap — 練習題目

> 每題限時 **20 分鐘**，超時就看解答、隔天重做。用 Google Doc 或紙筆手寫。

## 代表題（先做這題把模板練熟）
- **Kth Largest Element in an Array**（LeetCode 215）
  - 就是本主題模板本體，維持大小為 k 的最小堆，堆頂即第 k 大。

## 練習清單（對應文件第四梯：Heap / priority queue）
| 題目 | 難度 | 重點 |
|------|------|------|
| Kth Largest Element in an Array | Medium | 本模板本體，大小 k 的最小堆 |
| Top K Frequent Elements | Medium | 先算頻率，再用 heap 取前 K 大 |
| Find Median from Data Stream | Hard | 雙 heap（大頂堆 + 小頂堆）平衡兩半 |
| Merge k Sorted Lists | Hard | 用 heap 每次取 k 個表頭最小者 |
| K Closest Points to Origin | Medium | 依距離維持大小 k 的堆 |

## 20 分鐘限時提示
1. **~2 分**：先問清楚——k 的範圍？資料量多大？要值還是索引？要不要排序輸出？
2. **~8 分**：先講排序 O(n log n)，再說「只要前 k → 維持大小 k 的堆降到 O(n log k)」。
3. **~5 分**：邊寫邊講，講清楚「前 k 大用最小堆、丟堆頂」的方向。
4. **~5 分**：拿 `[3,2,1,5,6,4], k=2` dry run，逐步講堆的 push/pop 變化。

## 自我檢查
- [ ] 能默寫模板
- [ ] 看到「top K / 第 K 大」30 秒內判斷用 heap
- [ ] 能講出為什麼「前 k 大用最小堆」而不是最大堆
- [ ] 記得 Python heapq 是最小堆、最大堆要取負值
