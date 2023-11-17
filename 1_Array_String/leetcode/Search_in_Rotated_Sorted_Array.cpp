/*
O(log n)
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
sol:
[4,5,6,7,0,1,2]
 L     M.    R
         L.  R         
Input: nums = [4,5,6,7,0,1,2], target = 5
Output: 1
[4,5,6,7,0,1,2]
 L     M.    R
         L.  R
     R.M L
   L R 
sol1
M>R
    target<R | target>M
        L = M+1
    else
        R = M-1
else
    target>R | target<M
        R = M-1
    else
        L = M+1
sol2
[4,5,6,7,0,1,2]
 L     M.    R
         L.M R
         R L
*/
class Solution {
public:
    int search(vector<int>& nums, int target) {
        int L = 0, R = nums.size()-1;
        while (L<=R) {
            int M = (L+R)/2;
            if (nums[M] == target) return M;
            if (nums[L]<=nums[M]) {
                if (nums[L]<=target && target <nums[M]) R = M-1;
                else L = M+1;
            } else {
                if (nums[M] < target && target <= nums[R]) L = M+1;
                else R = M-1;
            }
        }
        return -1;
    }
};