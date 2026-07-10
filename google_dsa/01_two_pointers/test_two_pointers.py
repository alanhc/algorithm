"""two_pointers 測試（零依賴 assert，可直接 `uv run python test_two_pointers.py`）。"""

from two_pointers import two_sum_sorted

tests_run = 0


def check(nums, target, expected):
    global tests_run
    tests_run += 1
    got = two_sum_sorted(nums, target)
    assert got == expected, f"two_sum_sorted({nums}, {target}) = {got}, 期望 {expected}"


def main():
    check([2, 7, 11, 15], 9, [0, 1])       # 基本找得到
    check([1, 2, 3, 4, 6], 6, [1, 3])      # 答案在中間
    check([1, 3, 4, 5, 7, 11], 12, [0, 5])  # 用到最左與最右
    check([1, 2, 3, 4], 100, [-1, -1])     # 找不到
    check([-3, -1, 0, 2, 5], -1, [0, 3])   # 負數
    check([], 5, [-1, -1])                 # 空陣列
    check([5], 5, [-1, -1])                # 單一元素
    print(f"All {tests_run} tests passed")


if __name__ == "__main__":
    main()
