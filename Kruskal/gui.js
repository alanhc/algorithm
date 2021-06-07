function setup()
{
    createCanvas(windowWidth, windowHeight);
    init_GUI()
    msg = ""
}

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
  //inp_dst =  createInput('');
  //inp_dst.attribute('placeholder', 'dst');
  btn_autoFill = createButton('auto fill in');
  btn_generate = createButton('generate graph');
  check_direct = createCheckbox('direct graph', false);
  check_echo_print_G = createCheckbox('Echo Print G', false);
  check_print_edges = createCheckbox('Echo print edges in MST', false);

  check_result = createCheckbox('print edges matrix', false);
  sel_circle_detect = createSelect();
  sel_circle_detect.option('loop');
  sel_circle_detect.option('union');
  btn_kruskal_min = createButton('Kruskal\'s min');
  btn_kruskal_heap = createButton('Kruskal\'s heap');
  btn_prims = createButton('Prim\'s algorithm');
  //btn_all_pairs = createButton('All pairs');
  //btn_transtive = createButton('Transtive Closure');


  btn_generate.mouseClicked(generate_graph)
  btn_autoFill.mouseClicked(auto_fill)
  btn_kruskal_min.mouseClicked(solution_min)
  btn_kruskal_heap.mouseClicked(solution_heap)
  sel_circle_detect.changed(mySelectEvent);
  btn_prims.mouseClicked(solution_prim)
  //btn_all_pairs.mouseClicked(all_pairs)
  //btn_transtive.mouseClicked(transtive_clousure)

  inp_file.position(30,30)
  inp_n.position(inp_file.x,inp_file.y+inp_file.height)
  inp_range.position(inp_n.x,inp_n.y+inp_n.height)
  inp_threshold.position(inp_range.x,inp_range.y+inp_range.height)
  inp_max_num.position(inp_threshold.x,inp_threshold.y+inp_threshold.height)
  //inp_dst.position(inp_src.x,inp_src.y+inp_src.height)
  btn_autoFill.position(inp_max_num.x,inp_max_num.y+inp_max_num.height)
  btn_generate.position(btn_autoFill.x,btn_autoFill.y+btn_autoFill.height)
  check_direct.position(btn_generate.x,btn_generate.y+btn_generate.height)
  check_echo_print_G.position(check_direct.x,check_direct.y+check_direct.height)
  check_print_edges.position(check_echo_print_G.x,check_echo_print_G.y+check_echo_print_G.height)
  check_result.position(check_print_edges.x,check_print_edges.y+check_print_edges.height)
  sel_circle_detect.position(check_result.x,check_result.y+check_result.height)
  btn_kruskal_min.position(sel_circle_detect.x,sel_circle_detect.y+sel_circle_detect.height)
  btn_kruskal_heap.position(btn_kruskal_min.x,btn_kruskal_min.y+btn_kruskal_min.height)
  btn_prims.position(btn_kruskal_heap.x,btn_kruskal_heap.y+btn_kruskal_heap.height)
  label_out.position(windowWidth/3,50)
}
let cicle_strategy
function mySelectEvent()
{
  cicle_strategy = sel_circle_detect.value()
}
let label_out 
let inp_n, inp_range, inp_max_num, inp_src, inp_threshold
let btn_autoFill, btn_generate,btn_all_pairs, btn_transtive, btn_single_src_all_destination
let graph
function handleFile(file)
{
  background(220);
  print(file.type)
  if (file.type==="text") {
    txt = split( file.data, "\n")
    in_config = split( txt[0], " ")   // 10(n) 10(range) 9(threshold) 99(max) 1(src)
    inp_n.value(in_config[0])
    inp_range.value(in_config[1])
    inp_threshold.value(in_config[2])
    inp_max_num.value(in_config[3])
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
    print("g=",graph)
    if (check_echo_print_G.checked()) {
        
        //let matrix = draw_matrix(graph,  int(inp_max_num.value()))
        window.open("adjacent_matrix.html?matrix="+JSON.stringify(graph),  "adjacent_matrix");
    }
        //draw_adjacency_matrix(n,max_num)
    
  }
}
let w,h
function draw_linenum(matrix, start_x, start_y)
{
  w = h = 30
  for (let i=0; i<matrix.length; i++) {
    let x = start_x;
    let y = i * h + start_y;
    text(i, x + w / 2, y + w / 2);
  }
}
function draw_2dmatrix(matrix, start_x, start_y)
{

  print(matrix)
 
  w = h = 30
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      let x = j * w + start_x;
      let y = i * h + start_y;
      rect(x, y, w, h);
      let txt = matrix[i][j]
      
      text(txt, x + w / 2, y + w / 2);
     
    }
  }
}
function draw_1dmatrix(matrix, start_x, start_y)
{
  print(matrix)
 
  w = h = 30
  for (let i = 0; i < matrix.length; i++) {
    let x = start_x;
    let y = i * h + start_y;
    rect(x, y, w, h);
    let txt = matrix[i]
      
    text(txt, x + w / 2, y + w / 2);
  }
}
function auto_fill()
{
  inp_n.value(5)
  inp_range.value(100)
  //inp_src.value(1)
  //inp_dst.value(3)
  inp_max_num.value(1e9-1)
  inp_threshold.value(100)
}
function generate_graph()
{
  graph=[]
    init_graph(int(inp_n.value()),
            int(inp_max_num.value()),
            int(inp_threshold.value()),
            int(inp_range.value())
    )
    if (check_echo_print_G.checked()) {
        print("g=",graph)
        //let matrix = graph
        window.open("adjacent_matrix.html?matrix="+JSON.stringify(graph), "adjacent_matrix");
    }
    
}

/*
let matrix = [
        {name: "Lee Gai Fun", age: 42, sex: "M"},
        {name: "Laia Hamidullah", age: 27, sex: "F" },
        {name: "Abraham Mdulla", age: 33, sex: "M" }
       ];
    window.open("adjacent_matrix.html?matrix="+JSON.stringify(matrix));

    let matrix = [[1,2,3],[2,3,4],[2,44,56,3]]
    window.open("adjacent_matrix.html?matrix="+JSON.stringify(matrix));
    
*/
