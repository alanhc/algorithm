typedef struct Node
{
    int data;
    struct Node *next;
} Node;

Node* create_node(int n);
Node* create_list(Node *node);
void free_list(Node *node);
void print_list(Node *node);
void insert_tail(Node *node, int n);
void insert_head(Node *node, int n);
void delete_node(Node *node, int n);
void delete_head(Node *node);
void delete_tail(Node *node);
void delete_mid(Node *node);
void delete_dup(Node *node);
void swap(Node *node, int a, int b);
void reverse(Node *node);
void reverseK(Node *node, int k);
void sort_ascend(Node *node);
void sort_descend(Node *node);
Node* merge(Node *a, Node *b, int (*cmp)(int, int)); // Merge two sorted linked lists



