#include <stdio.h>


float get_number(const char *label);


int main(void){
    const char *first = "first";
    const char *second = "second";
    const char *third = "third";

    float first_number = get_number(first);
    float second_number = get_number(second);
    float third_number = get_number(third);

    float sum = first_number + second_number + third_number;

    float average = sum/3;

    printf("Average of %f, %f, %f is %f\n", first_number, second_number, third_number, average);
    return 0;
}


float get_number(const char *label){
    printf("Enter %s number : ", label);
    float number;
    scanf("%f", &number);
    return number;
}