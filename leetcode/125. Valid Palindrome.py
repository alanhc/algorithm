"""
Palindrome: 前後對稱的字串
"""
# 2024/7/8: 1st try
# time complexity: O(n), space complexity: O(n)
class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = ''.join(filter(str.isalnum, s)).lower()
        return s == s[::-1]
# 2024/7/8: 2nd try two pointers
# time complexity: O(n), space complexity: O(1)
class Solution:
    def isPalindrome(self, s: str) -> bool:
        l, r = 0, len(s) - 1
        while l < r:
            if not s[l].isalnum():
                l += 1
            elif not s[r].isalnum():
                r -= 1
            else:
                if s[l].lower() != s[r].lower():
                    return False
                l += 1
                r -= 1
        return True
s = Solution()
print(s.isPalindrome("A man, a plan, a canal: Panama"))