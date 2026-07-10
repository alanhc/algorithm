"""Hash Table（雜湊表）模板。

什麼時候用：未排序陣列找一對數、統計出現次數、判斷是否存在。
訊號：找一對、出現次數、是否存在。
"""


def two_sum(nums, target):
    """在『未排序』陣列中找兩數之和等於 target，回傳一對索引。

    時間 O(n)、空間 O(n)。
    """
    seen = {}                          # 值 -> index
    for i, n in enumerate(nums):
        if target - n in seen:         # 需要的另一半出現過嗎
            return [seen[target - n], i]
        seen[n] = i
    return []
