"""string_array 測試（零依賴 assert，可直接 `uv run python test_string_array.py`）。"""

from string_array import is_anagram, merge_intervals

tests_run = 0


def check_anagram(a, b, expected):
    global tests_run
    tests_run += 1
    got = is_anagram(a, b)
    assert got == expected, f"is_anagram({a!r}, {b!r}) = {got}, 期望 {expected}"


def check_merge(intervals, expected):
    global tests_run
    tests_run += 1
    got = merge_intervals(intervals)
    assert got == expected, f"merge_intervals({intervals}) = {got}, 期望 {expected}"


def main():
    # is_anagram
    check_anagram("anagram", "nagaram", True)   # 標準變位詞
    check_anagram("rat", "car", False)          # 字元不同
    check_anagram("", "", True)                 # 兩空字串
    check_anagram("a", "ab", False)             # 長度不同
    check_anagram("ab", "ba", True)             # 換位

    # merge_intervals
    check_merge([[1, 3], [2, 6], [8, 10], [15, 18]], [[1, 6], [8, 10], [15, 18]])  # 部分重疊
    check_merge([[1, 4], [4, 5]], [[1, 5]])     # 端點相接也算重疊
    check_merge([[1, 4], [2, 3]], [[1, 4]])     # 內含（被吃掉）
    check_merge([[1, 4]], [[1, 4]])             # 單一區間
    check_merge([[1, 2], [3, 4]], [[1, 2], [3, 4]])  # 完全不重疊

    print(f"All {tests_run} tests passed")


if __name__ == "__main__":
    main()
