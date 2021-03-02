
let menu, graph
let input_list
let inp
let root
let bst;


function insert_element() {

    if (inp.value()) {
        // console.log("enter")
        //input_list.push(value);
        
        
        //drawInputList()
        
        bst.insert(inp.value())
        let root = bst.getRootNode();
        graph.background(250)
        bst.printInorder(root)
        bst.printPreorder(root)
        bst.printPostorder(root)
        
        //bst.inorderList
        //console.log(bst)
        
        inp.value('')
        
    }
    
}

function inputEvent() {
    //console.log('you are typing: ', this.value());
    //value = this.value()
}
function init_gui() {

    // menu
    let x=15,y=15
    menu = createGraphics(windowWidth/5, windowHeight);
    menu.background(0,255,255)
    inp = createInput('');
    inp.input(inputEvent);
    inp.position(x,y)
    inp.size(windowWidth/5-20,)
    btn_insert = createButton('insert');
    btn_insert.position(inp.x,inp.y+inp.height)
    btn_insert.mousePressed(insert_element);
    btn_search = createButton('search');
    btn_search.position(inp.x+btn_insert.width,inp.y+inp.height)
    
    
    slider_range_from = createSlider(0,100,0)
    slider_range_from.position(btn_search.x, btn_search.y+btn_search.height+15)
    slider_range_to = createSlider(0,100,100)
    slider_range_to.position(btn_search.x, slider_range_from.y+slider_range_from.height)
    slider_num = createSlider(0,10000,10000/2)
    slider_num.position(btn_search.x, slider_range_to.y+slider_range_to.height)
    
    

    //tree graph
    graph = createGraphics(windowWidth/5*4, windowHeight);
    graph.background(250)
    //graph.text("inorder:"+bst.inorderList,30,30)
}





function setup() {
    createCanvas(windowWidth,windowHeight)
    init_gui()
    background(220)
    input_list = []
    

    bst = new BinarySearchTree();
    /*
    bst.insert(15); 
    bst.insert(25); 
    bst.insert(10); 
    bst.insert(7); 
    bst.insert(22); 
    bst.insert(17); 
    bst.insert(13); 
    bst.insert(5); 
    bst.insert(9); 
    bst.insert(27);
    var root = bst.getRootNode(); 
    bst.inorder(root); 
    */
    
}

function draw() {
    image(menu, 0, 0, windowWidth/5, windowHeight);
    image(graph, windowWidth/5, 0, windowWidth, windowHeight);
    menu.background(0,255,255)
    menu.text("from:", btn_insert.x,  btn_search.y+btn_search.height+18)
    menu.text("to:", btn_insert.x,  btn_search.y+btn_search.height+35)
    menu.text("numbers:", btn_insert.x,  btn_search.y+btn_search.height+51)

    menu.text("select "+slider_num.value()+" numbers\nfrom range: [ "+slider_range_from.value()+", "+slider_range_to.value()+" ]"
        ,btn_insert.x, slider_num.y+slider_num.height+10)
        
    
}



// Algorithm
//Node class
class Node
{
    constructor(data)
    {
        this.data = data
        this.left = null
        this.right = null
    }
}
//BST class
class BinarySearchTree
{
    constructor()
    {
        this.root = null;
        this.inorderList = []
        this.preorderList = []
        this.postorderList = []
    }

    ////////////// 新增資料 //////////////
    // insert : 輸入:data，建立新的節點
    insert(data)
    {
        let newNode = new Node(data);
        if (this.root === null) this.root = newNode;
        else this.insertNode(this.root, newNode) //尋找新增節點的位置
    }
    // insertNode : 新增進樹的方法
    insertNode(node, newNode)
    {
        
        if (newNode.data < node.data){ // new小於root node，走左邊
            
            if(node.left === null) { //空的可以放
                node.left = newNode
            } else { //有東西，往下一層遞迴找
                this.insertNode(node.left, newNode)
            }
        } else { // new小於root node，走右邊
           
            if(node.right === null) { //空的可以放
                node.right = newNode
            } else { //有東西，往下一層遞迴找
                this.insertNode(node.right, newNode)
            }
        }
        
    }
    ////////////// 走訪樹 //////////////
    // inorder:左中右
    printInorder(node)
    {
        this.inorderList = []
        this.inorder(node)
        //console.log("inorder:",this.inorderList)
        
        graph.text("inorder:"+bst.inorderList,30,30)
    }
    printPreorder(node)
    {
        this.preorderList = []
        this.preorder(node)
        //console.log("preorder:",this.preorderList)
       
        graph.text("preorder:"+bst.preorderList,30,45)
    }
    printPostorder(node)
    {
        this.postorderList = []
        this.postorder(node)
        
        graph.text("postorder:"+bst.postorderList,30,60)
    }
    inorder(node)
    {
        if (node !== null)
        {
            this.inorder(node.left)
            this.inorderList.push(node.data)//console.log(node.data)
            this.inorder(node.right)
        }
    }
    preorder(node)
    {
        if (node !== null)
        {
            this.preorderList.push(node.data)
            this.preorder(node.left)
            this.preorder(node.right)
        }
    }
    postorder(node)
    {
        if (node !== null)
        {
            this.postorder(node.left)
            this.postorder(node.right)
            this.postorderList.push(node.data)
        }
    }
    getRootNode() 
    { 
        return this.root; 
    } 

}
