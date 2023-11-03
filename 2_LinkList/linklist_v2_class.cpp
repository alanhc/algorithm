#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

class LinkedList {
public:
    LinkedList() : head(nullptr) {}

    void insertNode(int data) {
        Node* newNode = new Node();
        newNode->data = data;
        newNode->next = nullptr;

        if (head == nullptr) {
            head = newNode;
        } else {
            Node* current = head;
            while (current->next != nullptr) {
                current = current->next;
            }
            current->next = newNode;
        }
    }

    bool deleteNode(int data) {
        if (head == nullptr) {
            return false;
        }

        if (head->data == data) {
            Node* temp = head;
            head = head->next;
            delete temp;
            return true;
        }

        Node* current = head;
        while (current->next != nullptr) {
            if (current->next->data == data) {
                Node* temp = current->next;
                current->next = current->next->next;
                delete temp;
                return true;
            }
            current = current->next;
        }

        return false;
    }

    void printList() {
        Node* current = head;
        while (current != nullptr) {
            cout << current->data << " ";
            current = current->next;
        }
        cout << endl;
    }

    ~LinkedList() {
        while (head != nullptr) {
            Node* temp = head;
            head = head->next;
            delete temp;
        }
    }

private:
    Node* head;
};

int main() {
    LinkedList myList;

    myList.insertNode(1);
    myList.insertNode(2);
    myList.insertNode(3);
    myList.insertNode(4);
    myList.insertNode(5);
    myList.printList();

    if (myList.deleteNode(1)) {
        cout << "Deleted 1" << endl;
        myList.printList();
    }

    if (myList.deleteNode(3)) {
        cout << "Deleted 3" << endl;
        myList.printList();
    }
    return 0;
}
