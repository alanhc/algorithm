n = int(input())
while n != 0:
    n-=1
    k, word = input().split()
    k = int(k)
    mx=0
    ct=[0]*26
    for i in range(k):
        ct[ord(word[i])-ord('a')]+=1
        mx = ct[ord(word[i])-ord('a')] if ct[ord(word[i])-ord('a')]>mx else mx
    for i in range(26):
        if ct[i]==mx:
            print(chr(i+ord('a')), end="")
    print()
