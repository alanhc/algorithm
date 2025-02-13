## 題目
A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.  
如果短語在將所有大寫字母轉換為小寫字母並刪除所有非字母數位字元后，其前向和向後讀取相同，則該短語是**回文**。字母數位字元包括字母和數位。

Given a string `s`, return `true` _if it is a **palindrome**, or_ `false` _otherwise_.  
給定字串 `s`，_如果它是**回文**，則_返回 `true`，_否則_返回 `false`。

**Example 1:  範例 1：**

**Input:** s = "A man, a plan, a canal: Panama"
**Output:** true
**Explanation:** "amanaplanacanalpanama" is a palindrome.

**Example 2:  範例 2：**

**Input:** s = "race a car"
**Output:** false
**Explanation:** "raceacar" is not a palindrome.

**Example 3:  範例 3：**

**Input:** s = " "
**Output:** true
**Explanation:** s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

**Constraints:  約束：**

- `1 <= s.length <= 2 * 105`
- `s` consists only of printable ASCII characters.  
    `s` 僅包含可列印的 ASCII 字元。

## 思路
- $10^5$ 應該是可以用 O(n^2)
- 左右兩個pointer往內
- false: l 跟 r 是 字母 且兩個不一樣
- 時間 O(n) 空間 O(1)
- 
l,r = 0, len(a)
while l<r:
     if not a[l].isalpha():
	     l+=1
	 if not a[r].isalpha():
		r+=1
	if a[l]!=a[r] :
		return False
	 l+=1
	 r+=1
return true
## Follow up

## 筆記
- python
	- a.isalpha()
	- a.lower()
- c++
	- isalnum(a)
	- tolower(a)