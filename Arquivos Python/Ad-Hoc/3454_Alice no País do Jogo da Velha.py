game = input()
os = game.count("O")
if os != 1:
    print("?")
elif "XX" in game:
    print("Alice")
else:
    print("*")