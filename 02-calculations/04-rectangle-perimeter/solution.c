#include <stdio.h>

float get_value(const char *label);

int main(void)
{
    float length = get_value("length");
    float width = get_value("width");

    if (length == -1.0 || width == -1.0)
    {
        printf("\nInvalid value.\n");
        return 1;
    }

    float perimetre = 2 * (length + width);
    printf("Perimetre: %f\n", perimetre);

    return 0;
}


float get_value(const char *label)
{
    printf("Enter the value for the %s of the rectangle: ", label);
    float value;
    
    if (scanf("%f", &value) != 1)
    {
        return -1.0;
    }
    
    if (value <= 0)
    {
        return -1.0;
    }

    return value;
}