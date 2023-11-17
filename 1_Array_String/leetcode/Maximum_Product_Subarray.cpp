/*
Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
sol
keep max and min 
x  max(x,max*x) min(x,min*x) ans max(max, ans)
2  2.           2.           2
3  6 max(3,6)   2.           6 max(2,6)
-2 2 max(-4, 2) 2 min(6,2).  6 max(2,6)

*/
class Solution {
public:
    int maxProduct(vector<int>& nums) {
        int ans = nums[0];
        int min_ = nums[0];
        int max_ = nums[0];
        for (int i=1; i<nums.size();i++) {
            int x = nums[i];
            if (x<0) {
                swap(max_, min_);
            }
            max_ = max(x, x*max_);
            min_ = min(x, x*min_);
            ans = max(ans, max_);
        }
        return ans;
    }
};