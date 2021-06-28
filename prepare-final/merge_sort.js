

function merge(A, B)
{
    let m = A.length
    let n = B.length
    let i=0, j=0, k=0
    while (i<m && j<n) {
        if (A[i]<B[j]) C[k++] = A[i++]
        else C[k++] = B[j++]
    }
    while (i<m) C[k++] = A[i++]
    while (j<n) C[k++] = B[j++]
    return C
}
function Merge_Sort_recursive(arr)
{
    
    if (arr.length>1) {
        let n = arr.length
        let m = n/2
        
        let left = Merge_Sort_recursive(arr.slice(0,m))
        let right = Merge_Sort_recursive(arr.slice(m,n))
        return merge(left, right)
    }
    return arr

}

function Merge_Sort_non_recursive(arr)
{
    let n = arr.length
    let len = 2
    while(len<=n) {
        let ans = []
        for (let i=0; i<n; i+=len) {
            ans = ans.concat(
                merge(  
                        arr.slice(i, i+len/2),
                        arr.slice(i+len/2, i+len)
                    )
            )
        }
        arr = ans
        len *= 2
    }
    return arr
}