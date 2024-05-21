prime = [True] * 5005
for i in range(2, 5005):
    for j in range(2, i):
        if i%j==0:
            prime[i] = False
            break
while True:
    try:
        n = int(input())
        ans = []
        for i in range(2,n+1):
            if prime[i]:
                ans.append(i)
        print(f"primes between 1 ~ {n}:", " ".join(map(str, ans)))
    except EOFError:
        break