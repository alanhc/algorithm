let arr = []
let n = arr.length

for (let i=1; i<n; i++) {
    let j=i
    while (j>0 && arr[j-1]>a[j]) {
        swap(arr[j], [j-1])
        j--
    }
}