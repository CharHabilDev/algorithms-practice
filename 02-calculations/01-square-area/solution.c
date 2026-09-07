#include <stdio.h>

float get_side(void);

int main(void)
{
    float side = get_side();    
    if (side == 0.0)
    {
        printf("Invalid side value.\n");
        return 0;
    }

    float area = side * side;
    printf("Square area is %f\n", area);

    return 0;
}

float get_side(void)
{
    printf("Enter the value of the side of the square: ");

    float side;

    if (scanf("%f", &side) != 1)
    {
        return 0.0;
    }

    if (side <= 0)
    {
        return 0.0;
    }

    return side;
}