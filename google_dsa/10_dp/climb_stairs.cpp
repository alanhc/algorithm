// Dynamic Programming（動態規劃）模板 + 內嵌測試（單檔精簡版）。
// 以爬樓梯（Climbing Stairs）為例。
//
// 什麼時候用：count ways、min/max cost、"can you reach"。
// 訊號：count ways、min/max cost、can you reach。
// 做法三步：定義狀態 → 轉移方程 → 初始值與順序。
//
// 編譯執行：g++ -std=c++17 -Wall -Wextra climb_stairs.cpp -o climb_stairs && ./climb_stairs
#include <cassert>
#include <iostream>
#include <unordered_map>
using namespace std;

// 迭代 O(1) 空間：只保留前兩個狀態，滾動更新。時間 O(n)、空間 O(1)。
long long climbStairs(int n) {
    if (n <= 2) return n;
    long long prev2 = 1, prev1 = 2;          // dp[1]=1, dp[2]=2
    for (int i = 3; i <= n; ++i) {
        long long cur = prev1 + prev2;       // dp[i]=dp[i-1]+dp[i-2]
        prev2 = prev1;
        prev1 = cur;
    }
    return prev1;
}

// memo 遞迴：由上而下，用 unordered_map 記住已算過的子問題。時間 O(n)、空間 O(n)。
long long climbStairsMemoHelper(int i, unordered_map<int, long long>& memo) {
    if (i <= 2) return i;
    auto it = memo.find(i);
    if (it != memo.end()) return it->second;
    long long res = climbStairsMemoHelper(i - 1, memo) + climbStairsMemoHelper(i - 2, memo);
    memo[i] = res;
    return res;
}

long long climbStairsMemo(int n) {
    unordered_map<int, long long> memo;
    return climbStairsMemoHelper(n, memo);
}

int tests_run = 0;

void check(int n, long long expected) {
    ++tests_run;
    long long got = climbStairs(n);
    assert(got == expected);
    // 迭代與 memo 遞迴兩種寫法必須一致
    long long gotMemo = climbStairsMemo(n);
    assert(gotMemo == expected);
}

int main() {
    check(1, 1);          // 只有一階
    check(2, 2);          // 1+1 或 2
    check(3, 3);          // 基本遞迴
    check(4, 5);          // dp[4]=dp[3]+dp[2]
    check(5, 8);          // 費氏數列味道
    check(10, 89);        // 中等規模
    check(20, 10946);     // 較大規模，確認沒溢位/沒退化

    cout << "All " << tests_run << " tests passed\n";
    return 0;
}
