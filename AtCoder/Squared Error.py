n = int(input())
a = list(map(int, input().split()))

ans = 0
s1 = 0  # Sum of squares of elements
s2 = 0  # Sum of elements

for i in range(n):
    s1 += a[i] * a[i]  # Square each element and add to s1
    s2 += a[i]        # Add element to s2

ans = n * s1 - s2 * s2

print(ans)
