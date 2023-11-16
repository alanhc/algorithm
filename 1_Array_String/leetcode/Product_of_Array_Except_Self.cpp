/*
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
                    left_prod right_prod
24 = prod[2,3,4] => 1         24
12 = prod[1,3,4] => 1         12
sol:
cacultate left & right prod
ans[i] = left[i] * right[i]
*/
class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int n = nums.size();
        vector<int> left_prod(n);
        vector<int> right_prod(n);
        vector<int> ans(n);
        left_prod[0]=1;
        for (int i=1; i<n; i++) {
            left_prod[i] = left_prod[i-1] * nums[i-1];
        }
        right_prod[n-1]=1;
        for (int i=n-2; i>=0; i--) {
            right_prod[i] = right_prod[i+1] * nums[i+1];
            cout << right_prod[i] << endl;
        }
        for (int i=0; i<n; i++) {
            ans[i] = left_prod[i]*right_prod[i];
        }
        
        return ans;
    }
};