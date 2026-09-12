def get_value(label):
    value = input(f"Enter the value for the {label} of the rectangle: ")

    try:
        value = float(value)
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
        return

    print(f"Perimetre: {2 * (length + width)}")


if __name__ == '__main__':
    main()