// Sliding Window（滑動視窗）模板 + 內嵌測試（單檔精簡版）。
//
// 什麼時候用：連續子字串／子陣列的最長、最短、或「至多 K 個」問題。
// 訊號：substring、subarray、longest / shortest / at most K。
//
// 編譯執行：g++ -std=c++17 -Wall -Wextra sliding_window.cpp -o sliding_window && ./sliding_window
#include <cassert>
#include <iostream>
#include <string>
#include <unordered_map>
using namespace std;

// 回傳「不含重複字元」的最長子字串長度。時間 O(n)、空間 O(k)。
int longestUniqueSubstring(const string& s) {
    unordered_map<char, int> seen;   // 字元 -> 最後出現的 index
    int left = 0;
    int best = 0;
    for (int right = 0; right < (int)s.size(); ++right) {
        char ch = s[right];
        auto it = seen.find(ch);
        if (it != seen.end() && it->second >= left) {
            left = it->second + 1;   // 縮小視窗左界
        }
        seen[ch] = right;
        best = max(best, right - left + 1);
    }
    return best;
}

int tests_run = 0;

void check(const string& s, int expected) {
    ++tests_run;
    int got = longestUniqueSubstring(s);
    assert(got == expected);
}

int main() {
    check("abcabcbb", 3);   // abc
    check("bbbbb", 1);      // 全相同，只剩一個
    check("pwwkew", 3);     // wke（不是子序列 pwke）
    check("", 0);           // 空字串
    check("a", 1);          // 單一字元
    check("au", 2);         // 兩個相異字元
    check("dvdf", 3);       // vdf，左界只前進到重複字元後
    check("abba", 2);       // 注意 seen[a] 過期不能拉回左界

    cout << "All " << tests_run << " tests passed\n";
    return 0;
}
