//////// Event ////////
function slider_change() {
    label_config.html("select "+slider_number.value()+" numbers <br>from: [ "+slider_range_from.value()+", "+slider_range_to.value()+" ]")
}
function update_traversal() {
    bst.printInorder(bst.root)
    bst.printPreorder(bst.root)
    bst.printPostorder(bst.root)
    label_out.html("Inorder:"+bst.inorderList+"<br>Preorder:"+bst.preorderList+"<br>Postorder:"+bst.postorderList)
}
function insert_element()
{
    let mode = (check_insert.checked())? "r":"n"
    if (check_random.checked()) { //random insert
        for (let i=0; i<slider_number.value(); i++) {
            let n = int(random(slider_range_from.value(), slider_range_to.value()))
            bst.insert(n,mode)
        }
    } else if (inp.value()!=="") {
        let input = inp.value()
        if ( !Number.isNaN(int(input))) {
            input = int(input)
        } 
        bst.insert(input,mode)
        inp.value("")
    }
    update_traversal()
}
function keyTyped() {
    if (key==="Enter") insert_element()
}

let label_config, slider_range_from, slider_range_to, slider_number,check_random, inp,label_out,check_insert,check_search

function init_gui() {
    label_out = createP("label_out")
    


    label_config = createP("label_config")
    slider_number = createSlider(0, 1000, 5,1);
    createElement("br")
    slider_range_from = createSlider(-100, 0, -100,1);
    slider_range_to = createSlider(0, 100, 100,1);
    
    
    slider_number.style('width', '16em');
    slider_range_from.style('width', '8em')
    slider_range_to.style('width', '8em')

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



    label_out.position(slider_number.x,15)
    slider_change()
    update_traversal()
}


function test() {
    console.log("XD you found me")
}
