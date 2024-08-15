# 2024/07/20: 2nd try
# time: O(n), space: O(1)
class Solution:
    def climbStairs(self, n: int) -> int:
        if n == 1:
            return 1
        # n1 represents the number of ways to climb to the (i-1)-th step
        # n2 represents the number of ways to climb to the i-th step
        n1, n2 = 1, 2
        for i in range(3, n + 1):
            n1, n2 = n2, n1 + n2
        return n2
# 2024/07/20: 1nd try
# time: O(n), space: O(n)
class Solution:
    def climbStairs(self, n: int) -> int:
        if n == 1: # if there is only one step, there is only one way to climb
            return 1
        
        # dp[i] represents the number of ways to climb to the i-th step
        dp = [0] * (n + 1)
        dp[1] = 1
        dp[2] = 2
        for i in range(3, n + 1):
            dp[i] = dp[i - 1] + dp[i - 2] # the number of ways to climb to the i-th step is the sum of the number of ways to climb to the (i-1)-th step and the number of ways to climb to the (i-2)-th step
        return dp[n]