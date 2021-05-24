function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let adjacency_matrix = [];
let solution_matrix = []
let n = 6;
let range_to = 100;
let start_node = 2
let end_node = 5
let max_num = 1e9-1

//initial matrix
for (let i = 0; i < n; i++) {
  let row = [];
  for (let j = 0; j < n; j++) {
    if (i===j) row.push(0)
    else row.push(getRandomInt(range_to));

  }
  adjacency_matrix.push(row);

}

// solution
let connect = []
for (let v=0; v<n; v++) {
    connect.push(start_node)
    //connect[v] = start_node 
}
console.log("---",connect)
let found = new Array(n).fill(false) // 找到最短距離？
let dist = new Array(n).fill(max_num) // 最短路徑

dist[start_node] = 0
//found[start_node] = true


function minDistance(dist, found)
{
    let _min = max_num
    let min_idx=-1
    for (let v=0; v<n; v++) {
        if (found[v]===false && dist[v]<=_min) {
            _min = dist[v]
            min_idx = v
        }
    }
    return min_idx
}

solution_matrix.push(dist)
for (let step=0; step<n-1; step++) {
    let k = minDistance(dist, found) //k node is shortest path link to 
    found[k] = true
    console.log(k, dist, found)
    for (let v=0; v<n; v++) {
        if (!found[v] && (dist[k]+adjacency_matrix[k][v])) {
            dist[v] = dist[k] + adjacency_matrix[k][v]
            connect[v] = k
            console.log("---",connect)
        }
    }
    solution_matrix.push(dist)
}

function print_short_path(start,end, connect)
{
    let path= ""+end
    while(connect[end]!==start) {
        path = connect[end] + "--[" + adjacency_matrix[connect[end]][end] + "]-->" +path
        end = connect[end]
    }
    return path
}
let ans = print_short_path(start_node, end_node, connect)
console.log("ans:",ans)