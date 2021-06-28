//input: G=(V,E)
//output: start->end的最短距離
let connect = Array(n).fill(-1)
let found = Array(n).fill(false)
let dist = Array(n).fill(max_num)

for (let end=0; end<n; end++) {
    dist[end] = graph[start][end]
    connect[end] = start
}

found[start] = true
dist[start] = 0

for (let step=0; step<n-1; step++) {
    let start = minDistance(max_num, found, n, dist)
    found[start] = true
    for (let end=0; end<n; end++) {
        if (!found[end] && dist[start]+graph[start][end]<dist[end] &&
            graph[start][end]>0&&dist[start]!==max_num) {
                dist[end] = dist[start] + graph[start][end]
                connect[end] = start
            }
    }
}
function minDistance(max_num, found, n, dist)
{
    _min = max_num
    _min_idx = -1
    for (let i=0; i<n; i++) {
        if (!found[i]&&dist[i]<_min) {
            _min = dist[i]
            _min_idx = i
        }
    }
    return _min_idx
}


//input: G=(V,E)
//output: 任兩點最短距離
for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++) {
        A[i][j] = graph[i][j]
        if (graph[i][j]==max_num) next[i][j] =-1
        else next[i][j] = j
    }
}


for (let k=0; k<n; j++) {
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            if (A[i][k]===max_num || A[k][j]==max_num) continue
            if (A[i][k]+A[k][j]<A[i][j]) {
                A[i][j] = A[i][k]+A[k][j]
                next[i][j] = next[i][k]
            }
        }
    }
}

function constructPath(start, end)
{
    if (next[start][end]===-1) return []
    path = [start]
    while (start!==end) {
        start = next[start][end]
        path.push(start)
    }
    return path
}