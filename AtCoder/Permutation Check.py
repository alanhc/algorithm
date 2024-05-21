n = int(input())
arr = list(map(int, input().split()))
if sorted(arr)==list(range(1,n+1)):
    print("Yes")
else:
    print("No")