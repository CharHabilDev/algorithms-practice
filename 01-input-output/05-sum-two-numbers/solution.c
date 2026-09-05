#include <stdio.h>


float get_number(char *label);

int main(void){
    char *first = "first";
    float first_number = get_number(first);

    char *second = "second";
    float second_number = get_number(second);

    float sum = first_number + second_number;

    printf("Sum of %f and %f is %f.\n", first_number, second_number, sum);
    return 0;
}


float get_number(char *label){
    printf("Enter %s number : ", label);
    float number;
    scanf("%f", &number);
    return number;
}