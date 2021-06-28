

let n = arr.length
Quick_Sort_recursive(arr, 0, n-1)
function Quick_Sort_recursive(arr, left, right)
{
    if (left<right) {
        let i=left+1
        let j=right
        let target = arr[left]
        while (i<=j) {
            while(arr[i]<target && i<=j) i++
            while(arr[j]>=target && i<=j) j++
            if (i<j) swap(arr[i], arr[j])
        }
    }
    if (left<j) swap(arr[left], arr[j])
    Quick_Sort_recursive(arr, left, j-1)
    Quick_Sort_recursive(arr, j+1, right)
}
function Quick_Sort_recursive(arr, left, right)
{
    let stack=[]
    stack.push([left, right])
    while (stack.length) {
        let last = stack.pop()
        
        let left = last[0]
        let right = last[1]
        let target = arr[left]
        let i = left+1
        let j = right
        while (i<=j) {
            while (arr[i]<target &&i<=j) i++
            while (arr[j]>=target && i<=j) j--
            if (i<j) swap(arr[i], arr[j])
        } 
        if (left<j) swap(arr[left], arr[j])
        if (left<j-1) stack.push([left, j-1])
        if (j+1<right) stack.push([j+1, right])
    }
}