from typing import List

# 2024/07/23 1st try
# time O(n) space O(1)
class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        carry = 1
        for i in range(len(digits) - 1, -1, -1):
            digits[i] += carry
            carry = digits[i] // 10
            digits[i] %= 10
            if carry == 0:
                break
        if carry:
            digits.insert(0, 1)
        return digits