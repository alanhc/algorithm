#include <stdio.h>

// Define a function pointer type that points to functions taking char* and returning void
typedef void (*pf)(char *);

// Define papf as an array of 3 pointers to functions of type pf
pf papf[3]; // This is now a correct declaration of an array of function pointers

void exampleFunction1(char *str) {
    printf("Function 1: %s\n", str);
}

void exampleFunction2(char *str) {
    printf("Function 2: %s\n", str);
}

void exampleFunction3(char *str) {
    printf("Function 3: %s\n", str);
}

int main() {
    // Initialize the function pointers in the array
    papf[0] = exampleFunction1; // No casting needed
    papf[1] = exampleFunction2; // No casting needed
    papf[2] = exampleFunction3; // No casting needed

    // Call each function using the function pointer array
    for (int i = 0; i < 3; i++) {
        papf[i]("Hello from function"); // Directly call the function
    }

    return 0;
}