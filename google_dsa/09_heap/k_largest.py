"""Binary Heap（二元堆積 / priority queue）模板。

什麼時候用：找前 K 大 / 前 K 小、top K、串流中位數。
訊號：K largest/smallest、top K、串流中位數。
"""

import heapq


def k_largest(nums, k):
    """回傳最大的 k 個元素（順序不保證）。

    維持一個大小為 k 的最小堆，堆頂就是第 k 大。
    時間 O(n log k)、空間 O(k)。
    """
    heap = []
    for n in nums:
        heapq.heappush(heap, n)
        if len(heap) > k:
            heapq.heappop(heap)      # 丟掉最小的
    return heap                       # 堆內是最大的 k 個
