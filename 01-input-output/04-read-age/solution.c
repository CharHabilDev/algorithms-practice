#include <stdio.h>


int main(void){
    printf("How old are you? ");

    int age;
    scanf("%i", &age);

    printf("You're %i years old.\n", age);
    return 0;
}