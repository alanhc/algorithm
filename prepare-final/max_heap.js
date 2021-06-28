let arr = [1,5,4,3,10,7,8]

class MaxHeap
{
    constructor()
    {
        this.n=0;
        this.heap=["*"]
    }
    insert(x)
    {
        this.n++
        let i=this.n
        //child 比 root大，互換
        while( i>1 ) { 
            let root_i =  Math.floor(i/2)
            if (x<this.heap[root_i]) break
            
            this.heap[i] = this.heap[root_i]
            i/=2
            i = Math.floor(i)
        }
        this.heap[i] = x
    }
    deleteMax()
    {
        let x = this.heap[1]
        this.heap[1] = this.heap[this.n]
        this.n--
        let i=1
        //由上往下更新
        while (i<= Math.floor(this.n/2)) {
            let l_child = 2*i
            let r_child = 2*i+1
            let max_child = (this.heap[l_child]>this.heap[r_child])? l_child: r_child
            if (this.heap[i]>this.heap[max_child]) break
            //swap
            let tmp = this.heap[i]
            this.heap[i] = this.heap[max_child]
            this.heap[max_child] = tmp
            i = max_child
        }
        return x
    }
}
let hp = new MaxHeap()
for (let i=0; i<arr.length; i++) {
    hp.insert(arr[i])
}
console.log(hp.heap)
for (let i=0; i<hp.heap.length-1; i++) {
    console.log(hp.deleteMax())
}