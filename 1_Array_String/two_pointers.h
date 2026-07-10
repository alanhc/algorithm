#ifndef TWO_POINTERS_H
#define TWO_POINTERS_H

#include <vector>

// Two Pointers: 在「已排序」陣列中找兩數之和等於 target，回傳索引
inline std::vector<int> twoSumSorted(std::vector<int>& nums, int target) {
    int left = 0, right = (int)nums.size() - 1;
    while (left < right) {
        int sum = nums[left] + nums[right];
        if (sum == target) return {left, right};
        else if (sum < target) left++;   // 太小，左邊往右
        else right--;                    // 太大，右邊往左
    }
    return {-1, -1};
}

#endif // TWO_POINTERS_H
