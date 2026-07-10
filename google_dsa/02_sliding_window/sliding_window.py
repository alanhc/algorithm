"""Sliding Window（滑動視窗）模板。

什麼時候用：連續子字串／子陣列的最長、最短、或「至多 K 個」問題。
訊號：substring、subarray、longest / shortest / at most K。
"""


def longest_unique_substring(s):
    """回傳『不含重複字元』的最長子字串長度。

    時間 O(n)、空間 O(k)（k = 字元集大小）。
    """
    seen = {}                        # 字元 -> 最後出現的 index
    left = 0
    best = 0
    for right, ch in enumerate(s):
        if ch in seen and seen[ch] >= left:
            left = seen[ch] + 1      # 縮小視窗左界
        seen[ch] = right
        best = max(best, right - left + 1)
    return best
