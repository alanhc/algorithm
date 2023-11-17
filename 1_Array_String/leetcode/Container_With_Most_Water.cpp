/*
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

box => find x*y have max water
 0,1,2,3,4,5,6,7,8
[1,8,6,2,5,4,8,3,7]
 L               R
   L             R


*/
class Solution {
public:
    int maxArea(vector<int>& height) {
        int n = height.size();
        int L=0, R=n-1;
        int ans=0;
        while(L<R) {
            ans = max(ans,  (R-L)*min(height[L],height[R]));
            if (height[L]<height[R]) L++;
            else R--;
        }
        return ans;
    }
};