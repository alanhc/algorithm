
let menu, graph
let input_list
let inp
let root
function insert_element() {
    if (value) {
        input_list.push(value);
        inp.value('')
        value=""
        //drawInputList()
        //bst.insert(value)
        //bst.inorder(root); 
        console.log(input_list)
    }
    
}
let value;
function inputEvent() {
    //console.log('you are typing: ', this.value());
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




let bst;
function setup() {
    createCanvas(windowWidth,windowHeight)
    gui()
    background(220)
    input_list = []
    e = []
    i = 0
    

    bst = new BinarySearchTree();
    
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

}

function draw() {
    image(menu, 0, 0, windowWidth/5, windowHeight);
    image(graph, windowWidth/5, 0, windowWidth, windowHeight);
    
    
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
    inorder(node)
    {
        if(node !== null)
        {
            this.inorder(node.left)
            console.log(node.data)
            this.inorder(node.right)
        }
    }
    getRootNode() 
    { 
        return this.root; 
    } 

}
