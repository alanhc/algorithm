/*
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].

sol

[-1,0,1,2,-1,-4]
a + b + c = 0
sort
[-4,-1,-1,0,1,2]

[-4,-1,-1,0,1,2]
        ^skip
two pointer
[-4,-1,-1,0,1,2]
  a L.        R
sum ==0 b,c = L, R
sum<0
    L = L+1
else
    R = R-1


https://www.youtube.com/watch?v=jzZsG8n2R9A
*/
class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        int n = nums.size();
        vector<vector<int>> ans;
        sort(nums.begin(), nums.end());
        for (int i=0; i<n; i++) {
            int a = nums[i];
            if (i>0 && a==nums[i-1]) continue; //skip 
            int L=i+1, R=n-1;
            while (L<R) {
                int sum=a+nums[L]+nums[R];
                if (sum<0) L+=1;
                else if (sum>0) R-=1;
                else {
                    ans.push_back({a,nums[L],nums[R]});
                    L+=1;
                    while(L<R && nums[L]==nums[L-1]) L+=1;
                }
            }
        }
        return ans;

        // for (let i=0; i<)
    }
};