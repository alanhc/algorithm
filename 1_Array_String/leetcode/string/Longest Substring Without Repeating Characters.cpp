/*
abcabcbb
s^^
 s^^
  
*/
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int n = s.length();
        vector<int> dict(256,-1);
        int max_len = 0, start=-1;
        for (int i=0; i<n; i++) {
            if (dict[ s[i] ] >=start) start = dict[ s[i] ]+1;
            dict[ s[i] ]=i;
            max_len = max(max_len, i-start+1);
        }
        return max_len;
    }
};