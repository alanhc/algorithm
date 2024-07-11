def minFilesToChange(n, fileSize, minSize):
    if sum(fileSize) < sum(minSize):
        return -1
    reduced = [fileSize[i] - minSize[i] for i in range(n)]
    reduced.sort()
    l,r=0,n-1
    ans = set()
    while l<r:
        if reduced[l] < 0 and reduced[r]>0:
            need = min(-reduced[l], reduced[r])
            reduced[l]+=need
            reduced[r]-=need
            ans.add(l)
            ans.add(r)
        elif reduced[l] >=0:
            l+=1
    return len(ans)
n = 5
fileSize = [4, 1, 5, 2, 3]
minSize = [3, 2, 2, 1, 4]

minFilesToChange(n, fileSize, minSize)
