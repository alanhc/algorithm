n = int(input())
ans=[]
first = True
for i in range(2,n):
    ct=0
    while n%i==0:
        n//=i
        ct+=1
    if ct>0:
        if ct == 1:
            out = "" if first else " * "
            print(f"{out}{i}", end="")
        else:
            out = "" if first else " * "
            print(f"{out}{i}^{ct}", end="")
        if first:
            first = False
if n>1:
    out = "" if first else " * "
    print(f"{out}{n}", end="")
ans
    