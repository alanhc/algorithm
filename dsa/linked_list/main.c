#include "list.h"
#include <stdio.h>

int main()
{
    Node *head = create_node(-1);
    for (int i=0; i<5; i++)
    {
        insert_tail(head, i);
    }
    print_list(head);
    for (int i=5; i<10; i++)
    {
        insert_head(head, i);
    }
    print_list(head);
    delete_node(head, 3);
    print_list(head);
    
   
    delete_mid(head);
    print_list(head);
    free_list(head);
    head = create_node(-1);
    for (int i=0; i<5; i++)
    {
        for (int j=0; j<2; j++) {
            insert_tail(head, i);
        }
    }
    print_list(head);
    delete_dup(head);
    print_list(head);
    swap(head, 1, 4);
    print_list(head);
    free_list(head);
    head = create_node(-1);
    for (int i=0; i<5; i++)
    {
        insert_tail(head, i);
    }
    print_list(head);
    reverse(head);
    print_list(head);
    free_list(head);
    head = create_node(-1);
    for (int i=0; i<12; i++)
    {
        insert_tail(head, i);
    }
    print_list(head);
    reverseK(head, 2);
    free_list(head);
    head = create_node(-1);
    for (int i=0; i<10; i++)
    {
        insert_tail(head, i);
    }
    print_list(head);
    sort_descend(head);
    print_list(head);
    free_list(head);
    head = create_node(-1);
    for (int i=0; i<10; i++)
    {
        insert_head(head, i);
    }
    print_list(head);
    sort_ascend(head);
    print_list(head);
    free_list(head);
    return 0;
}