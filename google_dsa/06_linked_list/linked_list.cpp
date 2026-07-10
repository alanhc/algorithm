// Linked List（鏈結串列）模板：反轉鏈結串列 + 內嵌測試（單檔精簡版）。
//
// 什麼時候用：反轉鏈結串列、原地調整指標、快慢指標找中點／偵測環。
// 訊號：linked list、reverse、cycle、快慢指標。
//
// 編譯執行：g++ -std=c++17 -Wall -Wextra linked_list.cpp -o linked_list && ./linked_list
#include <cassert>
#include <iostream>
#include <vector>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x = 0, ListNode* n = nullptr) : val(x), next(n) {}
};

// 反轉單向鏈結串列，回傳新的頭。時間 O(n)、空間 O(1)。
ListNode* reverseList(ListNode* head) {
    ListNode* prev = nullptr;
    ListNode* curr = head;
    while (curr) {
        ListNode* nxt = curr->next;  // 先存下一個（斷鏈前一定要存）
        curr->next = prev;           // 反轉指向
        prev = curr;                 // 前進
        curr = nxt;
    }
    return prev;                     // 新的頭是 prev，不是 head
}

// 由 vector 建出鏈結串列，回傳頭。
ListNode* buildList(vector<int> vals) {
    ListNode dummy;                  // dummy head 簡化建構
    ListNode* tail = &dummy;
    for (int v : vals) {
        tail->next = new ListNode(v);
        tail = tail->next;
    }
    return dummy.next;
}

// 把鏈結串列走訪成 vector。
vector<int> toArray(ListNode* head) {
    vector<int> out;
    while (head) {
        out.push_back(head->val);
        head = head->next;
    }
    return out;
}

// 釋放整條串列避免記憶體洩漏。
void freeList(ListNode* head) {
    while (head) {
        ListNode* nxt = head->next;
        delete head;
        head = nxt;
    }
}

int tests_run = 0;

void check(vector<int> vals, vector<int> expected) {
    ++tests_run;
    ListNode* head = reverseList(buildList(vals));
    vector<int> got = toArray(head);
    assert(got == expected);
    freeList(head);                  // 反轉後由新的頭釋放
}

int main() {
    check({1, 2, 3, 4, 5}, {5, 4, 3, 2, 1});  // 基本反轉
    check({1, 2}, {2, 1});                     // 兩個節點
    check({1}, {1});                           // 單一節點
    check({}, {});                             // 空串列

    cout << "All " << tests_run << " tests passed\n";
    return 0;
}
