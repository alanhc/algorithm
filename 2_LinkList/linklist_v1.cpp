#include <iostream>
using namespace std;

struct Node
{
    int data;
    Node *next;
};

Node *head = nullptr;
void insertNode(int data)
{
    Node *newNode = new Node();
    newNode->data = data;
    newNode->next = nullptr;

    // head沒有東西
    if (head == nullptr)
    {
        head = newNode;
        return;
    }
    // head有東西
    Node *now = head;
    // 找到 ->next 是空的接上去
    while (now->next != nullptr)
    {
        now = now->next;
    }
    now->next = newNode;
}
void deleteNode(int data)
{
    if (head == nullptr)
        return;
    // 找到要刪除的節點
    Node *to_delete = head;
    Node *prev = nullptr;
    while (to_delete->data != data)
    {
        prev = to_delete;
        to_delete = to_delete->next;
    }
    if (to_delete != nullptr)
    {
        if (prev == nullptr)
            head = to_delete->next;
        else
            prev->next = to_delete->next;

        delete to_delete;
    }
}
void printList()
{
    Node *now = head;
    while (now != nullptr)
    {
        cout << now->data << " ";
        now = now->next;
    }
    cout << endl;
}
int main()
{
    insertNode(1);
    insertNode(2);
    insertNode(3);
    insertNode(4);
    insertNode(5);
    printList();
    // 刪除首節點
    deleteNode(1);
    printList();
    // 刪除中間
    deleteNode(3);
    printList();

    return 0;
}