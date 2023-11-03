#include <iostream>
using namespace std;

struct Node
{
    int data;
    Node *next;
};

Node *head = nullptr;


void push(int data) {
    Node *newNode = new Node();
    newNode->data = data;
    newNode->next = nullptr;
    if (head==nullptr) {
        head = newNode;
        return;
    } 
    //找到tail
    Node *tail = head;
    while (tail->next!=nullptr)
    {
        tail = tail->next;
    }
    tail->next = newNode;
}
int pop()
{
    if (head==nullptr) {
        return -1;
    } 
    Node *top = head;
    
    head = head->next;
    int ans = top->data;
    delete top;
    
    return ans;
}
void printList()
{
    Node *now = head;
    while (now != nullptr)
    {
        cout << now->data;
        now = now->next;
    }
    cout << endl;
}
int main()
{
    push(1);
    push(2);
    push(3);
    printList();
    cout << "popt:" << pop() << "\n";
    printList();
    return 0;
}