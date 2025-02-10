## 題目
Given an array of integers `nums` and an integer `target`, return _indices of the two numbers such that they add up to `target`_.  
給定一個整數陣列 `nums` 和一個整數 `target`，返回_兩個數位的索引，使它們加起來等於 `target`_。

You may assume that each input would have **_exactly_ one solution**, and you may not use the _same_element twice.  
您可以假設每個輸入**_都只有一個_解決方案**，並且您不能兩次使用_同一個_元素。

You can return the answer in any order.  
您可以按任意順序返回答案。
**Example 1:  範例 1：**

**Input:** nums = [2,7,11,15], target = 9
**Output:** [0,1]
**Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1].

**Example 2:  範例 2：**

**Input:** nums = [3,2,4], target = 6
**Output:** [1,2]

**Example 3:  範例 3：**

**Input:** nums = [3,3], target = 6
**Output:** [0,1]

**Constraints:  約束：**
- `2 <= nums.length <= 104`
- `-109 <= nums[i] <= 109`  
    `-109 %3C= 數位[i] <= 109`
- `-109 <= target <= 109`  
    `-109 <= 目標 <= 109`
- **Only one valid answer exists.**
## 思路
- $10^9$ 應該可以用暴力解
- 只有一個答案
- a = 2,7,11,15, t=9
- find target-a[i] is in a
- using hash table
- output 是 0,1 
- 邊算邊cache, e.g. map 2->0
- 時間複雜度 O(n), 空間 O(n)
```
mp=[]
for i in range(0,len(a)):
	if target-a[i] in a:
		return [i,m[target-a[i]]] 
	mp[a[i]]=i
```
- 檢查
	- 一定有一個解
	- [1,4,1] 2

| idx | a[i] | mp         | ans  |
| --- | ---- | ---------- | ---- |
| 0   | 1    | 1->0       |      |
| 1   | 4    | 1->0, 4->1 |      |
| 2   | 1    |            | 這是答案 |

## Follow up
Can you come up with an algorithm that is less than `O(n2)` time complexity?
您能想出一種時間複雜度小於 `O（n2）` 的演算法嗎？
前述已經是

## 筆記
- hashmap
	- python: {}
	- c++: 
- 可以用enumerate
