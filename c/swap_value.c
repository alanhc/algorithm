#include <stdio.h>
void swap (int c , int d){
   int temp=c;
   c=d;
   d=temp;
}
int main(void) {
    int a=5,b=10;
    swap(a,b);
    printf(" %d %d ", a,b);
    return 0;
}