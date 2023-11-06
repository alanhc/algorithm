for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++) {
        A[i][j] = (graph[i][j]>0 && graph[i][j]!==max_num)?1:0
        if (graph[i][j]==max_num) next[i][j] =-1
        else next[i][j] = j
    }
}

for (let k=0; k<n; k++) {
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            A[i][j] = (A[i][j] || A[i][k]&&A[k][j])? 1:0
        }
    }
}