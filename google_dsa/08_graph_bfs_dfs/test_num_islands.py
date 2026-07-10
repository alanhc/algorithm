"""num_islands 測試（零依賴 assert，可直接 `uv run python test_num_islands.py`）。"""

from num_islands import num_islands

tests_run = 0


def check(grid, expected):
    global tests_run
    tests_run += 1
    got = num_islands(grid)
    assert got == expected, f"num_islands({grid}) = {got}, 期望 {expected}"


def main():
    check([["1", "1", "0"], ["1", "0", "0"], ["0", "0", "1"]], 2)  # 兩座島
    check([["0", "0"], ["0", "0"]], 0)                             # 全海水
    check([["1", "1"], ["1", "1"]], 1)                             # 全陸地連成一座
    check([["1"]], 1)                                              # 單一格陸地
    check([], 0)                                                   # 空 grid
    check([["1", "0"], ["0", "1"]], 2)                             # 斜角不相連 → 兩座
    print(f"All {tests_run} tests passed")


if __name__ == "__main__":
    main()
