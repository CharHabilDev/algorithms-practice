#include <stdio.h>


int main(void){
    printf("What's your name? ");
    char name[50];
    scanf("%49s", name);
    printf("Hello, %s\n", name);
}