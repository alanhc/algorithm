let arr = []
let n = arr.length

for (let i=0; i<n-1; i++) {
    for (let j=0; j<n-i; j++) {
        if (a[j-1]>a[j]) swap(a[j-1], a[j])
    }
}