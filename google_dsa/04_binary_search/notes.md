# 3.4 Binary Search（二分搜尋）

## 什麼時候用
- 在『已排序』陣列中找目標值
- 找「滿足條件的最小/最大值」（答案具有單調性）
- 旋轉排序陣列的搜尋 / 找最小值

**訊號**：`sorted`、`minimum/maximum ... such that`。

## 模板逐行解說
```python
def binary_search(nums, target):
    left, right = 0, len(nums) - 1   # 閉區間 [left, right]
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1           # target 在右半，安全丟掉 mid 及左側
        else:
            right = mid - 1          # target 在左半，安全丟掉 mid 及右側
    return -1
```

核心觀念：**每次比較中間點，就能丟掉一半的候選**。因為陣列有序，`nums[mid]` 和 target 的大小關係能明確告訴我們答案在哪一半，所以搜尋範圍每步減半 → O(log n)。

## 也可用於「找滿足條件的最小/最大值」
只要答案具有**單調性**（例如「速度越快越吃得完」），就能對「答案」本身做二分，而不是對陣列做二分。把「這個候選答案可行嗎？」寫成一個判斷函式，再二分找出邊界（第一個可行 / 最後一個可行）。代表題：Koko Eating Bananas、First Bad Version。

## 複雜度
- 時間 **O(log n)**：每步搜尋範圍減半。
- 空間 **O(1)**：只用幾個索引（迭代版）。

## 易錯點
- 迴圈條件 `left <= right`（閉區間要用 `<=`，用 `<` 會漏掉最後一個元素）。
- 更新邊界要 `mid + 1` / `mid - 1`，否則區間沒縮小會**無限迴圈**。
- C++ / Java 算 mid 時用 `left + (right - left) / 2`，避免 `left + right` **整數溢位**。
- 想清楚回傳的是「索引」還是「值」。

## 對應主題卡
- 未排序找值 → [[03_hash_table]]
