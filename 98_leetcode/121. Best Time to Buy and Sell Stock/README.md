## 題目
You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.  
您得到一個陣列 `prices`，其中 `prices[i]` 是給定股票在`第 i` 天的價格。

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.  
您希望通過選擇**一天**購買一隻股票並選擇**未來的不同日期**出售該股票來最大化您的利潤。

Return _the maximum profit you can achieve from this transaction_. If you cannot achieve any profit, return `0`.  
返回_您可以從此交易中獲得的最大利潤_。如果您無法獲得任何利潤，則返回 `0`。

**Example 1:  範例 1：**

**Input:** prices = [7,1,5,3,6,4]
**Output:** 5
**Explanation:** Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

**Example 2:  範例 2：**

**Input:** prices = [7,6,4,3,1]
**Output:** 0
**Explanation:** In this case, no transactions are done and the max profit = 0.

**Constraints:  約束：**

- `1 <= prices.length <= 105`  
    `1 <= 價格.length <= 105`
- `0 <= prices[i] <= 104`  
    `0 <= 價格[i] <= 104`
## 思路
-  $10^5$ 應該可以用暴力解O($n^2$)
- 找全域最大利潤，可以使用Greedy
- 時間複雜度 O(n) 空間複雜度O(1)
```
min_price = price[0]
max_profit = 0
for p in prices:
	if p<min_price:
		min_price=p
	elif p - min_price > max_profit:
		max_profit = p - min_price
return max_profit
```

## Follow up
- nope