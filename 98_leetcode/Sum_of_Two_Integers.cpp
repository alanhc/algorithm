/*
1
001
2
010

a^b
011
3
011

a&b
000

3
011
2
010
5
101

3^2
001
3&2<<1
100
check if has carry a&b
(a&b)<<1


*/
class Solution {
public:
    int getSum(int a, int b) {
        return (b==0)? a:getSum(a^b, (a&b)<<1);
    }
};