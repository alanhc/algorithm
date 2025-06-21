typedef struct Node
{
    int data;
    struct Node *next;
} Node;

Node* create_node(int n);
void free_list(Node *node);
void print_list(Node *node);
void insert_tail(Node *node, int n);
void insert_head(Node *node, int n);
void delete_node(Node *node, int n);


