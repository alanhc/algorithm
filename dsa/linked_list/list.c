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
    printf("delete node %d\n", n);
    Node* pre = node;
    node = node->next; // 跳過 dummy head
    while (node!=NULL)
    {
        // 如果找到要刪除的節點
        if (node->data==n) {
            pre->next = node->next;
            free(node);
            return;
        }
        // 如果沒有找到，繼續往下走
        pre = node; 
        node = node->next;
    }
}
void delete_mid(Node* head)
{
    if (!head || !head->next || !head->next->next) return;
    puts("delete mid");
    Node* slow = head->next; // 跳過 dummy head
    Node* fast = head->next; // 跳過 dummy head
    Node* pre = head;
    while (fast && fast->next)
    {
        pre = slow;
        slow = slow->next;
        fast = fast->next->next;
    }
    // 如果 slow 為 NULL，表示鏈表長度為 1 或 0，無需刪除
    if (slow) {
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
    puts("swap");
    if (a == b || !head || !head->next)
        return;

    /* 1. 找到 a、b 的前驅與本身 */
    Node* iter = head;          /* 從 dummy 開始 */
    Node* prevA = NULL;         /* a 的前驅 */
    Node* prevB = NULL;         /* b 的前驅 */
    Node* currA = NULL;         /* a 的本身 */
    Node* currB = NULL;         /* b 的本身 */
    while (iter) {
        if (iter->data == a) {
            currA = iter;        /* 找到 a */
            if (!prevA)          /* 若 prevA 還沒找到，則記錄前驅 */
                prevA = head;    /* dummy head */
        } else if (iter->data == b) {
            currB = iter;        /* 找到 b */
            if (!prevB)          /* 若 prevB 還沒找到，則記錄前驅 */
                prevB = head;    /* dummy head */
        }
        if (currA && currB)      /* 都找到了就可以退出迴圈 */
            break;
        iter = iter->next;
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

/* 以 dummy 為鏈首，將串列每 k 個節點反轉 */
void reverseK(Node *dummy, int k) {
    puts("reverseK");
    if (k <= 1 || !dummy || !dummy->next) return;

    Node *group_prev = dummy;          /* 目前這組前一個節點（首輪為 dummy） */

    while (1) {
        /* 1️⃣ 找到這組第 k 個節點 (kth) */
        Node *kth = group_prev;
        for (int i = 0; i < k && kth; ++i)
            kth = kth->next;
        if (!kth) break;               /* 剩餘不足 k 個，不反轉 */

        Node *group_next = kth->next;  /* 下一組開頭 */
        /* 2️⃣ 就地反轉 [group_prev->next, kth] 之間的指標 */
        Node *prev = group_next;
        Node *curr = group_prev->next;
        while (curr != group_next) {
            Node *tmp = curr->next;
            curr->next = prev;
            prev       = curr;
            curr       = tmp;
        }
        /* 3️⃣ 接回前後串列 */
        Node *old_group_head = group_prev->next;
        group_prev->next = kth;
        group_prev = old_group_head;   /* 為下一輪準備：此時它是反轉後的尾 */
    }
}
// Merge two sorted lists using comparator
Node* merge(Node *a, Node *b, int (*cmp)(int, int)) {
    Node dummy;
    Node *tail = &dummy;
    dummy.next = NULL;
    while (a && b) {
        if (cmp(a->data, b->data) <= 0) {
            tail->next = a; // 接上較小的節點
            a = a->next;
        } else {
            tail->next = b;
            b = b->next;
        }
        tail = tail->next;
    }
    tail->next = a ? a : b; // 接上剩餘的節點
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