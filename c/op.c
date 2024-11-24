#include <stdio.h>
// undefined behavior
int main()
{
    int x, y = 2, z, a;
    printf("%d\n", a);
    if (x = y % 2)
        z = 2;
    a = 2;
    printf("%d %d ", z, x);
    return 0;
}