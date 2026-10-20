def get_edge_length() -> float | None:
    str_value = input("Enter the length of the edge: ").strip()

    try:
        value = float(str_value)
        if value <= 0:
            return None
        return value

    except ValueError:
        return None


def cube_volume(edge: float) -> float:
    return edge ** 3


def main() -> None:
    edge = get_edge_length()

    if edge is None:
        print("Invalid value.")
        return

    volume = cube_volume(edge)

    print(f"The cube volume is {volume:.2f}")


if __name__ == "__main__":
    main()