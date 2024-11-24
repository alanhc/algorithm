#include <stdio.h>

int main() {
    // 模擬記憶體的陣列，以 int 為單位，每個 int 佔 4 bytes
    unsigned char memory[] = {
        0x01, 0x23, 0x45, 0x67, // 地址 0x1000 - 0x1003
        0x89, 0xAB, 0xCD, 0xEF  // 地址 0x1004 - 0x1007
    };

    // 指向模擬記憶體的指標，並將其轉型為 int* 型別
    int *ptr = (int *)memory;

    // 輸出 *ptr + 1，這將讀取 0x1000 地址的整數值並加 1
    printf("%x\n", *ptr + 1);

    // 輸出 *(ptr + 1)，這將讀取 0x1004 地址的整數值
    printf("%x\n", *(ptr + 1));

    return 0;
}