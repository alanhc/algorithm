"""sliding_window 測試（零依賴 assert，可直接 `uv run python test_sliding_window.py`）。"""

from sliding_window import longest_unique_substring

tests_run = 0


def check(s, expected):
    global tests_run
    tests_run += 1
    got = longest_unique_substring(s)
    assert got == expected, f"longest_unique_substring({s!r}) = {got}, 期望 {expected}"


def main():
    check("abcabcbb", 3)   # abc
    check("bbbbb", 1)      # 全相同，只剩一個
    check("pwwkew", 3)     # wke（不是子序列 pwke）
    check("", 0)           # 空字串
    check("a", 1)          # 單一字元
    check("au", 2)         # 兩個相異字元
    check("dvdf", 3)       # vdf，左界只前進到重複字元後
    check("abba", 2)       # 注意 seen[a] 過期不能拉回左界
    print(f"All {tests_run} tests passed")


if __name__ == "__main__":
    main()
