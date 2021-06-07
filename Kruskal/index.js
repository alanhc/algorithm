function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//// generate weight ////
function init_graph(n, max_num, threshold, range_to)
{
    //print("-==--==", check_direct.checked())
    //初始化array
    graph = new Array(n)
    for (let i=0; i<n; i++) {
        graph[i] = new Array(n).fill(max_num)
    }
    //填值
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) graph[i][j] = 0
            else {
                
                let num = getRandomInt(range_to)+1;
                if(check_direct.checked()) {
                    if (num <= threshold) graph[i][j] = num
                } else {
                    if (num <= threshold &&i<j) {
                        graph[i][j] = num
                        graph[j][i] = num
                        
                    }
                }
            }
        }
    }
    //console.log("init:",graph)
    
}
let edges_matrix
let sorted_EM
let sort_strategy
function solution_min() 
{
    sort_strategy = "min"
    solution_kruskal()
}
function solution_heap()
{
    sort_strategy = "heap"
    solution_kruskal()
}
function solution_prim()
{
    
    
    print("prim")
    let max_num = int(inp_max_num.value())
    let n = int(inp_n.value())
    let mst = Array(n).fill(0)

    let sum_weight = 0
    let ct=0
    for (let i=0; i<n-1; i++) {
        for (let j=i+1; j<n; j++) {
            let weight = graph[i][j];
            if (weight!==max_num && weight !== 0) {
                //if (check_print_edges.checked())msg+= "edge "+ct+":("+i+","+j+") ["+weight+"]"+"<br>"
                sum_weight+=graph[i][j]
                ct++
            }
        }
    }

    let start = getRandomInt(n)+1;
    msg+= "starting from vertex:" + start + "<br>"
    let t_start = Date.now()
    let E = Array(n).fill(start)
    let D = Array(n).fill(max_num)
    let X = Array(n).fill(0)
    let Y = Array(n).fill(1)
    
    let x_ct = 1
    X[start] = 1
    Y[start] = 0
    
    let t_choose=0, t_update=0
    let num_mst_edge = 0
    let found_mst = false
    while (x_ct<n) {
        console.log("======start",start,"e/d",E,D, X,Y)
        let t_choose_start = Date.now()
        for (let y=0; y<n; y++) {
            //console.log("-", start,y)
            if (Y[y]==1 && graph[start][y]<D[y]) {
                E[y] = start
                D[y] = graph[start][y]
               
            }
        }
        console.log("=",start,"e/d",E,D, X,Y)
        t_choose += (Date.now()-t_choose_start)/1000
        //console.log("e/d",E,D)
        let t_update_start = Date.now()
        let _min = 0;
        for (let y=0; y<n; y++) {
            if (D[y]<D[_min]) _min = y
        }
        if (D[_min]===max_num) break
        found_mst = true
        //onsole.log("end:", _min, )
        mst[num_mst_edge++] = [start, _min, D[_min]]
        D[_min] = max_num
        X[_min] = 1
        Y[_min] = 0
        x_ct++
     
        
        t_update += (Date.now() - t_update_start)/1000
        start = _min
    }
    if (check_print_edges.checked()){
        
        if (found_mst){
            let ct=0
            for (let i=0; i<mst.length-1; i++) {
                let start = mst[i][0]
                let end = mst[i][1]
                let weight = mst[i][2]
                
                msg+= "edge "+ct+":("+start+","+end+") ["+weight+"]"+"<br>"
                ct++
            }
        } else msg+= "no mst found!<br>"
        
    }
    let t = (Date.now() - t_start)/1000
    let d = inp_threshold.value()/inp_range.value()
    //print(t_choose, t_update,Date.now())
    msg += "Prim:("+n+", "+d+", "+sum_weight+", "+t+"(sec.) (t_choose, t_update)=(" +round(t_choose,10)+", "+t_update+ ") (sec.)<br>"
    label_out.html(msg)
}

let msg
function solution_kruskal()
{
    mySelectEvent()
    let start =  Date.now();
    edges_matrix=[]
    print("solution")
    let n = int(inp_n.value())
    let max_num = int(inp_max_num.value())
    let t_data_start = Date.now();
    let ct = 0
    for (let i=0; i<n-1; i++) {
        for (let j=i+1; j<n; j++) {
            let weight = graph[i][j];
            if (weight!==max_num && weight !== 0) {
                edges_matrix.push([i,j,weight])
                //if (check_print_edges.checked())msg+= "edge "+ct+":("+i+","+j+") ["+weight+"]"+"<br>"
                ct++
            }
        }
    }
    let t_data = (Date.now()-t_data_start)/1000;
    //print("edges_matrix:",edges_matrix)
    /// sort edge matrix
    sorted_EM = Array(edges_matrix.length).fill(0)
    
    let t_min_start = Date.now()
    if (sort_strategy==="min") {
        let found = Array(edges_matrix.length).fill(false)
        // selection sort
        for (let i=0; i<edges_matrix.length; i++) {
            let _min = max_num
            let _min_idx = i
            for (let j=0; j<edges_matrix.length; j++) {
                if (edges_matrix[j][2]<_min && !found[j]) {
                    _min=edges_matrix[j][2]
                    _min_idx = j
                }
            }
            //console.log(_min_idx, i)
            found[_min_idx]=true
            sorted_EM[i] = _min_idx
        }
        // selection sort
    } else if  (sort_strategy==="heap") {
        sorted_EM = heap_sort(edges_matrix)
    }
    let t_min = (Date.now() - t_min_start)/1000
    /*
    background(220)
    draw_linenum(edges_matrix, windowWidth/3-50,100)
    draw_2dmatrix(edges_matrix, windowWidth/3,100)
    draw_1dmatrix(sorted_EM, windowWidth/3+w*3+10,100)
    */
    let t_cycle_start = Date.now() 
    //////// cycle detection ////////
    let n_mst_edge = 0
    let n_cycle_edge=0
    let mst = Array(n).fill(0)
    if (cicle_strategy=="loop") {
        print("loop")
        /// loop ///
        let mask = Array(n).fill(-1)
        for (let i=1; i<=n; i++) {
            mask[i-1] = i
        }

        
        let i=0
        while (n_mst_edge<n-1 && n_mst_edge+n_cycle_edge<=edges_matrix.length) {
            _min = edges_matrix[ sorted_EM[i++] ]
            //print("==", min)
            let start,end
            start = _min[0]
            end = _min[1]
            
            if (mask[start]!==mask[end]) {
                
                mst[n_mst_edge++] = _min//sorted_EM[i]
                let small = (mask[start]<mask[end])? mask[start]:mask[end]
                let large = (mask[start]<mask[end])? mask[end]:mask[start]
                
                for (let j=0; j<n; j++) if(mask[j]===large) mask[j]=small
                //print("--connected:", start,end, small, large)
            } else n_cycle_edge++
            
            //print("-mask:",mask)
        }
        /// loop ///
    } else if (cicle_strategy==="union") {
        
        print("union")
        /// union ///

        father = new Array(n).fill(-1)
        let idx=0
        for (let i=0; i<n; i++) {
            father[i]=i
        }
        while (n_mst_edge<n-1) {
            let _min = edges_matrix[ sorted_EM[idx++] ]
            let start,end
            start = _min[0]
            end = _min[1]

            let x_root = find(start)
            let y_root = find(end)
            if (x_root!==y_root) {
                mst[n_mst_edge++] = _min
                union(x_root, y_root)
            } else n_cycle_edge++
        }
        /// union ///
    }
    
    //////// cycle detection ////////
    //print("mask:",mask)
    //print("mst:", mst)
    let t_cycle = (Date.now()  - t_cycle_start)/1000
    print("n_mst_edge n_cycle_edge:",n_mst_edge, n_cycle_edge, edges_matrix.length)
    end =  Date.now();
    time = (end - start)/1000;
    let d = inp_threshold.value()/inp_range.value()
    let sum_weight = 0
    let ratio_cycle = Math.round( n_cycle_edge/edges_matrix.length *100)
    for (let i=0; i<edges_matrix.length; i++) sum_weight+=edges_matrix[i][2]
    

    if (check_print_edges.checked()){
        let ct=0
        for (let i=0; i<mst.length-1; i++) {
            let start = mst[i][0]
            let end = mst[i][1]
            let weight = mst[i][2]
            
            msg+= "edge "+ct+":("+start+","+end+") ["+weight+"]"+"<br>"
            ct++
        }
        
    }
    msg+= "# edges including cycle: "+String(n_cycle_edge)+"<br>"
    msg += "Kruskal_"+sort_strategy+": ("+n+", "+String(d)+", "+String(sum_weight)+", "+String(time)+"sec.) (t_data, t_min, t_cycle)=("+t_data+", "+t_min+", "+t_cycle+")#clcye_e/#e="+n_cycle_edge+"/"+edges_matrix.length+"~"+String(ratio_cycle)+"%<br>"

    
    //print("sorted_EM:",sorted_EM, edges_matrix)
    if (check_result.checked()) {
        window.open("edges_matrix.html?matrix="+JSON.stringify(edges_matrix), "edges_matrix");
    }
    //if (check_print_edges.checked()) {
    label_out.html(msg)
    //}
}
/// union & find
let father
function find(x)
{
    if (father[x]===x) return x
    father[x] = find(father[x])
    return father[x]
}
function union(x, y)
{
    father[ find(y) ] = find(x)
}
/// union & find

function heap_sort(matrix)
{
    n=0
    idx = [-1]
    ans_idx = []
    heap = Array(matrix.length+1).fill(-1)
    let ans = []
    for (let i=0; i<matrix.length; i++) {
        idx.push(i)
    }
    //print(idx)
    for (let i=0; i<matrix.length; i++) {
        
        insertHeap(matrix[i][2])
    }
    
    for (let i=0; i<matrix.length; i++) {
        ans.push(deleteHeap())
    }
    //print("ans:",ans)
    return ans_idx
}
let n 
let heap
let idx
let ans_idx
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
    //print("++",i)
    heap[i] = x
}

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