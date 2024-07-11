from typing import List

# 2024/7/8: 1st try
# time complexity: O(n), space complexity: O(n)
# strategy: use dictionary to store the index of the number
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        d = {}
        for i, n in enumerate(nums):
            if target - n in d:
                return [d[target - n], i]
            d[n] = i
        return []