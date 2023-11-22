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
class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode dummy = ListNode(0, head);
        ListNode* slow = &dummy;
        ListNode* fast = head;

        // Move fast pointer n nodes ahead
        while (n > 0 && fast) {
            fast = fast->next;
            n--;
        }

        // Move both pointers together until fast reaches the end of the list
        while (fast) {
            slow = slow->next;
            fast = fast->next;
        }

        // Remove the nth node from the end
        slow->next = slow->next->next;

        // Return the new head of the list
        return dummy.next;
    }
};