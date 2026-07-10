// Binary Heap（二元堆積 / priority queue）模板 + 內嵌測試（單檔精簡版）。
//
// 什麼時候用：找前 K 大 / 前 K 小、top K、串流中位數。
// 訊號：K largest/smallest、top K、串流中位數。
//
// 編譯執行：g++ -std=c++17 -Wall -Wextra k_largest.cpp -o k_largest && ./k_largest
#include <algorithm>
#include <cassert>
#include <iostream>
#include <queue>
#include <vector>
using namespace std;

// 回傳最大的 k 個元素（順序不保證）。
// 維持一個大小為 k 的最小堆（min-heap），堆頂就是第 k 大。時間 O(n log k)、空間 O(k)。
vector<int> kLargest(const vector<int>& nums, int k) {
    priority_queue<int, vector<int>, greater<int>> heap;  // min-heap
    for (int n : nums) {
        heap.push(n);
        if ((int)heap.size() > k) heap.pop();  // 丟掉最小的
    }
    vector<int> result;
    while (!heap.empty()) {
        result.push_back(heap.top());
        heap.pop();
    }
    return result;  // 堆內是最大的 k 個
}

int tests_run = 0;

void check(vector<int> nums, int k, vector<int> expected) {
    ++tests_run;
    vector<int> got = kLargest(nums, k);
    // kLargest 回傳順序不保證，故排序後比對
    sort(got.begin(), got.end());
    sort(expected.begin(), expected.end());
    assert(got == expected);
}

int main() {
    check({3, 2, 1, 5, 6, 4}, 2, {5, 6});                 // 基本 top 2
    check({3, 2, 3, 1, 2, 4, 5, 5, 6}, 4, {4, 5, 5, 6});  // 有重複值
    check({1, 2, 3}, 3, {1, 2, 3});                       // k 等於長度
    check({7, 7, 7}, 1, {7});                             // k=1、全相同
    check({-1, -5, -3}, 2, {-1, -3});                     // 負數

    cout << "All " << tests_run << " tests passed\n";
    return 0;
}
