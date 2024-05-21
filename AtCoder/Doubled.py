n=int(input())
ans=0
for i in range(1, 10**6):
    s = str(i)
    t = s+s
    m = int(t)
    if m<=n:
        ans+=1
print(ans)