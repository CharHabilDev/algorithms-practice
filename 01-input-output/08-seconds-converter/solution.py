user_seconds = int(input("Seconds: "))

hours = user_seconds // 3600
remaining_seconds = user_seconds % 3600
minutes = remaining_seconds // 60
seconds = remaining_seconds % 60

print(f"{user_seconds} seconds = {hours}H:{minutes}M:{seconds}S")