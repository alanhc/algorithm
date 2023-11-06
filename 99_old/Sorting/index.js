function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function Selection_Sort(data)
{
    let a = data
    for (let i=0; i<a.length-1; i++) {
        let _min_idx = i
        for (let j=i+1; j<a.length; j++) {
            if (a[j]<a[_min_idx]) _min_idx=j
        }
        if (_min_idx!=i) {
            let tmp = a[_min_idx]
            a[_min_idx] = a[i]
            a[i] = tmp
        }
    }
    return a
}
function Insertion_Sort(data)
{
    let a = data
    for (let i=1; i<a.length; i++) {
        let j=i
        while (j>0 && a[j-1]>a[j]) {
            let tmp = a[j]
            a[j]=a[j-1]
            a[j-1]=tmp
            j--
        }
    }
    return a
}
function Bubble_Sort(data)
{
    let a = data
    for (let i=0; i<a.length-1; i++) {
        for (let j=0; j<a.length-i; j++) {
            if (data[j-1]>data[j]) {
                let tmp = data[j-1]
                data[j-1] = data[j]
                data[j] = tmp 
            }            
        }
    }
    return a
}
function merge( A, B) {
    let m = A.length
    let n = B.length
    let i=0,j=0,k=0
    let C=Array(m+n).fill(0)
    while (i<m && j<n) {
        if(A[i]<B[j]) {
            C[k++] = A[i++]
        } else {
            C[k++] = B[j++]
        }
    }

    while (i<m) C[k++] = A[i++]
    while (j<n) C[k++] = B[j++]
    return C
}


let sorting_strategy = "recursive"
function Merge_Sort_recursive(arr)
{
    
    if (arr.length>1) {
        let n = arr.length
        let m = Math.floor(n/2)
        
        let left = Merge_Sort_recursive(arr.slice(0,m))
        let right = Merge_Sort_recursive(arr.slice(m,arr.length))
        return merge(left, right)
    }
    return arr
}
function Merge_Sort_non_recursive(arr)
{
    let n = arr.length
    let len = 2
    while (len<=n) {
        let ans = []
        for (let i=0; i<n; i+=len) {
            ans = ans.concat( 
                                merge(  arr.slice(i, Math.floor(i+len/2)), 
                                        arr.slice(Math.floor(i+len/2), Math.floor(i+len))) 
                            )
        }
        arr = ans
        len *= 2
    }
    return arr
}
function Merge_Sort(data)
{
    if (sorting_strategy==="recursive") {
        //console.log("recursive")
        return Merge_Sort_recursive(data)
    } else if (sorting_strategy==="non-recursive") {
        //console.log("non-recursive")
        return Merge_Sort_non_recursive(data)
    }
}
function Quick_Sort(data)
{
    if (sorting_strategy==="recursive") {
        console.log("recursive")
        Quick_Sort_recursive(data, 0, data.length-1)
        return data
    } else if (sorting_strategy==="non-recursive") {
        console.log("non-recursive")
        Quick_Sort_non_recursive(data, 0, data.length-1)
        return data
    }
}
function Quick_Sort_recursive(arr, left, right)
{
    if (left<right) {
        let i = left+1
        let j = right
        let target = arr[left]
        while(i<=j) {
            while (arr[i]<target &&i<=j) i++
            while (arr[j]>=target && i<=j) j--
            if (i<j) {
                let tmp = arr[i]
                arr[i] = arr[j]
                arr[j] = tmp
            } 
            
        } 
        if (left<j) {
            let tmp = arr[left]
            arr[left] = arr[j]
            arr[j] = tmp
        } 
        Quick_Sort_recursive(arr, left, j-1)
        Quick_Sort_recursive(arr, j+1, right)
    }

}
function Quick_Sort_non_recursive(arr, left, right)
{
    let stack=[]
    stack.push([left, right])
    while (stack.length) {
        let last = stack.pop()
        let left = last[0]
        let right = last[1]
        let target = arr[left]
        let i=left+1
        let j=right
        while(i<=j) {
            while (arr[i]<target && i<=j) i++
            while (arr[j]>=target && i<=j) j--
            if (i<j) {
                let tmp = arr[i]
                arr[i] = arr[j]
                arr[j] = tmp
            }
        }
        if (left<j) {
            let tmp = arr[left]
            arr[left] = arr[j]
            arr[j] = tmp
        }
        if (j+1<right) stack.push([j+1, right])
        if (left<j-1) stack.push([left, j-1])
        
    }
}
function restore(arr, from, to)
{
    let i = from
    let j = -1
    while (i<Math.floor(to/2)) {
        if (arr[2*i]<arr[2*i+1]) j = 2*i
        else j=2*i+1
        if (arr[i]<=arr[j]) break
        let tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
        i=j
    }
}
function Heap_Sort(data)
{
    let ans = Array(data.length)
    data.unshift(-1)
    let n = data.length
    for (let i=Math.floor(n/2); i>=1; i--) {
        restore(data, i, n)
    }
    
    let idx = 0
    for (let i=n; i>1; i--) {
        ans[idx++] = data[1]
        data[1] = data[i]
        restore(data, 1, i)
    }
    
    
    return ans
}

function Radix_Sort(arr)
{
   let _max=-1e9
   let n = arr.length 
   for (let i=0; i<n; i++) {
       if (arr[i]>_max) _max = arr[i]
   }
   
   //exp is 10^i
   //print(arr)
   //低位先排序
   for (let exp = 1; Math.floor(_max/exp)>0; exp*=10) {
       let ans = Array(n).fill(0)
       let count = Array(10).fill(0)
       //統計
       for (let i=0; i<n; i++) {
           count[ Math.floor(arr[i]/exp)%10 ]++
       }
       //建立優先
       
       for (let i=1; i<10; i++) {
           count[i] += count[i-1]
       }
       //建立輸出
       for (let i=n-1; i>=0; i--) {
           ans[ count[ Math.floor(arr[i]/exp)%10]-1 ] = arr[i]
           count[ Math.floor(arr[i]/exp) % 10 ]--
       }
       for (let i=0; i<n; i++) {
           arr[i] = ans[i]
       }
       //console.log(arr, count)
   }
   return arr
}
function XX_Sort(data)
{
    data = []
    return data
}
let msg
function caculate()
{
    msg=""
    let range = int(inp_range.value())
    let times = int(inp_times.value())
    let n = int(inp_n.value())
    print(times)
    
    //Making data
    let data = Array(times).fill(0)
    for (let t=0; t<times; t++) {
        let d = Array(n*(t+1)).fill(0)
        for (let i = 0; i < n*(t+1); i++) {
            d[i] = getRandomInt(range)+1;
        }
        data[t] = d
        //console.log(data[t].length)
    }
    
    let sort_algorithms = []
    let sort_names = []
    if (check_selection.checked()) {
        sort_algorithms.push(Selection_Sort)
        sort_names.push("Selection")
    }
    if (check_insert.checked()) {
        sort_algorithms.push(Insertion_Sort)
        sort_names.push("Insertion")
    }
    if (check_bubble.checked()) {
        sort_algorithms.push(Bubble_Sort)
        sort_names.push("Bubble")
    }
    if (check_quick.checked()) {
        sort_algorithms.push(Quick_Sort)
        sort_names.push("Quick")
    }
    if (check_heap.checked()) {
        sort_algorithms.push(Heap_Sort)
        sort_names.push("Heap")
    }
    if (check_merge.checked()) {
        sort_algorithms.push(Merge_Sort)
        sort_names.push("Merge")
    }
    if (check_radix.checked()) {
        sort_algorithms.push(Radix_Sort)
        sort_names.push("Radix")
    }
    
    let sort_times = Array(sort_algorithms.length).fill([])
    for (let t=0; t<data.length; t++) {
        let arr = data[t]
        msg+="<br>data:("+data[t].length+") "+"<br>"
        for (let i=0; i<sort_algorithms.length; i++) {
            let start = Date.now()
            sort_algorithms[i](arr.slice())
            let exeTime =  Date.now() - start
            sort_times[i] = sort_times[i].concat(exeTime) 
            msg+= sort_names[i] + " done. <br>"
            label_out.html(msg)
        }
    }
    
    console.log("data:", data)
    console.log(sort_times)
    console.log(dataset)
    //console.log(sort_times)
    /*
    console.log(exeTime[0].length)
    console.log( sort_algorithms[0](data[0].slice()) )
    console.log(sort_algorithms, data[0])
    */
    //drawing chart
    for (let i=0; i<7; i++) {
        dataset[i].label = 'sort '+i
        dataset[i].data = []
    }
    for (let i=0; i<sort_times.length; i++) {
        dataset[i].label = sort_names[i]
        dataset[i].data = sort_times[i]
    }
    let trys=[]
    for (let t=0; t<times; t++) {
        trys.push(n*(t+1))
    }
    console.log(data)
    //localStorage.clear()
    
    window.close();
    
    localStorage.setItem('matrix', JSON.stringify(data));
    if (check_show_data.checked()) window.open("show_data.html","data");
    localStorage.setItem('labels', JSON.stringify(trys));
    localStorage.setItem('datasets', JSON.stringify(dataset),);

    //console.log(localStorage.datasets)
    window.open("chart.html");
    
    //window.open("chart.html?labels="+JSON.stringify(trys)+"&datasets="+JSON.stringify(dataset),"chart");
}

let dataset = 
[
    {
        label: "A",
        borderColor: "rgba(255, 0, 0, 0.5)",
        backgroundColor:  "rgba(255, 0, 0, 0.8)",
        data: [],
    },
    {
        label: "B",
        borderColor: "rgba(0, 255, 0, 0.5)",
        backgroundColor:  "rgba(0, 255, 0, 0.8)",
        data: [],
    },
    {
        label: "C",
        borderColor: "rgba(0, 0, 255, 0.5)",
        backgroundColor:  "rgba(0, 0, 255, 0.8)",
        data: [],
    },
    {
        label: "D",
        borderColor: "rgba(255, 255, 0, 0.5)",
        backgroundColor:  "rgba(255, 255, 0, 0.8)",
        data: [],
    },
    {
        label: "E",
        borderColor: "rgba(255, 0, 255, 0.5)",
        backgroundColor:  "rgba(255, 0, 255, 0.8)",
        data: [],
    },
    {
        label: "F",
        borderColor: "rgba(0, 255, 255, 0.5)",
        backgroundColor:  "rgba(0, 255, 255, 0.8)",
        data: [],
    },
    {
        label: "G",
        borderColor: "rgba(255, 127, 255, 0.5)",
        backgroundColor:  "rgba(255, 127, 255, 0.8)",
        data: [],
    },
]
