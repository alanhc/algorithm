#include <iostream>
using namespace std;

void swap(int &c, int &d) {
    int tmp = c;
    c = d;
    d = tmp;
}

int main() {
    int a = 10, b = 5;
    cout << a << " " << b << endl;  // Output: 10, 5

    // Call the swap function here to swap “a” and “b”
    swap(a, b);

    cout << a << " " << b << endl;  // Output: 5, 10
    return 0;
}