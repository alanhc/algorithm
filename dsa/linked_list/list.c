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