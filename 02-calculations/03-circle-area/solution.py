import math

def get_radius():
    str_radius = input('Enter the radius of the circle: ').strip()

    try:
        radius = float(str_radius)
        if radius <= 0:
            return None

        return radius
    
    except ValueError:
        return None


def main():
    radius = get_radius()
    if radius is None:
        print("Invalid radius value.")
        return
    area = math.pi * radius * radius
    print(f"Circle area is {area}")


if __name__ == '__main__':
    main()