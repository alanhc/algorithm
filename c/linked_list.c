#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node* next;
} Node;

Node* create_node(int data) {
    Node* node = (Node*)malloc(sizeof(Node));
    if (node == NULL) {
        fprintf(stderr, "Memory allocation failed\n");
        exit(1);
    }
    node->data = data;
    node->next = NULL;
    return node;
}

void insert_head(Node** head, int data) {
    Node* node = create_node(data);
    node->next = *head;
    *head = node; // 重點是這行
}

void delete_node(Node** head, int data) {
    Node ** curr = head;
    while (*curr != NULL) {
        if ((*curr)->data == data) {
            Node* tmp = *curr;
            *curr = (*curr)->next;
            free(tmp);
            return;
        }
        curr = &(*curr)->next;
    }
}
void print_list(Node* head) {
    while (head != NULL) {
        printf("%d ", head->data);
        head = head->next;
    }
    printf("\n");
}
int main(void) {
    Node* head = NULL;
    insert_head(&head, 1);
    insert_head(&head, 2);
    insert_head(&head, 3);
    insert_head(&head, 4);
    insert_head(&head, 5);
    print_list(head); // 5 4 3 2 1
    delete_node(&head, 3);
    print_list(head); // 5 4 2 1
    delete_node(&head, 5);
    print_list(head); // 4 2 1
    delete_node(&head, 1);
    print_list(head); // 4 2
    return 0;
}