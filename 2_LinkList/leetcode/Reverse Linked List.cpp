/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
 /*
  1     ->     2     ->     nullptr
  ^ head
  1     ->     2     ->     nullptr
  ^ head       ^next
  X     <-     1     ->     
               ^ head
               ^ pre
               

 */
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode *next, *pre=nullptr;
        while (head) {
            next = head->next;
            head->next = pre;
            pre = head;
            head = next;
        }
        return pre;
    }
};