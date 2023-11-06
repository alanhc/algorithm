
let n = arr.length
let _max = max(arr)

for (let exp = 1; _max/exp>0; exp*=10) {
    let ans = Array(n).fill(0)
    let count = Array(10).fill(0)
    
    for (let i=0; i<n; i++) {
        count[ (arr[i]/exp)%10 ]++
    }

    for (let i=1; i<10; i++) {
        count[i] += count[i-1]
    }
    
    for (let i=n-1; i>=0; i--) {
        ans[ count[ (arr[i]/exp)%10 ]-1 ] = arr[i]
        count[ (arr[i]/exp)%10 ]--
    }
    for (let i=0; i<n; i++) {
        arr[i] = ans[i]
    }
}
return arr