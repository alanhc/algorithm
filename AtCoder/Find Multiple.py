a,b,c = map(int , input ().split())
find = False
for i in range (a,b+1):
    if i % c == 0:
        print (i)
        find = True
        break
if not find:
    print (-1)