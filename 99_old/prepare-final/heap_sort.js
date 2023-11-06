function restore(arr, from, to)
{
    let i = from
    let j = -1
    while (i<to/2) {
        if (arr[2*i]<arr[2*i+1]) j=2*i
        else j=2*i+1
        if (arr[i]<=arr[j]) break
        swap(arr[i], arr[j])
        i=j
    }
}
function Heap_sort(arr)
{
    let ans = Array(arr.length)
    arr.unshift(-1)
    let n = arr.length
    for (let i=n/2; i>=1; i--) {
        restore(arr, i, n)
    }
    let idx = 0
    for (leti=n; i>1; i--) {
        ans[idx++] = arr[1]
        arr[1] = arr[i]
        restore(arr, 1, i)
    }
    return ans
}