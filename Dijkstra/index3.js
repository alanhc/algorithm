function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
class Dijkstra {
  constructor(n, src, dst, max_num, range_to) {
    this.found = new Array(n).fill(false);
    this.dist = new Array(n).fill(max_num);
    this.graph = [];
    this.connect = [];
    this.n = n;
    this.src = src;
    this.dst = dst;
    this.max_num = max_num;
    this.path = "";
    this.solution_matrix = [];
    this.all_pairs_distance_print = ""
    this.shortest_path_print = ""
    //this.init();
  }
  init() {
    
    for (let i = 0; i < this.n; i++) {
      let row = [];
      for (let j = 0; j < this.n; j++) {
        if (i === j) row.push(0);
        else {
          let num = getRandomInt(range_to);

          if (num < int(inp_threshold.value())) row.push(num);
          else row.push(this.max_num);
        }
      }
     
      this.graph.push(row);
    }
  }
  // 找距離最短
  minDistance() {
    let _min = this.max_num;
    let min_idx = -1;
    for (let v = 0; v < this.n; v++) {
      if (this.found[v] === false && this.dist[v] < _min) {
        _min = this.dist[v];
        min_idx = v;
      }
    }
    return min_idx;
  }
  solution() {
    let dist = this.dist;
    let found = this.found;
    let solution_matrix = [];
    let connect = []//new Array(this.n).fill(this.src);
    let n = this.n;
    let graph = this.graph
    console.log("->", found, dist, connect);
    for (let v = 0; v < this.n; v++) {
      dist[v] = this.graph[this.src][v];
      //console.log(this.graph[this.src][v])
      connect.push(this.src);
    }

    dist[this.src] = 0;
    found[this.src] = true;

    console.log("->", found, dist, "connect:", connect);
    solution_matrix.push(dist);
    for (let step = 0; step < n - 1; step++) {
      //找到 還沒連結點的最小
      let start = this.minDistance();

      found[start] = true; //找到與node的路徑
      for (let end = 0; end < n - 1; end++) {
        if (!found[end] && dist[start] + graph[start][end] < dist[end]) {
          dist[end] = dist[start] + graph[start][end];
          connect[end] = start;
        }
      }
      solution_matrix.push(dist);
      //if (k===)
      console.log(
        "start:",
        start,
        "s:",
        solution_matrix,
        "found:",
        found,
        "dist:",
        dist,
        "connect:",
        connect
      );
    }

    this.solution_matrix = solution_matrix;
    this.connect = connect;
    console.log(this.connect);
    this.print_soulution()
   
    return 1;
    //console.log("---<>", this.solution_matrix[0][0].constructor=== Array)
  }
  print_soulution() {
    console.log("=======")
    let src = this.src
    for (let v = 0; v < this.n; v++) {
      console.log(v,"=", this.dist[v]);
      this.all_pairs_distance_print += src+"->" +v +" min= "+ this.dist[v] + "<br>"
      this.shortest_path_print += "shortest path from ["+src+"]->["+v+"] is "+this.shortest_path(src, v) + "<br>"
    }
    
  }
  shortest_path(start, end) {
    let path = "" + String(end);
    let connect = this.connect
    let graph = this.graph
    console.log(connect, graph);
    while (connect[end] !== start) {
      
      path =
      String(connect[end]) +
        "-->[" +
        String(graph[connect[end]][end]) +
        "]-->" +
        path;
      end = connect[end];
    }
    //path = end+"-->["+this.graph[this.connect[end]][end]+"]-->"+path
    return path;
  }
}
/*
    //明天繼續
    for (let step = 0; (step < this.n - 1); step++) {
      console.log("s:",solution_matrix)
      
      found[k] = true;
      
      
      if (k<0) {
        background(220);
        //draw_adjacency_matrix()
      }
      for (let v = 0; v < this.n; v++) {
        if (
          !found[v] &&
          dist[k] + this.graph[k][v] < dist[v] 
        ) {
          dist[v] = dist[k] + this.graph[k][v];
          this.connect[v] = k
          //this.solution_matrix.push(this.dist)
        }
      }
      //console.log("solution",this.solution_matrix)
      
    }
    //this.print_soulution();
    */
