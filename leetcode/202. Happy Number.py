# 2024/07/23 1st try
# space O(n) time O(d*k) d: the digits of n, k: the iteration times
class Solution:
    def isHappy(self, n: int) -> bool:
        def get_next(n: int) -> int:
            total_sum = 0
            while n > 0:
                n, digit = divmod(n, 10) # divmod(a, b) = (a // b, a % b)
                total_sum += digit ** 2
            return total_sum

        seen = set() # for checking if there is a cycle
        while n != 1 and n not in seen:
            seen.add(n)
            n = get_next(n)

        return n == 1