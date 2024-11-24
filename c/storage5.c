#include<stdio.h>
int main() 
{
  typedef static int *i; // 這行會錯，因為static不能用在typedef
  int j;
  i a = &j;    
  printf("%d", *a);
  getchar();
  return 0;
}  