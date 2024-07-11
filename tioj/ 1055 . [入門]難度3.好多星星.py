a,b = map(int, input().split())
d = 1 if a<b else -1
b = b+1 if d==1 else b-1
for n in range(a,b,d):
    print("*"*n)
