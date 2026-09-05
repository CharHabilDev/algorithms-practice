#include <stdio.h>


int get_seconds(void);

int main(void){
    int user_seconds = get_seconds();

    int hours = user_seconds / 3600;
    int remaining_seconds = user_seconds % 3600;
    int minutes = remaining_seconds / 60;
    int seconds = remaining_seconds % 60;

    printf("%i seconds = %iH:%iM:%iS\n", user_seconds, hours, minutes, seconds);
    return 0;
}


int get_seconds(void){
    printf("Seconds: ");
    int seconds;
    scanf("%i", &seconds);
    return seconds;
}