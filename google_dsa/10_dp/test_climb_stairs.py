"""climb_stairs 測試（零依賴 assert，可直接 `uv run python test_climb_stairs.py`）。"""

from climb_stairs import climb_stairs, climb_stairs_memo

tests_run = 0


def check(n, expected):
    global tests_run
    tests_run += 1
    got = climb_stairs(n)
    assert got == expected, f"climb_stairs({n}) = {got}, 期望 {expected}"
    # 迭代與 memo 遞迴兩種寫法必須一致
    got_memo = climb_stairs_memo(n)
    assert got_memo == expected, f"climb_stairs_memo({n}) = {got_memo}, 期望 {expected}"


def main():
    check(1, 1)          # 只有一階
    check(2, 2)          # 1+1 或 2
    check(3, 3)          # 基本遞迴
    check(4, 5)          # dp[4]=dp[3]+dp[2]
    check(5, 8)          # 費氏數列味道
    check(10, 89)        # 中等規模
    check(20, 10946)     # 較大規模，確認沒溢位/沒退化
    print(f"All {tests_run} tests passed")


if __name__ == "__main__":
    main()
