# 3.12 String/Array 基本操作 + Sorting

## 什麼時候用
- 判斷兩字串是否為變位詞（anagram）
- 用字元計數比對兩組資料是否相同
- 合併重疊的區間（merge intervals）
- 先排序再一次掃描解決問題（sort then sweep）

**訊號**：`anagram`、`字元計數`、`區間合併`、`排序後掃描`。

## 模板逐行解說
```python
from collections import Counter

def is_anagram(a, b):
    return Counter(a) == Counter(b)   # 每個字元出現次數都相同即為變位詞

def merge_intervals(intervals):
    intervals.sort(key=lambda x: x[0])         # 先照起點排序
    merged = []
    for start, end in intervals:
        if merged and start <= merged[-1][1]:  # 起點落在上一段結尾之內 → 重疊
            merged[-1][1] = max(merged[-1][1], end)  # 延伸結尾
        else:
            merged.append([start, end])        # 沒重疊，開新的一段
    return merged
```

核心觀念：
- **變位詞 = 多重集合相等**。只要每個字元的計數一致，順序不影響，用 `Counter` 一次算完。
- **區間合併 = 排序後掃描**。照起點排序後，重疊的區間一定相鄰，因此只要跟「上一段」比較即可，一次掃完。

## 複雜度
- `is_anagram`：時間 **O(n)**、空間 **O(k)**（k 為字元種類數）。
- `merge_intervals`：時間 **O(n log n)**（排序主導）、空間 **O(n)**（輸出）。

## 易錯點
- 變位詞要先確認**長度不同就直接 false**（C++ 手寫計數時很有用，可提早剪枝）。
- 合併判斷用 `start <= merged[-1][1]`：端點相接（如 `[1,4]` 與 `[4,5]`）算不算重疊要問清楚，本模板算重疊。
- 延伸結尾要用 `max(...)`，因為後一段可能被前一段完全內含（如 `[1,4]` 吃掉 `[2,3]`）。
- 一定要**先排序**再掃描，否則相鄰假設不成立。

## 對應主題卡
- 未排序找一對數（雜湊計數）→ [[03_hash_table]]
- 兩端往中間收斂 → [[01_two_pointers]]
