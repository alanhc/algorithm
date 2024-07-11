n = int(input())
arr = list(map(int, input().split()))
x = int(input())
sa = sum(arr)
ans = x//sa * n
x %= sa
for n in arr:
    x -= n
    ans += 1
    if x<0:
        break
print(ans)