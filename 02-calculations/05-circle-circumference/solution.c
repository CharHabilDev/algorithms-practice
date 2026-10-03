#include <stdio.h>

float get_radius(void);

int main(void)
{   
    float radius = get_radius();

    if (radius == 0.0)
    {
        printf("Invalid radius value.\n");
        return 1;
    }

    const double PI = 3.141592653589793;
    double circumference = 2 * PI * radius;

    printf("Circle circumference is %f\n", circumference);
    return 0;
}


float get_radius(void){
    printf("Enter the radius of the circle: ");
    float radius;

    if (scanf("%f", &radius) != 1)
    {
        return 0.0;
    }

    if (radius <= 0)
    {
        return 0.0;
    }

    return radius;
}