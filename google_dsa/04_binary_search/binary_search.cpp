// Binary Search（二分搜尋）模板 + 內嵌測試（單檔精簡版）。
//
// 什麼時候用：在「已排序」陣列中找目標；或「找滿足條件的最小/最大值」（答案單調性）。
// 訊號：sorted、minimum/maximum ... such that。
//
// 編譯執行：g++ -std=c++17 -Wall -Wextra binary_search.cpp -o binary_search && ./binary_search
#include <cassert>
#include <iostream>
#include <vector>
using namespace std;

// 在「已排序」陣列中找 target，回傳索引；找不到回傳 -1。時間 O(log n)、空間 O(1)。
int binarySearch(const vector<int>& nums, int target) {
    int left = 0, right = (int)nums.size() - 1;   // 閉區間 [left, right]
    while (left <= right) {
        int mid = left + (right - left) / 2;      // 這樣寫可防 (left+right) 溢位
        if (nums[mid] == target) return mid;
        else if (nums[mid] < target) left = mid + 1;   // target 在右半
        else right = mid - 1;                          // target 在左半
    }
    return -1;
}

int tests_run = 0;

void check(vector<int> nums, int target, int expected) {
    ++tests_run;
    int got = binarySearch(nums, target);
    assert(got == expected);
}

int main() {
    check({1, 3, 5, 7, 9}, 5, 2);      // 基本找得到（在中間）
    check({1, 3, 5, 7, 9}, 1, 0);      // 最左端
    check({1, 3, 5, 7, 9}, 9, 4);      // 最右端
    check({1, 3, 5, 7, 9}, 4, -1);     // 落在區間內但不存在
    check({1, 3, 5, 7, 9}, 100, -1);   // 超出上界
    check({}, 1, -1);                  // 空陣列
    check({42}, 42, 0);                // 單一元素找得到
    check({42}, 7, -1);                // 單一元素找不到

    cout << "All " << tests_run << " tests passed\n";
    return 0;
}
