#include <stdio.h>

char *getString()
{
   char* str = "Nice test for strings";
   return str;
}
 
int main()
{  
    char* s = getString();
    s[0] = 'a'; // 這行會錯，因為str是const string，不能修改
    printf("%s\n", s);
    return 0;
}