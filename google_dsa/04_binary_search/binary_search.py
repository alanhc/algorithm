"""Binary Search（二分搜尋）模板。

什麼時候用：在『已排序』陣列中找目標；或「找滿足條件的最小/最大值」（答案單調性）。
訊號：sorted、minimum/maximum ... such that。
"""


def binary_search(nums, target):
    """在『已排序』陣列中找 target，回傳索引；找不到回傳 -1。

    時間 O(log n)、空間 O(1)。
    """
    left, right = 0, len(nums) - 1     # 閉區間 [left, right]
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1             # target 在右半，丟掉 mid 及左側
        else:
            right = mid - 1            # target 在左半，丟掉 mid 及右側
    return -1
