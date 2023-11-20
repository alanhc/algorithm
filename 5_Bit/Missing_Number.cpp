/*
O(1) 
XOR
2^3
10
11
01 ->1
a^b^b=a
[3,0,1]
0:000
1:001
3:011

0^0^3

000
011
011

3^1^0
011
001
010
000
010

2^2^3
010
010
000
011
011

*/
class Solution {
public:
    int missingNumber(vector<int>& nums) {
        int n = nums.size();
        int ans=0;
        for (int i=0; i<n; i++) {
            cout<<ans<<i<<nums[i]<<endl;
            ans = ans ^ i ^ nums[i]; 
        }
        cout<<ans;
        return ans^n;
    }
};