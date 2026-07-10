"""Stack（堆疊）— 括號配對模板。

什麼時候用：括號是否合法、巢狀結構配對、「下一個更大元素」。
訊號：valid parentheses、nested、next greater。
"""


def is_valid_parentheses(s):
    """判斷字串的括號是否全部正確配對，回傳布林值。

    時間 O(n)、空間 O(n)。
    """
    pairs = {')': '(', ']': '[', '}': '{'}
    stack = []
    for ch in s:
        if ch in pairs:                      # 遇到右括號
            if not stack or stack[-1] != pairs[ch]:
                return False
            stack.pop()
        else:                                # 左括號入堆
            stack.append(ch)
    return not stack                         # 全部配對完才對
