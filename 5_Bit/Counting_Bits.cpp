/*
sol:
dp
0 0000 0
1 0001 1+dp[n-1]=1
2 0010 1+dp[n-2]=1
3 0011 1+dp[n-2]=2
4 0100 1+dp[n-4]=1
5 0101 1+dp[n-4]=2
6 0110 1+dp[n-4]=2
7 0111 1+dp[n-4]=3
8 1000 1+dp[n-8]=1

*/
class Solution {
public:
    vector<int> countBits(int n) {
        vector<int> dp(n+1);
        int offset=1;
        for (int i=1; i<=n; i++) {
            if (offset*2 == i) offset=i;
            dp[i] = 1+dp[i-offset];
        }
        return dp;
    }
};