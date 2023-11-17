/*
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6 ( [4,-1,2,1]  )
sol:
greedy
iterate array and memorize sum, if now>sum, then replace it  
*/
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int max_sum = -1e9;
        int now_sum = 0;
        for (int i=0; i<nums.size();i++) {
            int x = nums[i];
            now_sum = max(x, now_sum+x);
            max_sum = max(now_sum, max_sum);
        }
        return max_sum;
    }
};