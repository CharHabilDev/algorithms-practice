from math import pi

def get_raduis():
    str_radius = input("Enter the radius of the circle: ").strip()

    try:
        radius = float(str_radius)
        if radius <= 0:
            return None
        return radius
    except ValueError:
        return None


def main():
    radius = get_raduis()
    if radius is None:
        print("Invalid radius value.")
        return

    circumference = 2 * pi * radius

    print(f"Circle circumference is {circumference}")


if __name__ == '__main__':
    main()