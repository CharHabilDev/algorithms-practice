#include <stdio.h>
#include <math.h>


float get_radius(void);

int main(void)
{
    float radius =  get_radius();

    if (radius == -1.0)
    {
        printf("Invalid radius value.");
        return 1;
    }

    const double PI = 3.141592653589793;

    double volume = (4 * PI * pow(radius, 3.0)) / 3;
    printf("The sphere volume is %.2f\n", volume);
    return 0;
}

float get_radius(void)
{
    printf("Enter the radius of the sphere: ");
    float radius;

    if (scanf("%f", &radius) != 1 || radius <= 0)
    {
        return -1.0;
    }

    return radius;
}