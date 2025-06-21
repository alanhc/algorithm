#include <stdlib.h>
#include <stdio.h> 
#include "list.h"
Node* create_node(int n)
{
    Node* node = (Node*)malloc(sizeof(Node));
    node->data = n;
    node->next = NULL;
    return node;
}

void print_list(Node* node)
{
    while (node!=NULL)
    {
        printf("%d ", node->data);
        node = node->next;
    }
    puts("");
}
void free_list(Node* node)
{
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
    while (node->next != NULL)
    {
        node = node->next;
    }
    node->next = create_node(n);
}
void insert_head(Node* dummy, int value)
{
    Node* new_node = create_node(value);       // 建立新節點
    new_node->next = dummy->next;              // 指向原本第一個節點
    dummy->next = new_node;                    // dummy 指向新的第一個節點
}
void delete_node(Node* node, int n)
{
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