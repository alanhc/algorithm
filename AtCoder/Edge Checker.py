# https://atcoder.jp/contests/abc240/tasks/abc240_a
a, b = map(int, input().split())
if abs(a-b)==1 or (a==1 and b==10)==1:
    print("Yes")
else:
    print("No")