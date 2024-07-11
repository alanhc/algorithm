from typing import List

# 2024/7/8: 1st try
# time complexity: O(n), space complexity: O(n)

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        s = set()
        for n in nums:
            if n in s:
                return True
            s.add(n)
        return False
        