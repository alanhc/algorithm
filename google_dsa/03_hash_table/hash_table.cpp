// Hash Table（雜湊表）模板 + 內嵌測試（單檔精簡版）。
//
// 什麼時候用：未排序陣列找一對數、統計出現次數、判斷是否存在。
// 訊號：找一對、出現次數、是否存在。
//
// 編譯執行：g++ -std=c++17 -Wall -Wextra hash_table.cpp -o hash_table && ./hash_table
#include <cassert>
#include <iostream>
#include <unordered_map>
#include <vector>
using namespace std;

// 在「未排序」陣列中找兩數之和等於 target，回傳一對索引。時間 O(n)、空間 O(n)。
vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> seen;                 // 值 -> index
    for (int i = 0; i < (int)nums.size(); ++i) {
        int need = target - nums[i];              // 需要的另一半
        auto it = seen.find(need);
        if (it != seen.end()) return {it->second, i};
        seen[nums[i]] = i;
    }
    return {};
}

int tests_run = 0;

void check(vector<int> nums, int target, vector<int> expected) {
    ++tests_run;
    vector<int> got = twoSum(nums, target);
    assert(got == expected);
}

int main() {
    check({2, 7, 11, 15}, 9, {0, 1});         // 基本找得到
    check({3, 2, 4}, 6, {1, 2});              // 答案不在開頭
    check({3, 3}, 6, {0, 1});                 // 重複值
    check({1, 2, 3}, 100, {});                // 找不到
    check({5}, 5, {});                        // 單一元素
    check({-1, -2, -3, -4, -5}, -8, {2, 4});  // 負數

    cout << "All " << tests_run << " tests passed\n";
    return 0;
}
