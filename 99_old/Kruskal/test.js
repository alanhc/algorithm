console.log("a")

let arr = [1,3,5,6,2]
let idx = [-1,0,1,2,3,4]
let heap = Array(arr.length).fill(-1)

let n=0


function insertHeap(x)
{
    n++
    let i=n
    while (i>1 && x<heap[Math.floor(i / 2)]) {
        heap[i] = heap[Math.floor(i/2)]
        
        let tmp = idx[i]
        idx[i] = idx[Math.floor(i/2)]
        idx[Math.floor(i/2)] = tmp
        
        i = Math.floor(i/2)
    }
    heap[i] = x
}
let ans_idx = []
function deleteHeap()
{
    if (n===0) return ""
    else {
        let x = heap[1]
        ans_idx.push(idx[1])
        heap[1] = heap[n]
        idx[1] = idx[n]

        n--
        let i=1
        while (i<=Math.floor(n/2)) {
            let min_idx = -1
            if (heap[2*i]< heap[2*i+1]) min_idx=2*i
            else min_idx = 2*i+1
            if (heap[i]<heap[min_idx]) break
            let temp = 0
            temp = heap[i]
            heap[i] = heap[min_idx]
            heap[min_idx] = temp
            
            
            let tmp = idx[i]
            idx[i] = idx[min_idx]
            idx[min_idx] = tmp

            i=min_idx
        }
        
        return x
    }
   
}

for (let i=0; i<arr.length; i++) {
    insertHeap(arr[i])
}
console.log("arr:", arr)
console.log("heap:",heap)
console.log("idx:", idx)
let ans = []
for (let i=0; i<arr.length; i++) {
    ans.push(deleteHeap())
}


console.log("a:",ans)
console.log("i:",ans_idx)
console.log(":",heap)