
/*
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
x+y=9
y=9-x

h[y] = id
id x y h[y]
---------
0  2 7 0
1  7 2

if (find(h[id])) {
    return [id, h[id]].sort()
} else {
    h[x] = id
}

*/
#include<unordered_map>
using namespace std;
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> h;
        vector<int> ans(2);
        for (int i=0; i<nums.size(); i++) {
            int x = nums[i];
            int y = target-nums[i];
            if (h.count(x)) {
                ans[0] = min(i,h[x]);
                ans[1] = max(i,h[x]);
                return ans;
            } else {
                h[y] = i;
            }
        }
        return ans;
    }
};