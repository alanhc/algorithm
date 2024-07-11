n = int(input())
alive = n
vis = [1] * n
ok = 1
i=0
while alive>1:
    if vis[i%n]:
        if not ok:
            vis[i%n] = 0
            alive -= 1
            ok=1
        else:
            ok=0
    i+=1
for i in range(n):
    if vis[i]:
        print(i+1)
        break