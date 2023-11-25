class Solution {
public:
    int ct = 0;

    void extendPalindrome(string s, int center, int right) {
        while (center >= 0 && right < s.length() && s[center] == s[right]) {
            ct++;
            center--;
            right++;
        }
    }

    int countSubstrings(string s) {
        int n = s.length();

        if (s.empty()) return 0;

        for (int center = 0; center < n; center++) {
            extendPalindrome(s, center, center);   // odd palindrome
            extendPalindrome(s, center, center + 1); // even palindrome
        }

        return ct;
    }
};