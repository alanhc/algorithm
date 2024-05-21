/*
O(logN)
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
sol
binary search
[3,4,5,1,2].  min_ = min(min_, L)
 L.  M.  R.   5
     L M R.   1
       L R.   
nums[M]>= nums[L]
    search right
else
    search left
ans : 
https://www.youtube.com/watch?app=desktop&v=nIVW4P8b1VA
*/
class Solution {
public:
    int findMin(vector<int>& nums) {
        int min_ = nums[0]; 
        int L = 0;
        int R = nums.size()-1;
        while (L <= R) {
            if (nums[L]<nums[R]) {
                min_ = min(min_, nums[L]);
                break;
            }
            int M = (L+R)/2;
            min_ = min(min_, nums[M]);
            if (nums[M]>=nums[L]) L = M+1;
            else R = M-1;
        }
        return min_;
    }
};