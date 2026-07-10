# 3.10 Dynamic Programming — 練習題目

> 每題限時 **20 分鐘**，超時就看解答、隔天重做。用 Google Doc 或紙筆手寫。

## 代表題（先做這題把模板練熟）
- **Climbing Stairs**（LeetCode 70）
  - 就是本主題模板本體。先寫暴力遞迴 → 加 `@lru_cache` → 最後改 dp 表 / O(1) 迭代，把整個進程走一遍。

## 練習清單（對應文件第五梯：動態規劃）
| 題目 | 難度 | 重點 |
|------|------|------|
| Climbing Stairs | Easy | 本模板本體，count ways，`dp[i]=dp[i-1]+dp[i-2]` |
| House Robber | Medium | 選/不選的取捨，`dp[i]=max(dp[i-1], dp[i-2]+nums[i])` |
| Coin Change | Medium | min cost，`dp[a]=min(dp[a-c]+1)`，湊不出回 -1 |
| Longest Increasing Subsequence | Medium | `dp[i]` = 以 i 結尾的 LIS 長度；進階用二分到 O(n log n) |
| Word Break | Medium | can you reach，`dp[i]` = 前 i 個字元能否被字典切開 |

## 20 分鐘限時提示
1. **~2 分**：先問清楚——輸入範圍多大？要「方法數」還是「最小成本」還是「可行性」？有負數/重複嗎？
2. **~8 分**：先講暴力遞迴（定義狀態 → 轉移方程），再說「子問題重疊 → 加 memo 降到 O(n)」。
3. **~5 分**：邊寫邊講，先寫 memo 遞迴最穩，時間夠再改 O(1) dp 表。
4. **~5 分**：拿小輸入（如 n=4）dry run，逐步填 dp[1]..dp[4] 驗證轉移方程。

## 自我檢查
- [ ] 能默寫 memo 遞迴與 O(1) 迭代兩種寫法
- [ ] 看到「count ways / min-max cost / can you reach」能聯想到 DP
- [ ] 能清楚講出「定義狀態 → 轉移方程 → 初始值與順序」三步
- [ ] 能說明為什麼 memo 把 O(2ⁿ) 降到 O(n)（子問題重疊）
