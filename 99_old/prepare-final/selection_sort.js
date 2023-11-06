
let arr=[]
let n = arr.length
for (let i=0; i<n-1; i++) {
    let min_idx = i
    for (let j=i+1; j<n; j++) {
        if (arr[j]<a[min_idx]) min_idx = j
    }
    if (min_idx!==j) swap(arr[min_idx], arr[j])
}