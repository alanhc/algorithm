## 題目
Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.  
給定一個整數陣列 `nums`，如果任何值在數位中**至少出現兩次**，則返回 `true`，如果每個元素都不同，則返回 `false`。

**Example 1:  範例 1：**

**Input:** nums = [1,2,3,1]  
**輸入：**nums = [1,2,3,1]

**Output:** true  
**輸出：**true

**Explanation:  解釋：**

The element 1 occurs at the indices 0 and 3.  
元素 1 出現在索引 0 和 3 處。

**Example 2:  範例 2：**

**Input:** nums = [1,2,3,4]  
**輸入：**nums = [1,2,3,4]

**Output:** false  
**輸出：**false

**Explanation:  解釋：**

All elements are distinct.  
所有元素都是不同的。

**Example 3:  範例 3：**

**Input:** nums = [1,1,1,3,3,4,3,2,4,2]  
**輸入：**nums = [1,1,1,3,3,4,3,3,2,4,2]

**Output:** true  
**輸出：**true

**Constraints:  約束：**

- `1 <= nums.length <= 105`
- `-109 <= nums[i] <= 109`  
    `-109 %3C= 數位[i] <= 109`
## 思路
- $10^5$ 應該有 O($n^2$)解
- 用hash table
- 時間 O(n) 空間 O(n)
mp={}
for n in a:
		if mp[a] : return true	
	mp[n]=true
return false

## Follow up
