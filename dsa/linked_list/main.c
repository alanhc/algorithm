#include "list.h"

int main()
{
    Node *head = create_node(-1);
    for (int i=0; i<5; i++)
    {
        insert_tail(head, i);
    }
    print_list(head);
    free_list(head);
    return 0;
}