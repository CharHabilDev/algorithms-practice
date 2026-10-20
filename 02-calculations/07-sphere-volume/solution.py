import math


def get_radius() -> float | None:
    str_radius = input("Enter the radius of the sphere: ").strip()

    try:
        radius = float(str_radius)
        if radius <= 0:
            return None
        return radius
    
    except ValueError:
        return None


def sphere_volume(radius: float) -> float:
    return (4 * math.pi * radius**3) / 3


def main() -> None:
    radius = get_radius()

    if radius is None:
        print("Invalid radius value.")
        return

    volume = sphere_volume(radius)

    print(f"The sphere volume is {volume:.2f}")


if __name__ == '__main__':
    main()