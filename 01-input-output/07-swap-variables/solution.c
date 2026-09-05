#include <stdio.h>

float get_number(const char *label);

int main(void){
    const char *first = "first";
    const char *second = "second";

    float temp_number;

    float first_number = get_number(first);
    float second_number = get_number(second);

    printf("First number: %f | Second number: %f\n", first_number, second_number);
    
    printf("\nPermutation.....\n");

    temp_number = first_number;
    first_number = second_number;
    second_number = temp_number;

    printf("First number: %f | Second number: %f\n", first_number, second_number);
    return 0;
}


float get_number(const char *label){
    printf("Enter %s number : ", label);
    float number;
    scanf("%f", &number);
    return number;
}