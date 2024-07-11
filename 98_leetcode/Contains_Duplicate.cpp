class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        unordered_map<int, int> h;
        bool ans=false;
        for (int i=0; i<nums.size(); i++) {
            int x = nums[i];
            if (h.count(x)) return true;
            h[x] = 1;
        }
        return false;
    }
};