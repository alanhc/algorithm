// Stack（堆疊）— 括號配對模板 + 內嵌測試（單檔精簡版）。
//
// 什麼時候用：括號是否合法、巢狀結構配對、「下一個更大元素」。
// 訊號：valid parentheses、nested、next greater。
//
// 編譯執行：g++ -std=c++17 -Wall -Wextra stack_parentheses.cpp -o stack_parentheses && ./stack_parentheses
#include <cassert>
#include <iostream>
#include <stack>
#include <string>
using namespace std;

// 判斷字串的括號是否全部正確配對。時間 O(n)、空間 O(n)。
bool isValidParentheses(const string& s) {
    stack<char> st;
    for (char ch : s) {
        if (ch == ')' || ch == ']' || ch == '}') {   // 遇到右括號
            char need = (ch == ')') ? '(' : (ch == ']') ? '[' : '{';
            if (st.empty() || st.top() != need) return false;
            st.pop();
        } else {                                      // 左括號入堆
            st.push(ch);
        }
    }
    return st.empty();                                // 全部配對完才對
}

int tests_run = 0;

void check(const string& s, bool expected) {
    ++tests_run;
    bool got = isValidParentheses(s);
    assert(got == expected);
}

int main() {
    check("()", true);         // 單一配對
    check("()[]{}", true);     // 多組並排
    check("(]", false);        // 種類不符
    check("([)]", false);      // 交錯不合法
    check("{[]}", true);       // 正確巢狀
    check("", true);           // 空字串
    check("(", false);         // 只有左括號
    check(")", false);         // 只有右括號
    check("(((", false);       // 多個未閉合

    cout << "All " << tests_run << " tests passed\n";
    return 0;
}
