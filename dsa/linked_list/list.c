#include <stdlib.h>
#include <stdio.h> 
#include "list.h"
Node* create_node(int n)
{
    printf("create node %d\n", n);
    Node* node = (Node*)malloc(sizeof(Node));
    node->data = n;
    node->next = NULL;
    return node;
}

void print_list(Node* node)
{
    puts("print list");
    while (node!=NULL)
    {
        printf("%d ", node->data);
        node = node->next;
    }
    puts("");
}
void free_list(Node* node)
{
    puts("free list");
    Node* next;
    while (node != NULL)
    {
        next = node->next;
        free(node);
        node = next;
    }

}
void insert_tail(Node* node, int n)
{
    printf("insert tail %d\n", n);
    while (node->next != NULL)
    {
        node = node->next;
    }
    node->next = create_node(n);
}

void insert_head(Node* dummy, int value)
{
    printf("insert head %d\n", value);
    Node* new_node = create_node(value);       // 建立新節點
    new_node->next = dummy->next;              // 指向原本第一個節點
    dummy->next = new_node;                    // dummy 指向新的第一個節點
}
void delete_node(Node* node, int n)
{
    if (!node) {
        puts("Error: Cannot delete from a null list.");
        return;
    }
    printf("delete node %d\n", n);
    Node* pre = node;
    node = node->next;
    while (node!=NULL)
    {
        if (node->data==n) {
            pre->next = node->next;
            free(node);
            return;
        }
        pre = node;
        node = node->next;
    }
}
void delete_mid(Node* node)
{
    puts("delete mid");
    Node* slow = node->next;
    Node* fast = node->next->next;
    Node* pre = node;
    while (fast != NULL && fast->next != NULL)
    {
        pre = slow;
        slow = slow->next;
        fast = fast->next->next;
    }
    if (slow!= NULL) {
        pre->next = slow->next;
        free(slow);
    }   
}
void delete_dup(Node *head)
{
    if (!head)
        return;

    Node *current = head;         /* dummy head 假設存在 */
    Node *next    = head->next;

    while (next) {
        if (current->data == next->data) {
            Node *dup_next = next->next;
            current->next  = dup_next;
            free(next);           /* 直接釋放重複節點 */
            next = dup_next;      /* 不移動 current，繼續檢查 */
        } else {
            current = next;
            next    = next->next;
        }
    }
}
void swap(Node *head, int a, int b)
{
    if (a == b || !head || !head->next)
        return;

    /* 1. 找到 a、b 的前驅與本身 */
    Node *prevA = head, *currA = head->next;
    while (currA && currA->data != a) {
        prevA = currA;
        currA = currA->next;
    }

    Node *prevB = head, *currB = head->next;
    while (currB && currB->data != b) {
        prevB = currB;
        currB = currB->next;
    }

    /* 2. 其中一個沒找到就退出 */
    if (!currA || !currB)
        return;

    /* 3. 若 a、b 相鄰，需要特別分左右兩種情況 */
    if (currA->next == currB) {                 /* A 在 B 前 */
        prevA->next = currB;
        currA->next = currB->next;
        currB->next = currA;
    } else if (currB->next == currA) {          /* B 在 A 前 */
        prevB->next = currA;
        currB->next = currA->next;
        currA->next = currB;
    } else {                                    /* 不相鄰 */
        /* 4. 一般情況：交換前驅的 next，再交換兩節點的 next */
        prevA->next = currB;
        prevB->next = currA;

        Node *tmp   = currA->next;
        currA->next = currB->next;
        currB->next = tmp;
    }
}
void reverse(Node *head)
{
    puts("reverse");

    /* 1. 判空：若只有 dummy，直接返回 */
    if (!head || !head->next || !head->next->next)
        return;

    Node *prev = NULL;          /* 已反轉部分的第一節點（翻轉後是尾）   */
    Node *curr = head->next;    /* 目前掃描到的節點（待反轉）           */
    Node *next = NULL;          /* 暫存 curr->next，防止指標失效        */

    while (curr) {
        next        = curr->next;   /* 2. 暫存下一節點                    */
        curr->next  = prev;         /* 3. 反轉指向                       */
        prev        = curr;         /* 4. prev 前進                      */
        curr        = next;         /* 5. curr 前進                      */
    }
    /* 6. 迴圈結束時 prev 指向反轉後的新鏈首，把 dummy 指向它 */
    head->next = prev;
}

void reverseK(Node *node, int k) {
    if (k <= 1) return;
    Node *dummy = node;
    Node *prev_group_end = dummy;
    while (1) {
        Node *kth = prev_group_end;
        for (int i = 0; i < k && kth; ++i)
            kth = kth->next;
        if (!kth) break;
        Node *group_start = prev_group_end->next;
        Node *next_group = kth->next;
        // Create a temporary dummy node that points to this group
        Node *temp_dummy = create_node(-1);
        temp_dummy->next = group_start;
        
        // Temporarily cut off the link to next_group
        kth->next = NULL;
        
        // Reverse the group using the existing reverse function
        reverse(temp_dummy);
        
        // Reconnect with the next group
        group_start->next = next_group;
        
        // Connect previous group end to the new start (which was the kth node)
        prev_group_end->next = temp_dummy->next;
        
        // Update prev_group_end for next iteration
        prev_group_end = group_start;
        
        // Free the temporary dummy node
        free(temp_dummy);
    }
}
// Merge two sorted lists using comparator
Node* merge(Node *a, Node *b, int (*cmp)(int, int)) {
    Node dummy;
    Node *tail = &dummy;
    dummy.next = NULL;
    while (a && b) {
        if (cmp(a->data, b->data) <= 0) {
            tail->next = a;
            a = a->next;
        } else {
            tail->next = b;
            b = b->next;
        }
        tail = tail->next;
    }
    tail->next = a ? a : b;
    return dummy.next;
}

// Helper: merge sort for linked list with comparator
static Node* merge_sort_internal(Node* head, int (*cmp)(int, int)) {
    if (!head || !head->next) return head;
    Node *slow = head, *fast = head->next;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
    }
    Node *mid = slow->next;
    slow->next = NULL;
    Node *left = merge_sort_internal(head, cmp);
    Node *right = merge_sort_internal(mid, cmp);
    return merge(left, right, cmp);
}

// Sort using merge sort with comparator function
void sort(Node *node, int (*cmp)(int, int)) {
    node->next = merge_sort_internal(node->next, cmp);
}
// Convenience: ascending order comparator
int cmp_asc(int a, int b) { return a - b; }
// Convenience: descending order comparator
int cmp_desc(int a, int b) { return b - a; }

void sort_ascend(Node *node) {
    puts("sort ascend");
    sort(node, cmp_asc);
}

void sort_descend(Node *node) {
    puts("sort descend");
    sort(node, cmp_desc);
}