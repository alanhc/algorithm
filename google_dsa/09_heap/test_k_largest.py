"""k_largest 測試（零依賴 assert，可直接 `uv run python test_k_largest.py`）。"""

from k_largest import k_largest

tests_run = 0


def check(nums, k, expected):
    global tests_run
    tests_run += 1
    got = k_largest(nums, k)
    # k_largest 回傳順序不保證，故排序後比對
    assert sorted(got) == sorted(expected), \
        f"k_largest({nums}, {k}) = {got}, 期望 {expected}"


def main():
    check([3, 2, 1, 5, 6, 4], 2, [5, 6])              # 基本 top 2
    check([3, 2, 3, 1, 2, 4, 5, 5, 6], 4, [4, 5, 5, 6])  # 有重複值
    check([1, 2, 3], 3, [1, 2, 3])                    # k 等於長度
    check([7, 7, 7], 1, [7])                           # k=1、全相同
    check([-1, -5, -3], 2, [-1, -3])                   # 負數
    print(f"All {tests_run} tests passed")


if __name__ == "__main__":
    main()
