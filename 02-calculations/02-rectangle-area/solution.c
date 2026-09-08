#include <stdio.h>

float get_value(const char *label);

int main(void){
    float length = get_value("length");
    float width = get_value("width");

    if (length == 0.0 || width == 0.0)
    {
        printf("\nInvalid value.\n");
        return 0;
    }

    float area = length * width;
    printf("Rectangle area is %f\n", area); 
    return 0;
}

float get_value(const char *label)
{
    printf("Enter the value for the %s of the rectangle: ", label);
    float value;

    if (scanf("%f", &value) != 1)
    {
        return 0.0;
    }

    if (value <= 0)
    {
        return 0.0;
    }

    return value;
}