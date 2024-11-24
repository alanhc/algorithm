#include <stdio.h>

int add(int a, int b) {
    return a + b;
}
int sub(int a, int b) {
    return a - b;
}
int main(void) {
    int (*fptr)(int, int);
    fptr = add;
    printf("%d\n", fptr(2, 3)); //5
    fptr = sub;
    printf("%d\n", fptr(2, 3)); //-1
    return 0;
}