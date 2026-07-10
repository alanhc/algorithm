"""stack_parentheses 測試（零依賴 assert，可直接 `uv run python test_stack_parentheses.py`）。"""

from stack_parentheses import is_valid_parentheses

tests_run = 0


def check(s, expected):
    global tests_run
    tests_run += 1
    got = is_valid_parentheses(s)
    assert got == expected, f"is_valid_parentheses({s!r}) = {got}, 期望 {expected}"


def main():
    check("()", True)         # 單一配對
    check("()[]{}", True)     # 多組並排
    check("(]", False)        # 種類不符
    check("([)]", False)      # 交錯不合法
    check("{[]}", True)       # 正確巢狀
    check("", True)           # 空字串
    check("(", False)         # 只有左括號
    check(")", False)         # 只有右括號
    check("(((", False)       # 多個未閉合
    print(f"All {tests_run} tests passed")


if __name__ == "__main__":
    main()
