#include <stdio.h>
#include <stdlib.h>
typedef struct Node {
    int data;
    struct Node *next;
} Node;
void push(Node **head, int data) {
    Node *new_node = (Node *)malloc(sizeof(Node));
    new_node->data = data;
    new_node->next = *head;
    *head = new_node;
}
void pop(Node **head) {
    Node *temp = *head;
    *head = (*head)->next;
    free(temp);
}
void print(Node *head) {
    for (Node *cur = head; cur != NULL; cur = cur->next) {
        printf("%d ", cur->data);
    }
    printf("\n");
}
int main(void) {
    Node *head = NULL;
    push(&head, 1);
    print(head);
    push(&head, 2);
    print(head);
    pop(&head);
    print(head);
    return 0;
}