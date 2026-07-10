"""String/Array 基本操作 + Sorting 模板。

什麼時候用：判斷變位詞（字元計數）、區間合併（排序後掃描）。
訊號：anagram、字元計數、區間合併、排序後掃描。
"""

from collections import Counter


def is_anagram(a, b):
    """判斷 a、b 是否為變位詞（同一組字元重新排列）。

    時間 O(n)、空間 O(k)（k 為字元種類數）。
    """
    return Counter(a) == Counter(b)   # 計數相同即為變位詞


def merge_intervals(intervals):
    """合併所有重疊的區間。

    時間 O(n log n)（排序主導）、空間 O(n)。
    """
    intervals.sort(key=lambda x: x[0])   # 先照起點排序
    merged = []
    for start, end in intervals:
        if merged and start <= merged[-1][1]:   # 有重疊
            merged[-1][1] = max(merged[-1][1], end)
        else:
            merged.append([start, end])
    return merged
