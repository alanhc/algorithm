# 3.2 Sliding Window — 練習題目

> 每題限時 **20 分鐘**，超時就看解答、隔天重做。用 Google Doc 或紙筆手寫。

## 代表題（先做這題把模板練熟）
- **Longest Substring Without Repeating Characters**（LeetCode 3）
  - 就是本主題模板本體，注意用 `seen[ch] >= left` 判斷重複是否還在視窗內。

## 練習清單（對應文件第二梯：雙指標／滑動視窗）
| 題目 | 難度 | 重點 |
|------|------|------|
| Longest Substring Without Repeating Characters | Medium | 本模板本體 |
| Minimum Window Substring | Hard | 縮左界找最短視窗 + 頻率表計數 |
| Longest Repeating Character Replacement | Medium | 視窗內「最多字元數 + K」判斷是否合法 |
| Max Consecutive Ones III | Medium | 至多翻 K 個 0，維持最長全 1 視窗 |
| Fruit Into Baskets | Medium | 至多 2 種類別的最長視窗 |

## 20 分鐘限時提示
1. **~2 分**：先問清楚——字元集範圍（ASCII？unicode？）？空字串？要長度還是子字串本身？
2. **~8 分**：先講暴力 O(n²) 枚舉所有子字串，再說「用滑動視窗讓 left 只前進 → O(n)」。
3. **~5 分**：邊寫邊講，強調 `seen[ch] >= left` 避免把左界往回拉的陷阱。
4. **~5 分**：拿 `"abba"` dry run，逐步講 left / seen 變化（處理第二個 a 時 left 不能回退）。

## 自我檢查
- [ ] 能默寫模板
- [ ] 看到「substring / subarray + longest / at most K」30 秒內判斷用滑動視窗
- [ ] 能講出為什麼 left 只前進總複雜度就是 O(n)（每元素進出各一次）
- [ ] 能解釋 `seen[ch] >= left` 判斷在 `"abba"` 為何必要
