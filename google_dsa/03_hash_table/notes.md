# 3.3 Hash Table（雜湊表）

## 什麼時候用
- 未排序陣列找一對數（two sum）
- 統計元素出現次數
- 判斷某個東西是否存在 / 是否重複

**訊號**：`找一對`、`出現次數`、`是否存在`。

## 模板逐行解說
```python
def two_sum(nums, target):
    seen = {}                          # 值 -> index
    for i, n in enumerate(nums):
        if target - n in seen:         # 需要的另一半出現過嗎
            return [seen[target - n], i]
        seen[n] = i
    return []
```

核心觀念：**用空間換時間**。邊掃邊把看過的值記進 dict，對每個數只要 O(1) 反查「需要的另一半」是否出現過，一次掃完 O(n)，不用先排序。

## 複雜度
- 時間 **O(n)**：每個元素進 dict 一次、查詢一次都是平均 O(1)。
- 空間 **O(n)**：最壞情況要存下所有元素。

## 易錯點
- **dict 存的是值還是 index**：這裡存「值 -> index」，回傳時要拿 index。
- **重複值處理**：`[3, 3]` 也要能配對成功——先查再寫入，才不會用到自己。
- 未排序才用 hash table；若**已排序**可改用雙指標 [[01_two_pointers]]（空間降到 O(1)）。

## 對應主題卡
- 已排序版的 two sum → [[01_two_pointers]]
