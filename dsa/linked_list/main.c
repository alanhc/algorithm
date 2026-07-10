#include "list.h"


int main()
{
    Node *head = create_node(-1); // create a dummy head node
    // create a linked list with 5 nodes
    // insert 5 nodes at the tail
    for (int i=0; i<5; i++)
    {
        insert_tail(head, i);
    }
    print_list(head);
    // insert 5 nodes at the head
    for (int i=5; i<10; i++)
    {
        insert_head(head, i);
    }
    print_list(head);
    
    // delete the specific node with value 3
    delete_node(head, 3);
    print_list(head);
    
    // delete the middle node
    delete_mid(head);

    print_list(head);
    free_list(head);

    // delete the duplicate nodes
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

    // swap nodes with values 1 and 4
    swap(head, 1, 4);
    print_list(head);
    free_list(head);

    // reverse the linked list
    head = create_node(-1);
    for (int i=0; i<5; i++)
    {
        insert_tail(head, i);
    }
    print_list(head);
    reverse(head);
    print_list(head);
    free_list(head);

    // reverse the linked list in groups of k
    head = create_node(-1);
    for (int i=0; i<12; i++)
    {
        insert_tail(head, i);
    }
    print_list(head);
    reverseK(head, 2);
    print_list(head);
    free_list(head);

    // sort the linked list in descending order
    head = create_node(-1);
    for (int i=0; i<10; i++)
    {
        insert_tail(head, i);
    }
    print_list(head);
    sort_descend(head);
    print_list(head);
    free_list(head);

    // sort the linked list in ascending order
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