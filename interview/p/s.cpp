#include <stdio.h>

int main()
{
    int n=5;
    int h=n/2;
    for (int i=0; i<h; i++) {
        int num = 2*(i+1)-1;
        int space = h-i;
        for (int j=0; j<space; j++) {
            printf(" ");
        }
        for (int j=0; j<num; j++) {
            printf("*");
        }
        printf("\n");
    }
    int num = 2*(h+1)-1;
    for (int j=0; j<num; j++) {
        printf("*");
    }
    printf("\n");
    num = 2*(h)-1;
    
    while (num>0)
    {
        int space = h - num/2;
        for (int i=0; i<space; i++) {
            printf(" ");
        }
        for (int i=0; i<num;i++) {
            printf("*");
        }
        printf("\n");
        num-=2;
    }
    
    
}