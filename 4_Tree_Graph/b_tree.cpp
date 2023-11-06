#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* left;
    Node* right;
    Node(int value): data(value), left(nullptr), right(nullptr) {}
};

Node* root = nullptr;

Node* insert_recursive(Node* node, int data) {
    if (node == nullptr) {
        return new Node(data);
    } else if (data < node->data) {
        node->left = insert_recursive(node->left, data);
    } else if (data > node->data) {
        node->right = insert_recursive(node->right, data);
    }
    return node;
}
Node* find_recursive(Node* node, int data) {
    if (node==nullptr) return nullptr;
    if (data==node->data) return node;
    else if (data<node->data) return find_recursive(node->left, data);
    else return find_recursive(node->right, data);
}
Node* minValueNode(Node* node)
{
    Node* now = node;
    while(now->left!=nullptr) {
        now=now->left;
    }
    return now;
}
Node* remove_recursive(Node* node, int data) {
    if (node == nullptr) {
        return new Node(data);
    } else if (data < node->data) {
        node->left = remove_recursive(node->left, data);
    } else if (data > node->data) {
        node->right = remove_recursive(node->right, data);
    } else {
        if (node->left==nullptr) {
            Node* next = node->right;
            delete node;
            return next;
        } else if (node->right==nullptr)
        {
            Node* next = node->left;
            delete node;
            return next;
        } else {
            Node* next = minValueNode(node->right);//find minValueNode
            node->data = next->data;
            node->right = remove_recursive(node->right, node->data); //delete  minValueNode  find previously
        }
    }
}

void inorder(Node* node) {
    if (node == nullptr) return;
    inorder(node->left);
    cout << node->data << " ";
    inorder(node->right);
}
void preorder(Node* node) {
    if (node == nullptr) return;
    cout << node->data << " ";
    inorder(node->left);
    inorder(node->right);
}
void postorder(Node* node) {
    if (node == nullptr) return;
    inorder(node->left);
    inorder(node->right);
    cout << node->data << " ";
}

int main() {
    root = insert_recursive(root, 2);
    root = insert_recursive(root, 1);
    root = insert_recursive(root, 3);
    
    cout << ((find_recursive(root, 1) == nullptr) ? "not found" : "found") << endl;
    cout << ((find_recursive(root, 10) == nullptr) ? "not found" : "found") << endl;
    root = insert_recursive(root, 4);

    inorder(root); cout<< endl;
    preorder(root); cout<< endl;
    postorder(root);
}
