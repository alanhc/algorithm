# 3.12 String/Array + Sorting — 練習題目

> 每題限時 **20 分鐘**，超時就看解答、隔天重做。用 Google Doc 或紙筆手寫。

## 代表題（先做這題把模板練熟）
- **Valid Anagram**（LeetCode 242）
  - 字元計數比對，本主題 `is_anagram` 模板本體。
- **Merge Intervals**（LeetCode 56）
  - 排序後掃描，本主題 `merge_intervals` 模板本體。

## 練習清單（第一梯：基礎字元計數／排序）
| 題目 | 難度 | 重點 |
|------|------|------|
| Valid Anagram | Easy | 字元計數相等即為變位詞 |
| Contains Duplicate | Easy | 用 set/計數判斷有無重複 |
| Group Anagrams | Medium | 用排序後字串或計數當 key 分組 |

## 練習清單（第二梯：區間類）
| 題目 | 難度 | 重點 |
|------|------|------|
| Merge Intervals | Medium | 排序後掃描合併，本模板本體 |
| Insert Interval | Medium | 已排序下插入一段再合併 |
| Non-overlapping Intervals | Medium | 貪心：照結尾排序，算最少移除數 |

## 20 分鐘限時提示
1. **~2 分**：先問清楚——字串只有小寫嗎？區間端點相接算不算重疊？可以改動輸入嗎？
2. **~8 分**：anagram 先講排序 O(n log n)，再說「用計數降到 O(n)」；區間先講「排序後相鄰才可能重疊」。
3. **~5 分**：邊寫邊講，記得處理空輸入、單一元素、完全內含。
4. **~5 分**：拿 `[[1,3],[2,6],[8,10],[15,18]]` dry run，逐步講 merged 如何延伸與開新段。

## 自我檢查
- [ ] 能默寫 `is_anagram` 與 `merge_intervals` 兩個模板
- [ ] 看到「anagram / 字元計數」想到用 Counter
- [ ] 看到「區間 / interval」想到先排序再掃描
- [ ] 能講清楚為什麼排序後只需跟上一段比較
