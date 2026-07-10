# 3.6 Linked List — 練習題目

> 每題限時 **20 分鐘**，超時就看解答、隔天重做。用 Google Doc 或紙筆手寫。

## 代表題（先做這題把模板練熟）
- **Reverse Linked List**（LeetCode 206）
  - 就是本主題模板本體，練到能不看筆記默寫 prev / curr / nxt 三指標。

## 練習清單（對應文件第一梯：鏈結串列）
| 題目 | 難度 | 重點 |
|------|------|------|
| Reverse Linked List | Easy | 本模板本體 |
| Merge Two Sorted Lists | Easy | dummy head + 逐一比較接上較小的 |
| Linked List Cycle | Easy | 快慢指標（Floyd），相遇即有環 |
| Middle of the Linked List | Easy | 快慢指標，fast 到底 slow 剛好在中點 |
| Remove Nth Node From End of List | Medium | dummy head + 快指標先走 N 步 |

## 20 分鐘限時提示
1. **~2 分**：先問清楚——會不會有環？空串列？要不要改原串列還是回新串列？
2. **~8 分**：先講清楚指標怎麼移動，強調「斷鏈前先存 next」。
3. **~5 分**：邊寫邊講，記得處理空串列 / 單一節點；動到頭的用 dummy head。
4. **~5 分**：拿 `[1,2,3]` dry run，逐步畫出 prev/curr/nxt 與箭頭方向。

## 自我檢查
- [ ] 能默寫反轉模板
- [ ] 看到「反轉／原地調整指標」能想到 prev/curr/nxt 三指標
- [ ] 能講出為什麼斷鏈前要先存 next、為什麼回傳 prev
- [ ] 知道何時該用 dummy head、何時該用快慢指標
