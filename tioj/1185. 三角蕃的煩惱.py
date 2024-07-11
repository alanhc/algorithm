while True:
    try:
        a, b, c = sorted([int(x) for x in input().split()])
    except EOFError:
        break
    if a + b > c:
        print('SAFE')
    else:
        print('BYE')