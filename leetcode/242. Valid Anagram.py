"""
問題：看不懂 anagram 是什麼意思，經過查詢後，anagram 是指兩個字串的字母相同，但是排列不同，例如：'anagram' 和 'nagaram'。
"""
# 2024/7/8: 1st try
# time complexity: O(nlogn), space complexity: O(n)
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return sorted(s) == sorted(t)
    


# 2024/7/8: 2nd try
# time complexity: O(n), space complexity: O(n)
from collections import Counter
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return Counter(s) == Counter(t)