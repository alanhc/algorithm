# 3.1 Two Pointers（雙指標）

## 什麼時候用
- 已排序陣列找一對數（two sum sorted）
- 判斷回文
- 原地移除元素
- 合併兩個有序陣列

**訊號**：`sorted array`、`pair`、`回文`。

## 模板逐行解說
```python
def two_sum_sorted(nums, target):
    left, right = 0, len(nums) - 1   # 一個從頭、一個從尾
    while left < right:
        s = nums[left] + nums[right]
        if s == target:
            return [left, right]
        elif s < target:
            left += 1                # 和太小 → 左指針右移讓和變大
        else:
            right -= 1               # 和太大 → 右指針左移讓和變小
    return [-1, -1]
```

核心觀念：**兩指針從兩端往中間收斂**。因為陣列有序，移動哪一邊會讓總和變大或變小是可預測的，所以每步都能安全丟掉一個不可能的候選 → 一次掃完 O(n)。

## 複雜度
- 時間 **O(n)**：每個元素最多被一個指針經過一次。
- 空間 **O(1)**：只用兩個索引。

## 易錯點
- **前提是已排序**：沒排序不能用這招（改用 hash table，見 3.3）。
- 迴圈條件是 `left < right`（不是 `<=`），避免同一個元素用兩次。
- 想清楚回傳的是「索引」還是「值」。

## 對應主題卡
- 未排序版的 two sum → [[03_hash_table]]
