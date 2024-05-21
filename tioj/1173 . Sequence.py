a,b,c = map(int, [input() for _ in range(3)])
if a==b==c and a*b*c != 0:
    print("both")
elif a*c == b*b and a*b*c != 0:
    print("geometric")
elif a+c == b+b:
    print("arithmetic")
else:
    print("normal")
