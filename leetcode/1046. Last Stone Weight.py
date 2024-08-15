from typing import List
import heapq
# 2024/07/20: 1st try
# time: O(nlogn), space: O(n)
class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        # convert the list of stones into a max heap
        stones = [-stone for stone in stones]
        heapq.heapify(stones)
        while len(stones) > 1:
            # pop the two largest stones
            y = -heapq.heappop(stones)
            x = -heapq.heappop(stones)
            # if the two stones are not the same, add the difference to the heap
            if x != y:
                heapq.heappush(stones, -(y - x))
        return 0 if not stones else -stones[0]