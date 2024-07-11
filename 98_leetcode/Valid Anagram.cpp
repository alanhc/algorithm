class Solution {
public:
    bool isAnagram(string s, string t) {
        if (s.length() != t.length()) return false;
        unordered_map<char, int> ct;
        for (char c : s) {
            ct[c]++;
        }
        for (char c : t) {
            if (ct.find(c) == ct.end() || ct[c] == 0) return false;
            ct[c]--;
        }
        return true;
    }
};