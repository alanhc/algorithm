// String/Array 基本操作 + Sorting 模板 + 內嵌測試（單檔精簡版）。
//
// 什麼時候用：判斷變位詞（字元計數）、區間合併（排序後掃描）。
// 訊號：anagram、字元計數、區間合併、排序後掃描。
//
// 編譯執行：g++ -std=c++17 -Wall -Wextra string_array.cpp -o string_array && ./string_array
#include <algorithm>
#include <cassert>
#include <iostream>
#include <string>
#include <unordered_map>
#include <vector>
using namespace std;

// 判斷 a、b 是否為變位詞（字元計數相同）。時間 O(n)、空間 O(k)。
bool isAnagram(const string& a, const string& b) {
    if (a.size() != b.size()) return false;   // 長度不同直接排除
    unordered_map<char, int> cnt;
    for (char c : a) cnt[c]++;                 // a 加計數
    for (char c : b) {
        if (--cnt[c] < 0) return false;        // b 扣計數，扣成負代表不符
    }
    return true;
}

// 合併所有重疊的區間。先照起點排序再掃描。時間 O(n log n)、空間 O(n)。
vector<vector<int>> mergeIntervals(vector<vector<int>> intervals) {
    sort(intervals.begin(), intervals.end(),
         [](const vector<int>& x, const vector<int>& y) { return x[0] < y[0]; });  // 先照起點排序
    vector<vector<int>> merged;
    for (const auto& iv : intervals) {
        int start = iv[0], end = iv[1];
        if (!merged.empty() && start <= merged.back()[1]) {   // 有重疊
            merged.back()[1] = max(merged.back()[1], end);
        } else {
            merged.push_back({start, end});
        }
    }
    return merged;
}

int tests_run = 0;

void checkAnagram(const string& a, const string& b, bool expected) {
    ++tests_run;
    assert(isAnagram(a, b) == expected);
}

void checkMerge(vector<vector<int>> intervals, vector<vector<int>> expected) {
    ++tests_run;
    assert(mergeIntervals(intervals) == expected);
}

int main() {
    // isAnagram
    checkAnagram("anagram", "nagaram", true);   // 標準變位詞
    checkAnagram("rat", "car", false);          // 字元不同
    checkAnagram("", "", true);                 // 兩空字串
    checkAnagram("a", "ab", false);             // 長度不同
    checkAnagram("ab", "ba", true);             // 換位

    // mergeIntervals
    checkMerge({{1, 3}, {2, 6}, {8, 10}, {15, 18}}, {{1, 6}, {8, 10}, {15, 18}});  // 部分重疊
    checkMerge({{1, 4}, {4, 5}}, {{1, 5}});     // 端點相接也算重疊
    checkMerge({{1, 4}, {2, 3}}, {{1, 4}});     // 內含（被吃掉）
    checkMerge({{1, 4}}, {{1, 4}});             // 單一區間
    checkMerge({{1, 2}, {3, 4}}, {{1, 2}, {3, 4}});  // 完全不重疊

    cout << "All " << tests_run << " tests passed\n";
    return 0;
}
