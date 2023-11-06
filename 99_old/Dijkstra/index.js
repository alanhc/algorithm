
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
                    if (num < threshold) graph[i][j] = num
                } else {
                    if (num < threshold &&i<j) {
                        graph[i][j] = num
                        graph[j][i] = num
                        
                    }
                }
            }
        }
    }
    draw_adjacency_matrix(n,max_num)
    //print(graph)
}

let solution_matrix
function ssad()
{
    background(220);
    
    let src = int(inp_src.value())
    let n = int(inp_n.value())
    let max_num = int(inp_max_num.value())
    let dist = new Array(n).fill(max_num)
    let connect = new Array(n).fill(-1)
    let found = new Array(n).fill(false)
    solution_matrix = []

    for (let v=0; v<n; v++) {
        dist[v] = graph[src][v]
        connect[v] = src
    }
    
    found[src] = true
    dist[src] = 0
    print("->", found, dist, connect);
    solution_matrix.push(dist.slice())
    
    for (let step=0; step<n-1; step++) {
        
        let start = minDistance(max_num, found, n, dist)
        found[start] = true
        for (let end=0; end<n; end++) {
            if ( !found[end] && dist[start]+graph[start][end]<dist[end] &&graph[start][end]>0 && dist[start]!==max_num) {
                dist[end] = dist[start] + graph[start][end]
                connect[end] = start   
                print("->", found, dist, connect);
                solution_matrix.push(dist.slice())
            }
        }
        
    }
    print(dist, connect)
    // print min =
    let print_min = ""
    let tmp = dist//.splice()
    while(tmp.length) {
        let _min = min(tmp)
        if (_min>0){
            print_min += "min = "+String(_min)+"<br>"
        }
        tmp.splice( tmp.indexOf(_min) ,1)
    }
    
    // print path
    print_path = ""
    let path = ""
    let a,b
    for (let v=0; v<n; v++) {
        path =  ""+String(v) +"(end)"
        for (b=v, a=connect[b]; a!=src; b=a,a=connect[b]) {
            path = String(a) + "--["+ String(graph[a][b])+"]-->"+path
            
        }
        path = "(start)"+String(src) + "--["+String(graph[src][b]) +"]-->"+path 
        print_path += String(path+"<br>")
        
    }
    
    if (check_result.checked()) label_out.html(print_min+print_path)
    else label_out.html("")
    draw_adjacency_matrix(n,max_num)
    draw_solution_matrix(n,max_num)
}

function minDistance(max_num, found, n, dist)
{
    let _min = max_num;
    let min_idx = -1;
    for (let v = 0; v < n; v++) {
      if (found[v] === false && dist[v] < _min) {
        _min = dist[v];
        min_idx = v;
      }
    }
    return min_idx;
}


let A;
let next;
function all_pairs()
{
    background(220)
    let n = int(inp_n.value())
    let max_num = int(inp_max_num.value())

    A = new Array(n)
    next = new Array(n)
    for (let i=0; i<n; i++) {
        A[i] = new Array(n).fill(max_num)
        next[i] = new Array(n).fill(-1)
    }
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            A[i][j] = graph[i][j]
            // ij 沒有邊
            if (graph[i][j]===max_num) next[i][j] = -1
            else next[i][j] = j
        }
    }
    print("-", A, next)
    
    for (let k=0; k<n; k++) {
        for (let i=0; i<n; i++) {
            for (let j=0; j<n; j++) {
                if (A[i][k]===max_num || A[k][j]===max_num) continue
                if (A[i][k]+A[k][j] < A[i][j]) {
                    A[i][j] = A[i][k]+A[k][j]
                    next[i][j] = next[i][k]
                }
                
            }
        }
    }

    print_all_path =""
    for (let i=0; i<n; i++)
        for (let j=0; j<n; j++) {
            if (i===j) continue
            path = constructPath(i,j)
            p_path = printPath(path)
            if (p_path!=="") print_all_path+= p_path+"<br>"
        }
    
    
    if (check_result.checked()) label_out.html(print_all_path)
    else label_out.html("")
    draw_adjacency_matrix(n,max_num)
    draw_All_pair_matrix(n,max_num)
}
function constructPath(start, end)
{
    if (next[start][end] === -1) {
        return []
    }
    
    // 存路徑矩陣
    path = [start]
    while (start!==end) {
        start = next[start][end]
        path.push(start)
    }
    return path
}
function printPath(path)
{
    p_path = ""
    print(path)
    if (path.length) {
        
        p_n = path.length
        for (let i=0; i<p_n-1; i++) {
            p_path += String(path[i])+"-["+graph[ path[i] ][ path[i+1] ]+"]->"
        }
        p_path +=  String(path[p_n-1])
    }
    
    
    return p_path
}

let C
function transtive_clousure()
{
    background(220)
    let n = int(inp_n.value())
    let max_num = int(inp_max_num.value())
   
    A = new Array(n)
    next = new Array(n)
    for (let i=0; i<n; i++) {
        A[i] = new Array(n).fill(max_num)
        next[i] = new Array(n).fill(-1)
    }
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            A[i][j] = graph[i][j]
            // ij 沒有邊
            if (graph[i][j]===max_num) next[i][j] = -1
            else next[i][j] = j
        }
    }
    print("-", A, next)
    
    for (let k=0; k<n; k++) {
        for (let i=0; i<n; i++) {
            for (let j=0; j<n; j++) {
                if (A[i][k]===max_num || A[k][j]===max_num) continue
                if (A[i][k]+A[k][j] <= A[i][j]) {
                    A[i][j] = (  (A[i][j]!==0) || (A[i][k]!==0&&A[k][j]!==0)  )? 1:0
                    next[i][j] = next[i][k]
                } //else A[i][j] = false
                
            }
        }
    }
    if (check_result.checked()) label_out.html("")
    else label_out.html("")
    print("===", next)
    draw_adjacency_matrix(n,max_num)
    draw_transtive_matrix(n,max_num)
}