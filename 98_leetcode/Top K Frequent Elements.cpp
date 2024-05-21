class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int, int> count; // num => count
        vector<vector<int>> bucket(nums.size()+1); // count => [int]

        for (int num : nums) {
            count[num]++;
        }

        for (auto& entry : count) {
            int num = entry.first;
            int count = entry.second;
            bucket[count].push_back(num);
        }

        vector<int> result;
        for (int i = bucket.size() - 1; i >= 0; i--) {
            for (int num : bucket[i]) {
                result.push_back(num);
                if (result.size() == k) {
                    return result;
                }
            }
        }
        return result;
    }
};