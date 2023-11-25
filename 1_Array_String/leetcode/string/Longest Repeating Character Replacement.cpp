/*
ABABBA

w_len - max_f<=k
*/
class Solution {
public:
    int characterReplacement(string s, int k) {
        int n=s.length();
        int i=0, j=0, maxi=0;
        unordered_map<char,int>mp;
        int ans = -1;
        for (int j=0; j<n; j++) {
            mp[ s[j] ]++;
            maxi = max(maxi, mp[ s[j] ]);
            if ((j-i+1)-maxi>k) {
                mp[ s[i] ]--;
                i++;
            }
            ans = max(ans, (j-i+1));
        }
        return ans;
    }
};