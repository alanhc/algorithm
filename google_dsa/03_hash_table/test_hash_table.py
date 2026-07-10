"""hash_table 測試（零依賴 assert，可直接 `uv run python test_hash_table.py`）。"""

from hash_table import two_sum

tests_run = 0


def check(nums, target, expected):
    global tests_run
    tests_run += 1
    got = two_sum(nums, target)
    assert got == expected, f"two_sum({nums}, {target}) = {got}, 期望 {expected}"


def main():
    check([2, 7, 11, 15], 9, [0, 1])          # 基本找得到
    check([3, 2, 4], 6, [1, 2])               # 答案不在開頭
    check([3, 3], 6, [0, 1])                  # 重複值
    check([1, 2, 3], 100, [])                 # 找不到
    check([5], 5, [])                         # 單一元素
    check([-1, -2, -3, -4, -5], -8, [2, 4])   # 負數
    print(f"All {tests_run} tests passed")


if __name__ == "__main__":
    main()
