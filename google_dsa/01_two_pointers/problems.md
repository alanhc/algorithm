# 3.1 Two Pointers — 練習題目

> 每題限時 **20 分鐘**，超時就看解答、隔天重做。用 Google Doc 或紙筆手寫。

## 代表題（先做這題把模板練熟）
- **Two Sum II - Input Array Is Sorted**（LeetCode 167）
  - 就是本主題模板本體，注意題目要求回傳 **1-based** 索引。

## 練習清單（對應文件第二梯：雙指標／字串）
| 題目 | 難度 | 重點 |
|------|------|------|
| Valid Palindrome | Easy | 左右指針往中間比對，跳過非英數字元 |
| Two Sum II (sorted) | Medium | 本模板本體 |
| Product of Array Except Self | Medium | 前綴×後綴兩次掃描（雙指針變形） |
| 3Sum | Medium | 排序後固定一個數 + 雙指針找另兩個 |
| Container With Most Water | Medium | 兩端往內收，移動較矮的那邊 |

## 20 分鐘限時提示
1. **~2 分**：先問清楚——有負數嗎？重複值？空陣列？回傳索引還是值？
2. **~8 分**：先講暴力 O(n²)，再說「因為已排序 → 雙指針降到 O(n)、空間 O(1)」。
3. **~5 分**：邊寫邊講，記得處理空陣列 / 單一元素。
4. **~5 分**：拿 `[2,7,11,15], target=9` dry run，逐步講 left/right 變化。

## 自我檢查
- [ ] 能默寫模板
- [ ] 看到「sorted + pair」30 秒內判斷用雙指標
- [ ] 能講出為什麼移動某一邊是安全的（單調性）
