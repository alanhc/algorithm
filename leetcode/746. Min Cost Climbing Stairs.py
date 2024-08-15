from typing import List

# 2024/07/20: 1st try
# time: O(n), space: O(1)
class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        for i in range(2,len(cost)):
            cost[i]+=min(cost[i-1],cost[i-2]) # the cost of climbing to the i-th step is the sum of the cost of climbing to the (i-1)-th step and the cost of climbing to the (i-2)-th step
        return min(cost[-1],cost[-2])