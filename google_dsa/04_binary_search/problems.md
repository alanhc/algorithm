# 3.4 Binary Search — 練習題目

> 每題限時 **20 分鐘**，超時就看解答、隔天重做。用 Google Doc 或紙筆手寫。

## 代表題（先做這題把模板練熟）
- **Binary Search**（LeetCode 704）
  - 就是本主題模板本體，練熟 `left <= right` 與 `mid ± 1` 的邊界。

## 練習清單（對應文件第四梯：二分搜尋）
| 題目 | 難度 | 重點 |
|------|------|------|
| Binary Search | Easy | 本模板本體，注意閉區間與邊界更新 |
| Search in Rotated Sorted Array | Medium | 先判斷哪半有序，再決定往哪半找 |
| Find Minimum in Rotated Sorted Array | Medium | 用 mid 與 right 比較收斂到最小值 |
| Koko Eating Bananas | Medium | 對「答案」二分（答案單調性）|
| First Bad Version | Easy | 找第一個滿足條件的位置（邊界二分）|

## 20 分鐘限時提示
1. **~2 分**：先問清楚——陣列有排序嗎？有重複值？空陣列？回傳索引還是值？
2. **~8 分**：先講線性 O(n)，再說「因為已排序 / 答案單調 → 二分降到 O(log n)」。
3. **~5 分**：邊寫邊講，講清楚迴圈條件與邊界更新（避免無限迴圈）。
4. **~5 分**：拿 `[1,3,5,7,9], target=4` dry run，逐步講 left/mid/right 變化與回傳 -1。

## 自我檢查
- [ ] 能默寫模板
- [ ] 看到「sorted」或「minimum/maximum such that」30 秒內判斷用二分
- [ ] 能說清楚為什麼每步能安全丟掉一半（單調性）
- [ ] 記得 mid 用 `left + (right-left)/2` 防溢位
