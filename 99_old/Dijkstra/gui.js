let sh_y ,sh_x
function setup() {
  createCanvas(windowWidth, windowHeight);
	sh_y = 100
	sh_x = windowWidth/3
  w=h=30
	init_GUI()
  textAlign(CENTER)
  textSize(10)

}
let check_direct, check_result
function init_GUI()
{
	background(220);
  //GUI
  label_out = createP("PATH:")
  inp_file = createFileInput(handleFile);
  inp_n =  createInput('');
  inp_n.attribute('placeholder', 'n');
  inp_range =  createInput('');
  inp_range.attribute('placeholder', 'range(w(e))');
  inp_threshold =  createInput('');
  inp_threshold.attribute('placeholder', 'if(e)>');
  
  inp_max_num =  createInput('');
  inp_max_num.attribute('placeholder', 'max_num');
  inp_src =  createInput('');
  inp_src.attribute('placeholder', 'src');
  inp_dst =  createInput('');
  //inp_dst.attribute('placeholder', 'dst');
  btn_autoFill = createButton('auto fill in');
  btn_generate = createButton('generate graph');
  check_direct = createCheckbox('direct graph', true);
  check_result = createCheckbox('print result', true);
  
  btn_single_src_all_destination = createButton('Single Source All Destination');
  btn_all_pairs = createButton('All pairs');
  btn_transtive = createButton('Transtive Closure');


  btn_generate.mouseClicked(generate_graph)
  btn_autoFill.mouseClicked(auto_fill)
  btn_single_src_all_destination.mouseClicked(ssad)
  btn_all_pairs.mouseClicked(all_pairs)
  btn_transtive.mouseClicked(transtive_clousure)

  inp_file.position(30,30)
  inp_n.position(inp_file.x,inp_file.y+inp_file.height)
  inp_range.position(inp_n.x,inp_n.y+inp_n.height)
  inp_threshold.position(inp_range.x,inp_range.y+inp_range.height)
  inp_max_num.position(inp_threshold.x,inp_threshold.y+inp_threshold.height)
  inp_src.position(inp_max_num.x,inp_max_num.y+inp_max_num.height)
  //inp_dst.position(inp_src.x,inp_src.y+inp_src.height)
  btn_autoFill.position(inp_src.x,inp_src.y+inp_src.height)
  btn_generate.position(btn_autoFill.x,btn_autoFill.y+btn_autoFill.height)
  check_direct.position(btn_generate.x,btn_generate.y+btn_generate.height)
  check_result.position(check_direct.x,check_direct.y+check_direct.height)
  btn_single_src_all_destination.position(check_result.x,check_result.y+check_result.height)
  btn_all_pairs.position(btn_single_src_all_destination.x,btn_single_src_all_destination.y+btn_single_src_all_destination.height)
  btn_transtive.position(btn_all_pairs.x,btn_all_pairs.y+btn_all_pairs.height)
  label_out.position(btn_transtive.x,btn_transtive.y+btn_transtive.height)
}
function draw_adjacency_matrix(n,max_num)
{
  
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[0].length; j++) {
      let x = j * w + sh_x;
      let y = i * h + sh_y;
      rect(x, y, w, h);
      let txt = graph[i][j]
      if (txt === max_num) txt = "X"
      text(txt, x + w / 2, y + w / 2);
     
    }
  }
  for (let i=0; i<n; i++) {
    let x1 = -1 * w + sh_x;
    let y1 = i * h + sh_y;
    let x2 = i * w + sh_x;
    let y2 = -1*h + sh_y;
    
    text(i, x1 + w / 2, y1 + w / 2);
    text(i, x2 + w / 2, y2 + w / 2);
  }
}
function draw_solution_matrix(n,max_num)
{
  //console.log("solution",solution_matrix)
  print(solution_matrix)
  for (let i = 0; i < solution_matrix.length; i++) {
    for (let j = 0; j < solution_matrix[0].length; j++) {

      let x =  i*w + sh_x+ w*(n+2) //j * w + sh_x+ w*(n+2);
      let y =  j*h + sh_y//j * h + sh_y;
      rect(x, y, w, h);
      let txt = solution_matrix[i][j]
      if (txt === max_num) txt="X"
      //console.log(x,y, w,h)
      text(txt, x + w / 2, y + w / 2);
    }
  }
  for (let i=0; i<n; i++) {
    let x1 = -1 * w + sh_x+ w*(n+2);
    let y1 = i * h + sh_y;
    let x2 = i * w + sh_x+ w*(n+2);
    let y2 = -1*h + sh_y;
    
    text(i, x1 + w / 2, y1 + w / 2);
    text(i, x2 + w / 2, y2 + w / 2);
  }
  
}
function draw_All_pair_matrix(n,max_num)
{
  //console.log("solution",solution_matrix)
  print(A)
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      let x = j * w + sh_x+ w*(n+2);
      let y = i * h + sh_y;
      rect(x, y, w, h);
      let txt = A[i][j]
      if (txt === max_num) txt = "X"
      text(txt, x + w / 2, y + w / 2);
     
    }
  }
  for (let i=0; i<n; i++) {
    let x1 = -1 * w + sh_x+ w*(n+2);
    let y1 = i * h + sh_y;
    let x2 = i * w + sh_x+ w*(n+2);
    let y2 = -1*h + sh_y;
    
    text(i, x1 + w / 2, y1 + w / 2);
    text(i, x2 + w / 2, y2 + w / 2);
  }
  // draw next matrix
  print(A)
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      let x = j * w + sh_x+ w*(n+2);
      let y = i * h + sh_y+h*(n+2);
      rect(x, y, w, h);
      let txt = next[i][j]
      if (txt === max_num) txt = "X"
      text(txt, x + w / 2, y + w / 2);
     
    }
  }
  for (let i=0; i<n; i++) {
    let x1 = -1 * w + sh_x+ w*(n+2);
    let y1 = i * h + sh_y+h*(n+2);
    let x2 = i * w + sh_x+ w*(n+2);
    let y2 = -1*h + sh_y+h*(n+2);
    
    text(i, x1 + w / 2, y1 + w / 2);
    text(i, x2 + w / 2, y2 + w / 2);
  }


}

function draw_transtive_matrix(n,max_num)
{
  //console.log("solution",solution_matrix)
  print(A)
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      let x = j * w + sh_x+ w*(n+2);
      let y = i * h + sh_y;
      rect(x, y, w, h);
      let txt = A[i][j]
      if (txt === max_num) txt = "X"
      text(txt, x + w / 2, y + w / 2);
     
    }
  }
  for (let i=0; i<n; i++) {
    let x1 = -1 * w + sh_x+ w*(n+2);
    let y1 = i * h + sh_y;
    let x2 = i * w + sh_x+ w*(n+2);
    let y2 = -1*h + sh_y;
    
    text(i, x1 + w / 2, y1 + w / 2);
    text(i, x2 + w / 2, y2 + w / 2);
  }
  

}
let txt
function handleFile(file)
{
  background(220);
  console.log(file.type)
  if (file.type==="text") {
    txt = split( file.data, "\n")
    in_config = split( txt[0], " ")   // 10(n) 10(range) 9(threshold) 99(max) 1(src)
    inp_n.value(in_config[0])
    inp_range.value(in_config[1])
    inp_threshold.value(in_config[2])
    inp_max_num.value(in_config[3])
    inp_src.value(in_config[4])
    let tmp = txt.slice(1,)

    n = int(inp_n.value())
    max_num = int(inp_max_num.value())
    //初始化array
    graph = new Array(n)
    for (let i=0; i<n; i++) {
        graph[i] = new Array(n).fill(max_num)
    }
    for (let  i=0; i<n; i++) {
    
      let rows = split( tmp[i], " ")
      for (let j=0; j<n; j++) {
        graph[i][j] = int(rows[j])
      }
    }
    draw_adjacency_matrix(n,max_num)
    
  }
}
let w ,h

let label_out 
let inp_n, inp_range, inp_max_num, inp_src, inp_threshold
let btn_autoFill, btn_generate,btn_all_pairs, btn_transtive, btn_single_src_all_destination
let dijkstra
// dikstra
let graph
let print_path

function generate_graph() {
  background(220)
  console.log("start")
  init_graph(int(inp_n.value()),
            int(inp_max_num.value()),
            int(inp_threshold.value()),
            int(inp_range.value())
  )

}

function auto_fill()
{
  inp_n.value(5)
  inp_range.value(100)
  inp_src.value(1)
  //inp_dst.value(3)
  inp_max_num.value(1e9-1)
  inp_threshold.value(100)
}
function draw()
{
  
}