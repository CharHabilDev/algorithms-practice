#include <stdio.h>

float get_edge_length(void);

int main(void)
{
    float edge = get_edge_length();

    if (edge == 0.0)
    {
        printf("Invalid value.\n");
        return 1;
    }

    float volume = edge * edge * edge;
    printf("The cube volume is %.2f\n", volume);
    return 0;
}

float get_edge_length(void)
{
    printf("Enter the length of the edge: ");

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