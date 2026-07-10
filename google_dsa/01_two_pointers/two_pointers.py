"""Two Pointers（雙指標）模板。

什麼時候用：已排序陣列找一對數、判斷回文、原地移除、合併有序陣列。
訊號：sorted array、pair、回文。
"""


def two_sum_sorted(nums, target):
    """在『已排序』陣列中找兩數之和等於 target，回傳一對索引。

    時間 O(n)、空間 O(1)。
    """
    left, right = 0, len(nums) - 1
    while left < right:
        s = nums[left] + nums[right]
        if s == target:
            return [left, right]
        elif s < target:
            left += 1      # 太小，左邊往右
        else:
            right -= 1     # 太大，右邊往左
    return [-1, -1]
