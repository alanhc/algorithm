#include "list.h"

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
    free_list(head);
    return 0;
}