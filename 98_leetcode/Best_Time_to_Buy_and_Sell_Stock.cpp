/*
Input: prices = [7,1,5,3,6,4]
Output: 5
x max_profit     min
7 0(max(7-7),0)  7
1 0(max(1-1),0)  1
...
6 5(max(6-1),4)  1
*/
class Solution
{
public:
    int maxProfit(vector<int> &prices)
    {
        int min_p = prices[0];
        int max_profit = 0;
        for (int i = 0; i < prices.size(); i++)
        {
            max_profit = max(prices[i] - min_p, max_profit);
            min_p = min(min_p, prices[i]);
        }
        return max_profit;
    }
};