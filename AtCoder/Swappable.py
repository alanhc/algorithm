from collections import Counter
n = int(input())
arr = list(map(int, input().split()))
mp = {}
ans = n*(n-1)//2 # 所有排列組合（全部不一樣）
for v in arr: 
    w = mp.get(v, 0) 
    ans -= w # 減去已經出現過的排列組合
    mp[v] = w+1
print(ans)