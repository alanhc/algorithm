function setup()
{
    createCanvas(windowWidth, windowHeight);
    init_GUI()
    msg = ""
    print(sorting_strategy)
}

function init_GUI()
{
	background(220);
  //GUI
  label_out = createP("")
  inp_times = createInput("");
  inp_times.attribute('placeholder', 'Times');
  inp_n =  createInput('');
  inp_n.attribute('placeholder', 'N');
  inp_range =  createInput('');
  inp_range.attribute('placeholder', 'range [1,N]');

  btn_autoFill = createButton('auto fill in');

  check_selection = createCheckbox('Selection Sort', false);
  check_insert = createCheckbox('Insert Sort', false);
  check_bubble = createCheckbox('Bubble Sort', false);
  check_quick = createCheckbox('Quick Sort', false);
  check_heap = createCheckbox('Heap Sort', false);
  check_merge = createCheckbox('Merge Sort', false);
  check_radix = createCheckbox('Radix Sort', false);
  sel_recursive = createSelect();
  sel_recursive.option('recursive');
  sel_recursive.option('non-recursive');
  check_show_data = createCheckbox('See data', false);
  btn_draw = createButton('Draw Diagrams');


  btn_autoFill.mouseClicked(auto_fill)
  btn_draw.mouseClicked(caculate)
  sel_recursive.changed(mySelectEvent);

  inp_times.position(30,30)
  inp_n.position(inp_times.x,inp_times.y+inp_times.height)
  inp_range.position(inp_n.x,inp_n.y+inp_n.height)


  btn_autoFill.position(inp_range.x,inp_range.y+inp_range.height)
  check_selection.position(btn_autoFill.x,btn_autoFill.y+btn_autoFill.height)
  check_insert.position(check_selection.x,check_selection.y+check_selection.height)
  check_bubble.position(check_insert.x,check_insert.y+check_insert.height)
  check_quick.position(check_bubble.x,check_bubble.y+check_bubble.height)
  check_heap.position(check_quick.x,check_quick.y+check_quick.height)
  check_merge.position(check_heap.x,check_heap.y+check_heap.height)
  check_radix.position(check_merge.x,check_merge.y+check_merge.height)
  sel_recursive.position(check_radix.x,check_radix.y+check_radix.height)
  check_show_data.position(sel_recursive.x,sel_recursive.y+sel_recursive.height)
  btn_draw.position(check_show_data.x,check_show_data.y+check_show_data.height)
  //label_out.position(btn_draw.x,btn_draw.y+btn_draw.height)
  label_out.position(windowWidth/3,50)
}


function mySelectEvent()
{
  sorting_strategy = sel_recursive.value()
}

function auto_fill()
{
  inp_n.value(100)
  inp_range.value(10000)
  inp_times.value(10)
  //inp_src.value(1)
  //inp_dst.value(3)
  //inp_max_num.value(1e9-1)
  //inp_threshold.value(50)
}




/*
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
let matrix = [
        {name: "Lee Gai Fun", age: 42, sex: "M"},
        {name: "Laia Hamidullah", age: 27, sex: "F" },
        {name: "Abraham Mdulla", age: 33, sex: "M" }
       ];
    window.open("adjacent_matrix.html?matrix="+JSON.stringify(matrix));

    let matrix = [[1,2,3],[2,3,4],[2,44,56,3]]
    window.open("adjacent_matrix.html?matrix="+JSON.stringify(matrix));
    
*/
