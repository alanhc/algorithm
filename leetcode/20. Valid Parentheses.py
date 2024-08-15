"""
parentheses are valid if they are closed in the correct order
"""
class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        d = {')': '(', '}': '{', ']': '['}
        for c in s:
            if c in d:
                if not stack or stack.pop() != d[c]:
                    return False
            else:
                stack.append(c)
        return not stack