while True:
    try:
        n = int(input())
        s = mx = 0
        arr = input().split()
        for x in arr:
            x = int(x)
            s += x
            mx = x if x>mx else mx
        if 2*mx < s:
            print("YES")
        else:
            print("NO")
    except EOFError:
        break