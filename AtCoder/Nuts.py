n = int(input())
arr = list(map(int, input().split()))
s=0
for n in arr:
    s+= n-10 if n>10 else 0
print(s)