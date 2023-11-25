#include <iostream>
#include <string>
#include <vector>

using namespace std;

class Solution {
public:
    /*
     * @param strs: a list of strings
     * @return: encodes a list of strings to a single string.
     */
    string encode(vector<string>& strs) {
        string res;
        for (string s : strs) {
            res += to_string(s.length()) + "#" + s;
        }
        return res;
    }

    /*
     * @param str: A string
     * @return: decodes a single string to a list of strings
     */
    vector<string> decode(string str) {
        vector<string> res;
        int i = 0;
        while (i < str.length()) {
            int j = i;
            while (str[j] != '#') {
                j++;
            }
            int length = stoi(str.substr(i, j));
            res.push_back(str.substr(j + 1,  length));
            i = j + 1 + length;
        }
        return res;
    }
};