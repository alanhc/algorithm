
while True:
    try:
        m,n = map(int, input().split())
        arr = [list(map(int, input().split())) for _ in range(m)]
        flip = [[0]*m for _ in range(n)]
        for i in range(m):
            for j in range(n):
                flip[j][i] = arr[i][j]
        for i in range(n):
            print(" ".join(map(str, flip[i])))
    except EOFError:
        break
