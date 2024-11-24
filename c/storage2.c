#include<stdio.h>

char *getString()
{
    char str[] = "Will I be printed?";   
    return str;
}
int main()
{
    printf("%s", getString()); // 這行會錯，因為str是local variable，會在函數結束時被釋放
    getchar();
}
/* 修正方式
//1. 將str改為static
char *getString() {
    static char str[] = "Will I be printed?";   
    return str;
}
//2. 將str改為malloc
char *getString() {
    char *str = (char*)malloc(100);
    strcpy(str, "Will I be printed?");
    return str;
}  

*/