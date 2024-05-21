n=int(input())
ans=0
for i in range(n):
    s = input()
    if s[2]==s[3]==s[4]==s[5]: ans+=2000
    elif s[2]==s[3] and s[4]==s[5]: ans+=1500
    else: ans+=1000
print(ans)

