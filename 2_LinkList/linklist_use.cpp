#include <iostream>
#include <list>
using namespace std;
list<int> ll;
void printList() {
    list<int>::iterator i;
    for (i=ll.begin(); i!=ll.end(); i++) {
        cout << *i << " ";
    }
}
int main() {
    
    ll.push_back(1);
    ll.push_back(2);
    ll.push_back(3);
    ll.push_back(4);
    ll.push_back(5);
    printList();
}
//https://www.geeksforgeeks.org/list-cpp-stl/
