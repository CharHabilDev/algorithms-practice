def get_side():
    side = input("Enter the value of the side of the square: ").strip()

    try:
        side = float(side)
        if side <= 0:
            return None
        
        return side
    except ValueError:
        return None


def main():
    side = get_side()
    if side is None:
        print("Invalid side value.")

    else:
        area = side * side
        print(f"Square area is {area}")


if __name__ == '__main__':
    main()