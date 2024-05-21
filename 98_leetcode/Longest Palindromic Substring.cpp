class Solution {
public:
    string longestPalindrome(string s) {
        int n = s.size();
        vector<vector<bool>> dp(n, vector<bool>(n,false));
        for (int i=0; i<n; i++) {
            dp[i][i]=true;
        }
        int longestPalindromeStart = 0;
        int longestPalindromeLen = 1;
        for (int end=0; end<n; end++) {
            for (int start=end-1; start>=0; start--) {
                if (s[start]==s[end]) {
                    if (end-start==1 || dp[start+1][end-1]) {
                        dp[start][end]=true;
                        int palindromeLen = end - start + 1;
                        if (longestPalindromeLen < palindromeLen) {
                            longestPalindromeStart = start;
                            longestPalindromeLen = palindromeLen;
                        } 
                    }
                }
            }
        }
        return s.substr(longestPalindromeStart, longestPalindromeLen);
    }
};