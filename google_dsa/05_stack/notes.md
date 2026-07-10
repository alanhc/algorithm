# 3.5 Stack（堆疊）

## 什麼時候用
- 判斷括號是否合法配對
- 巢狀結構的成對處理（如標籤、括號）
- 「下一個更大元素」（next greater element）
- 逆波蘭表達式求值、Min Stack 等

**訊號**：`valid parentheses`、`nested`、`next greater`。

## 模板逐行解說
```python
def is_valid_parentheses(s):
    pairs = {')': '(', ']': '[', '}': '{'}   # 右括號 → 對應的左括號
    stack = []
    for ch in s:
        if ch in pairs:                      # 遇到右括號
            if not stack or stack[-1] != pairs[ch]:
                return False                 # 沒東西可配 or 種類不符 → 失敗
            stack.pop()                      # 成功配對，彈出對應左括號
        else:                                # 左括號入堆
            stack.append(ch)
    return not stack                         # 全部配對完（堆空）才對
```

核心觀念：**後進先出（LIFO）**。最近遇到的左括號，一定要最先被閉合，這正是堆疊的特性。左括號進堆等待、右括號來時就檢查堆頂是否為對應的左括號 → 一次掃完 O(n)。

## 複雜度
- 時間 **O(n)**：每個字元入堆、出堆各一次。
- 空間 **O(n)**：最壞情況（全是左括號）堆疊會存下所有字元。

## 易錯點
- **遇右括號先檢查堆是否為空**：空堆還來右括號代表沒得配 → 直接 False。
- 迴圈結束後**堆必須是空的**才算合法（避免 `"((("` 這種只入不出的漏網之魚）。
- 種類要對：`(]`、`([)]` 都是 False，別只數數量。

## 對應主題卡
- 「下一個更大元素」的單調堆疊變形 → 見 problems.md 的 Daily Temperatures
