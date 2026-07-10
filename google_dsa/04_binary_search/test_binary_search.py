"""binary_search 測試（零依賴 assert，可直接 `uv run python test_binary_search.py`）。"""

from binary_search import binary_search

tests_run = 0


def check(nums, target, expected):
    global tests_run
    tests_run += 1
    got = binary_search(nums, target)
    assert got == expected, f"binary_search({nums}, {target}) = {got}, 期望 {expected}"


def main():
    check([1, 3, 5, 7, 9], 5, 2)      # 基本找得到（在中間）
    check([1, 3, 5, 7, 9], 1, 0)      # 最左端
    check([1, 3, 5, 7, 9], 9, 4)      # 最右端
    check([1, 3, 5, 7, 9], 4, -1)     # 落在區間內但不存在
    check([1, 3, 5, 7, 9], 100, -1)   # 超出上界
    check([], 1, -1)                  # 空陣列
    check([42], 42, 0)                # 單一元素找得到
    check([42], 7, -1)                # 單一元素找不到
    print(f"All {tests_run} tests passed")


if __name__ == "__main__":
    main()
