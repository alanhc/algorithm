//////// Event ////////
function slider_change() {
    label_config.html("select "+slider_number.value()+" numbers <br>from: [ "+slider_range_from.value()+", "+slider_range_to.value()+" ]")
}
function update_traversal() {
    bst.printInorder(bst.root)
    bst.printPreorder(bst.root)
    bst.printPostorder(bst.root)
    console.log("depth",bst.depth)
    console.log("width", bst.max_width)
    bst.inorder_stack(bst.root)
    label_out.html("Inorder(recursive):"+bst.inorderList+"<br>Inorder(non-recursive):"+bst.inorder_stackList+"<br>Preorder:"+bst.preorderList+"<br>Postorder:"+bst.postorderList)
    draw_graph()
}
function insert_element()
{
    let mode = (check_insert.checked())? "r":"n"
    let mode_f = (check_search.checked())? "r":"n"
    if (check_random.checked()) { //random insert
        for (let i=0; i<slider_number.value(); i++) {
            let n = int(random(slider_range_from.value(), slider_range_to.value()))
            if (bst.find(n,mode_f)===null) bst.insert(n,mode)
            else i-=1
        }
        inp.value("")
    } else if (inp.value()!=="") {
        let input = inp.value()
        if ( !Number.isNaN(int(input))) {
            input = int(input)
        } 
        if (bst.find(input,mode_f)===null) bst.insert(input,mode)
        inp.value("")
    }
    update_traversal()
}
function search_element()
{
    let mode = (check_search.checked())? "r":"n"
    let data = inp.value()
    if ( !Number.isNaN(int(data))) {
        data = int(data)
    } 
  
    if (bst.find(data,mode)===null) label_find.html("Not found!")
    else label_find.html("Found!")
    inp.value("")
    
}
function keyTyped() {
    if (key==="Enter") insert_element()
}

let label_config, slider_range_from, slider_range_to, slider_number,check_random, inp,label_out,check_insert,check_search
let tree_root_pos;
function init_gui() {
    createCanvas(windowWidth, windowHeight)
    tree_root_pos = {x:windowWidth/2, y:100}
    label_out = createP("label_out")
    


    label_config = createP("label_config")
    slider_number = createSlider(0, 100, 5,1);
    createElement("br")
    slider_range_from = createSlider(-100, 0, -100,1);
    slider_range_to = createSlider(0, 100, 100,1);
    
    
    slider_number.style('width', '16em');
    slider_range_from.style('width', '16em')
    slider_range_to.style('width', '16em')

    slider_number.input(slider_change) 
    slider_range_from.input(slider_change) 
    slider_range_to.input(slider_change) 
    createElement("br")

    
    let menu = {x:15,y:15} 
    inp = createInput('');
    inp.attribute('placeholder', 'Enter value');
    //inp.position(menu.x,menu.y)
    
    check_search = createCheckbox('recursive find', true);
    check_insert = createCheckbox('recursive insert', true);
    check_random = createCheckbox('random insert', false);
    
    

    
    let btn_insert = createButton('insert');
    let btn_search = createButton('search');
    
    btn_insert.mouseClicked(insert_element)
    btn_search.mouseClicked(search_element)
    label_find = createP("")

    label_out.position(slider_number.x,15)
    label_config.position(slider_number.x,label_out.y+label_out.height+50)
    slider_number.position(slider_number.x,label_config.y+label_config.height+50)
    slider_range_from.position(slider_number.x,slider_number.y+slider_number.height)
    slider_range_to.position(slider_range_from.x,slider_range_from.y+slider_range_from.height)
    inp.position(slider_range_from.x,slider_range_to.y+slider_range_to.height)
    check_search.position(slider_range_from.x,inp.y+inp.height)
    check_insert.position(slider_range_from.x,check_search.y+check_search.height)
    check_random.position(slider_range_from.x,check_insert.y+check_insert.height)
    btn_insert.position(slider_range_from.x,check_random.y+check_random.height)
    btn_search.position(btn_insert.x+btn_insert.width, btn_insert.y+btn_insert.height)
    label_find.position(slider_range_from.x,btn_search.y+btn_search.height)
    slider_change()
    update_traversal()
}

function draw_graph()
{
    background(255)
    if(bst.preorderList.length!==0) {
        
        console.log(bst.drawList) 
        for (let i=0; i<bst.drawList.length; i++) {
            line(bst.drawList[i][4][0],bst.drawList[i][4][1],bst.drawList[i][4][2],bst.drawList[i][4][3])
        }
        for (let i=0; i<bst.drawList.length; i++) {
            let x = bst.drawList[i][1]
            let y = bst.drawList[i][2]
            let size =  60/(bst.drawList[i][3]+1)
            if (size<30) size=30
            circle(tree_root_pos.x+x,tree_root_pos.y+y,size)
            text(bst.drawList[i][0],tree_root_pos.x+x-10,tree_root_pos.y+y+5)
            
        }
    }
    bst.drawList=[]
}  

function test() {
    console.log("XD you found me")
}
