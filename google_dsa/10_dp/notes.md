# 3.10 Dynamic Programming（動態規劃）

## 什麼時候用
- count ways（數有幾種方法：爬樓梯、湊硬幣數法）
- min/max cost（最小/最大成本：最少硬幣數、最大和子序列）
- "can you reach"（能不能到達/湊得出來：Word Break、Coin Change 可行性）

**訊號**：`count ways`、`min/max cost`、`can you reach`。

## 初學路徑（強烈建議照這個順序）
DP 不要一開始就想「dp 表」。照這三階段，每一步都能驗證正確性：

1. **先寫暴力遞迴**：直接把「定義狀態 → 轉移方程」翻成遞迴，不管效率。
   會爬階梯就會寫：`f(n) = f(n-1) + f(n-2)`。這步確保邏輯正確。
2. **加 `@lru_cache` memo**：同樣的遞迴，加一行 decorator 就把指數級
   O(2ⁿ) 降到 O(n)。不改邏輯、只改效率，最安全。
3. **最後改 dp 表 / O(1) 迭代**：把由上而下改成由下而上，用陣列或
   幾個變數滾動，省掉遞迴堆疊。空間常可壓到 O(1)。

## 做法三步（面試講題框架）
1. **定義狀態**：`dp[i]` 代表什麼？→「爬到第 i 階的方法數」。
2. **轉移方程**：`dp[i]` 怎麼由更小的子問題組成？→ `dp[i]=dp[i-1]+dp[i-2]`。
3. **初始值與順序**：base case 是什麼、要以什麼順序填？→ `dp[1]=1, dp[2]=2`，由小到大。

## 模板逐行解說
```python
# 階段 1：暴力遞迴（會 TLE，但邏輯最清楚）
def climb_brute(n):
    if n <= 2:
        return n
    return climb_brute(n - 1) + climb_brute(n - 2)

# 階段 2：加 memo（一行 decorator，O(2^n) → O(n)）
from functools import lru_cache
@lru_cache(None)
def climb_stairs_memo(i):
    if i <= 2:
        return i
    return climb_stairs_memo(i - 1) + climb_stairs_memo(i - 2)

# 階段 3：dp 表 / O(1) 迭代（由下而上，只留兩個狀態）
def climb_stairs(n):
    if n <= 2:
        return n
    prev2, prev1 = 1, 2                       # dp[1]=1, dp[2]=2
    for _ in range(3, n + 1):
        prev2, prev1 = prev1, prev1 + prev2   # dp[i]=dp[i-1]+dp[i-2]
    return prev1
```

核心觀念：**大問題拆成重疊的子問題，把子問題答案記下來重複利用**。爬到第 i 階的
最後一步只可能是「從 i-1 跨 1 階」或「從 i-2 跨 2 階」，兩條路互斥且涵蓋所有情況，
所以 `dp[i]=dp[i-1]+dp[i-2]`。

## 複雜度
- 時間 **O(n)**：每個狀態只算一次（memo 或迭代都是）。
- 空間：memo 遞迴 **O(n)**（快取 + 遞迴堆疊）；O(1) 迭代 **O(1)**（只留兩個變數）。
- 對照暴力遞迴的 **O(2ⁿ)**，這就是 DP 的價值。

## 易錯點
- **base case 要對齊**：這裡 `n<=2` 直接回 n（dp[1]=1, dp[2]=2），別寫成費氏的 dp[1]=dp[2]=1。
- **滾動更新順序**：`prev2, prev1 = prev1, prev1 + prev2` 要用同時賦值，先算右側再一起指派，別分兩行寫錯。
- **先確定狀態定義再寫轉移**：狀態沒定義清楚，轉移方程一定亂。
- **大 n 可能溢位**：C++ 用 `long long`，Python 整數無限精度不用擔心。

## 對應主題卡
- 選擇/搜尋類的窮舉 → [[09_backtracking]]
- 需要前綴和加速的區間問題 → 前綴和技巧
