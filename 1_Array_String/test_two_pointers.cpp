#include <cassert>
#include <iostream>
#include <vector>
#include "two_pointers.h"
using namespace std;

int tests_run = 0;

// 檢查 twoSumSorted(nums, target) 的結果是否等於 expected
void check(vector<int> nums, int target, vector<int> expected) {
    ++tests_run;
    vector<int> got = twoSumSorted(nums, target);
    assert(got == expected);
}

int main() {
    // 基本案例：找得到
    check({2, 7, 11, 15}, 9, {0, 1});
    // 答案在中間
    check({1, 2, 3, 4, 6}, 6, {1, 3});
    // 用到最左與最右
    check({1, 3, 4, 5, 7, 11}, 12, {0, 5});
    // 找不到
    check({1, 2, 3, 4}, 100, {-1, -1});
    // 負數
    check({-3, -1, 0, 2, 5}, -1, {0, 3});
    // 空陣列
    check({}, 5, {-1, -1});
    // 只有一個元素（無法湊成兩數）
    check({5}, 5, {-1, -1});

    cout << "All " << tests_run << " tests passed\n";
    return 0;
}
