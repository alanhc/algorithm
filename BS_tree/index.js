
let menu, graph
let input_list
let inp
function insert_element() {
    if (value) {
        input_list.push(value);
        inp.value('')
        value=""
        drawInputList()
    }
    console.log(input_list)
}
let value;
function inputEvent() {
    console.log('you are typing: ', this.value());
    value = this.value()
}
function gui() {

    // menu
    let x=15,y=15
    menu = createGraphics(windowWidth/5, windowHeight);
    menu.background(20)
    inp = createInput('');
    inp.input(inputEvent);
    inp.position(x,y)
    inp.size(windowWidth/5-20,)
    btn_insert = createButton('insert');
    btn_insert.position(inp.x,inp.y+inp.height)
    btn_insert.mousePressed(insert_element);
    btn_search = createButton('search');
    btn_search.position(inp.x+btn_insert.width,inp.y+inp.height)
    //tree graph
    graph = createGraphics(windowWidth/5*4, windowHeight);
    graph.background(250)
}
let e
let i
function num_press() {
    //console.log(this.id)
    inp.value(this.id)
}
function drawInputList() {
    
    
    let number = createButton(input_list[i]);
    number.id = input_list[i]
    number.style("background-color","#F0F8FF")
    number.mousePressed(num_press)
    e.push(number)

    if (i!=0) number.position((e[i-1].x+e[i-1].width),10)
    else number.position(menu.width+10,10)
    i++
}

function setup() {
    createCanvas(windowWidth,windowHeight)
    gui()
    background(220)
    input_list = []
    e = []
    i = 0
    //pg = createGraphics(100, 100);
    //drawInputList()
}

function draw() {
    image(menu, 0, 0, windowWidth/5, windowHeight);
    image(graph, windowWidth/5, 0, windowWidth, windowHeight);
    
    
}



// Algorithm

class Node
{
    constructor(data)
    {
        this.data = data
        this.left = null
        this.right = null
    }
}