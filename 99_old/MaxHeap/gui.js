//////// Event ////////
function slider_change() {
    label_config.html("select "+slider_number.value()+" numbers <br>from: [ "+slider_range_from.value()+", "+slider_range_to.value()+" ]")
}
let hp
let label_config, slider_range_from, slider_range_to, slider_number,check_random, inp,label_out,check_insert,check_search
let tree_root_pos;
let check_recursive_traversal, check_delete, check_show_construct
let inp_infix, inp_otherfix, label_delete
function initGUI()
{
    hp = new MaxHeap()

    label_out = createP("label_out")
    label_config = createP("label_config")
    slider_number = createSlider(0, 100, 5,1);
    createElement("br")
    slider_range_from = createSlider(-100, 0, -100,1);
    slider_range_to = createSlider(0, 100, 100,1);
    
    slider_number.style('width', '16em');
    slider_range_from.style('width', '16em')
    slider_range_to.style('width', '16em')

    createElement("br")
    inp = createInput('');
    inp.attribute('placeholder', 'Enter value to Insert one');
    check_random = createCheckbox('random insert', false);

    let btn_insert = createButton('insert');

    let btn_delete = createButton('delete');

    btn_insert.mouseClicked(insert_element)

    btn_delete.mouseClicked(delete_element)
    
    label_find = createP("")
    label_delete = createP("")

    label_out.position(slider_number.x,15)
    label_config.position(slider_number.x,label_out.y+label_out.height+100)
    slider_number.position(slider_number.x,label_config.y+label_config.height+100)
    slider_range_from.position(slider_number.x,slider_number.y+slider_number.height)
    slider_range_to.position(slider_range_from.x,slider_range_from.y+slider_range_from.height)
    inp.position(slider_range_from.x,slider_range_to.y+slider_range_to.height)
   
    check_random.position(inp.x,inp.y+inp.height)
    btn_insert.position(check_random.x,check_random.y+check_random.height)
    btn_delete.position(btn_insert.x+btn_insert.width, btn_insert.y+btn_insert.height)
    label_delete.position(btn_insert.x+btn_insert.width, btn_delete.y+btn_delete.height)
    slider_range_to.input(slider_change) 
    slider_range_from.input(slider_change) 
    slider_number.input(slider_change) 
    
    slider_change()
    //updateGUI()
    
}
function insert_element()
{
    if (check_random.checked()) { //random insert
        let input_data = []
        for (let i = 0; i < int(slider_number.value()); i++) {
            _max = int(slider_range_to.value())-int(slider_range_from.value())
            _input = getRandomInt(_max) - int(slider_range_to.value())
            hp.insert( _input )
        }
    } else if (inp.value()!=="") {
        let input = inp.value()
        if ( !Number.isNaN(int(input))) {
            input = int(input)
        } 
        hp.insert(input)
        
    }
    label_out.html("heap: "+hp.heap.slice(1,)+"<br>sorted:"+hp.sort())
    inp.value("")
    updateGUI()
}
function delete_element()
{
    let n = hp.deleteMax()
    label_delete.html(n+" has been deleted")
    label_out.html("heap: "+hp.heap.slice(1,hp.n+1)+"<br>sorted:"+hp.sort().slice(0,hp.n))
    updateGUI()
}
function keyTyped() {
    if (key==="Enter") insert_element()
}
function getHeight(x) {
    return Math.floor(Math.log(x) / Math.log(2)) ;
}
function updateGUI()
{
    background(220)
    let length = hp.n+1
  
    let depth = getHeight(length)
    console.log("length:",length, getHeight(length) ,"windowWidth", windowWidth)
    let pos = []
    for(let i=1; i<length; i++) {
        // getHeight("=",i)//hp.heap[i+1]
        
        let h = windowHeight/(depth+1)
        let k = getHeight(i)
        let k_max_node = Math.pow(2,k)
        let w = windowWidth / (k_max_node+1)
        let idx_in_depth_k =  i-Math.pow(2,k) 
        let y = k*h + 50
        let x = windowWidth/2  + idx_in_depth_k*w - (k_max_node-1)*w/2//- k*(windowWidth/k)//+ (idx_in_depth_k)*w//- (i-1)*w//sh*w//+ w//- int(w/4) + w*(i-1)
        
        pos.push([x,y])
    }
    
    if (pos.length>1) line(pos[0][0], pos[0][1], pos[1][0], pos[1][1])
    if (pos.length>2) line(pos[0][0], pos[0][1], pos[2][0], pos[2][1])

    for (let i=1; i<pos.length/2; i++) {
        
        //console.log(i,2*i+1)
        let left_idx = 2*i+1
        let right_idx = 2*i+2
        
        if (left_idx<pos.length) line(pos[i][0], pos[i][1], pos[left_idx][0], pos[left_idx][1]);
        if (right_idx<pos.length) line(pos[i][0], pos[i][1], pos[right_idx][0], pos[right_idx][1]);
    }
    for (let i=0; i<pos.length; i++) {
        let x=pos[i][0]
        let y=pos[i][1]
        let r = 30

        circle(x,y,r)
        text(hp.heap[i+1], x-r/4, y)
    }
    

    //for(let i=1; i<2*2*2*2; i++) console.log( i, Math.floor(getBaseLog(2,i)) )
}
  