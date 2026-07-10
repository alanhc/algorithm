# 3.9 Binary Heap（二元堆積 / priority queue）

## 什麼時候用
- 找前 K 大 / 前 K 小（K largest / smallest）
- top K 類問題（出現頻率、距離…）
- 串流中位數（雙 heap）
- 每次都要拿「當前最小 / 最大」的場景

**訊號**：`K largest/smallest`、`top K`、`串流中位數`。

## 模板逐行解說
```python
import heapq
def k_largest(nums, k):
    heap = []                        # 維持一個大小為 k 的最小堆
    for n in nums:
        heapq.heappush(heap, n)      # 先放進去
        if len(heap) > k:
            heapq.heappop(heap)      # 超過 k 個就丟掉最小的
    return heap                       # 堆內剩下的就是最大的 k 個
```

核心觀念：**只留 k 個候選，堆頂永遠是這 k 個裡最小的（也就是第 k 大）**。每來一個新數就跟堆頂比，比堆頂大才有資格留下 → 掃完一遍就得到前 k 大。

## Python heapq 小抄
- `heapq` 是**最小堆**：`heappop` 拿出的是最小值。
- 要**最大堆**：把值取負 `-n` 推進去，取出再取負回來。
- `heappush` / `heappop` 各為 O(log k)。

## 複雜度
- 時間 **O(n log k)**：每個元素做一次 push/pop，堆大小維持在 k。
- 空間 **O(k)**：堆最多只放 k 個。
- 對比：整個排序是 O(n log n)，當 k 遠小於 n 時，堆更快。

## 易錯點
- 要「前 k 大」用**最小堆**（丟最小的），要「前 k 小」用**最大堆**（丟最大的），別搞反。
- 回傳順序**不保證**：堆內部不是排序好的，需要排序請自己再 `sorted`。
- `heapq` 沒有現成最大堆，記得取負值的技巧。

## 對應主題卡
- 需要「當前最大 / 最小」快速取用，常搭配 greedy、排序後掃描。
