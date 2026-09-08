def get_value(label):
    str_value = input(f"Enter the value for the {label} of the rectangle: ").strip()

    try:
        value = float(str_value)
        if value <= 0:
            return None

        return value
    
    except ValueError:
        return None


def main():
    length = get_value('length')
    width = get_value('width')

    if length is None or width is None:
        print("Invalid value.")
    else:
        area = length * width
        print(f"Rectangle area is {area}")


if __name__ == '__main__':
    main()