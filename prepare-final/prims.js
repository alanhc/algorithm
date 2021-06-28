//input: G=(V,E)
//output: mst tree
let mst_n = 0

Y = Array(n).fill(1)
D = Array(n).fill(max_num)
E = Array(n).fill(start)


while (mst_n < n) {
    Y[start] = 0


    for (y=0;y<n;y++) {
        if (Y[y]==1 && graph[start][y]<D[y]) {
            D[y] = graph[start][y]
            E[y] = start
        }
    }

    let minKey = 0
    for (let i=0; i<n; i++) {
        if (D[i]<D[minKey]) minKey = i
    }
    if (D[minKey]===max_num) break
    mst_n.push([start, minKey, , D[minKey]])
    D[minKey] = max_num
    start = minKey

    mst_n++
}
if (mst_n<n) print("no mst")
else print_mst()
