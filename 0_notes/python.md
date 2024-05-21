## io
連續讀3個整數:
a,b,c = map(int, [input() for _ in range(3)])
連續讀以空白分隔:
while True:
    try:
        a, b, c = [int(x) for x in input().split()]
    except EOFError:
        break
讀入m*n array
m, n = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(m)]
## sort
sorted(arr, key=labda x:x[0])
## set
collections.defaultdict(set)
## heap
minHeap = [-n for n in nums]
heapq.heapify(minHeap)
heapq.heappop(minHeap)
heapq.heappush(minHeap, 1)

## adj list
```python
adj={src : [] for src,dst in tickets}
for src, dst in tickets:
    adj[src].append(dst)
for i, v in enumerate(adj):
```

## reverse list
array[::-1]
# swap
nums[p],nums[i] = nums[i], nums[p]