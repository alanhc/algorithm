function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


let w_matrix = [];
let solution_matrix = []
let n = 4;
let range_to = 1000;
let start_node = 0
let end_node = 1
let max_num = 1e9-1

//initial matrix
for (let i = 0; i < n; i++) {
  let row = [];
  for (let j = 0; j < n; j++) {
    if (i===j) row.push(0)
    else row.push(getRandomInt(range_to));

  }
  w_matrix.push(row);

}

// solution

let dist = new Array(n).fill(max_num)
let found = new Array(n).fill(false)
let connect = new Array(n)
for (let v=0; v<n; v++) {
    dist[v] = w_matrix[start_node][v]
    connect[v] = start_node
}
found[start_node] = true
dist[start_node] = 0
for (step=0; step<n-1;step++) {
    let k = minDistance(dist, found)
    console.log("=",k)

    found[k] = true
    for (let v=0; v<n; v++) {
        if (!found[v] && dist[k]+w_matrix[k][v]<dist[v]) {
            dist[v] = dist[k]+w_matrix[k][v]
            connect[v] = k
            //solution_matrix.push(dist)
            console.log("d-",dist)
        }
    }
} 
console.log(solution_matrix)
function print_short_path(start,end, connect)
{
    let path= ""+end
    while(connect[end]!==start) {
        path = connect[end] + "--[" + w_matrix[connect[end]][end] + "]-->" +path
        end = connect[end]
    }
    return path
}
let ans = print_short_path(start_node, end_node, connect)
console.log("ans:",ans)


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
