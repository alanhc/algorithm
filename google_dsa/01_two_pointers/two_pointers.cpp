// Two Pointers（雙指標）模板 + 內嵌測試（單檔精簡版）。
//
// 什麼時候用：已排序陣列找一對數、判斷回文、原地移除、合併有序陣列。
// 訊號：sorted array、pair、回文。
//
// 編譯執行：g++ -std=c++17 -Wall -Wextra two_pointers.cpp -o two_pointers && ./two_pointers
#include <cassert>
#include <iostream>
#include <vector>
using namespace std;

// 在「已排序」陣列中找兩數之和等於 target，回傳一對索引。時間 O(n)、空間 O(1)。
vector<int> twoSumSorted(vector<int>& nums, int target) {
    int left = 0, right = (int)nums.size() - 1;
    while (left < right) {
        int sum = nums[left] + nums[right];
        if (sum == target) return {left, right};
        else if (sum < target) left++;   // 太小，左邊往右
        else right--;                    // 太大，右邊往左
    }
    return {-1, -1};
}

int tests_run = 0;

void check(vector<int> nums, int target, vector<int> expected) {
    ++tests_run;
    vector<int> got = twoSumSorted(nums, target);
    assert(got == expected);
}

int main() {
    check({2, 7, 11, 15}, 9, {0, 1});        // 基本找得到
    check({1, 2, 3, 4, 6}, 6, {1, 3});       // 答案在中間
    check({1, 3, 4, 5, 7, 11}, 12, {0, 5});  // 用到最左與最右
    check({1, 2, 3, 4}, 100, {-1, -1});      // 找不到
    check({-3, -1, 0, 2, 5}, -1, {0, 3});    // 負數
    check({}, 5, {-1, -1});                  // 空陣列
    check({5}, 5, {-1, -1});                 // 單一元素

    cout << "All " << tests_run << " tests passed\n";
    return 0;
}
