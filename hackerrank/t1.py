def getMaximumMEX(arr):
    arr.sort()
    ans = 0
    for i in range(len(arr)):
        if arr[i] >= ans:
            ans += 1
        else:
            break
    return ans