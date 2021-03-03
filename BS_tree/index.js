
let menu, graph
let input_list
let inp
let root
let bst;
let drawNodeList
function drawNode()
{
    console.log(drawNodeList)
    for (let i=0; i<drawNodeList.length; i++) {
        graph.circle(drawNodeList[i][1],drawNodeList[i][2],50 )
        graph.text(drawNodeList[i][0],drawNodeList[i][1]-5,drawNodeList[i][2])
        
    }
}
function insert_element() {
    graph.background(250)
    if (inp.value()) {
        // console.log("enter")
        //input_list.push(value);
        
        
        let input = inp.value()
        if ( !Number.isNaN(int(input))) {
            input = int(input)
        } 
        
        
        bst.insert(input)
        
        
        let root = bst.getRootNode();
     
        bst.printInorder(root)
        bst.printPreorder(root)
        bst.printPostorder(root)
        drawNode()
        
        inp.value('')
        
    }
    
}
function insert_random_element() {
    
    for (let i=0; i<slider_num.value(); i++) {
        graph.background(250)
        let n = int(random(slider_range_from.value(), slider_range_to.value()))
        bst.insert(n)
        let root = bst.getRootNode();
        bst.printInorder(root)
        bst.printPreorder(root)
        bst.printPostorder(root)
    }    
    drawNode()
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
    btn_insert.mouseClicked(insert_element);
    btn_search = createButton('search');
    btn_search.position(inp.x+btn_insert.width+10,inp.y+inp.height)
    
    
    
    slider_range_from = createSlider(0,100,0)
    slider_range_from.position(btn_search.x, btn_search.y+btn_search.height+15)
    slider_range_to = createSlider(0,100,100)
    slider_range_to.position(btn_search.x, slider_range_from.y+slider_range_from.height)
    slider_num = createSlider(0,50,1000/2)
    slider_num.position(btn_search.x, slider_range_to.y+slider_range_to.height)
    
    btn_random_insert = createButton('random integers');
    btn_random_insert.position(btn_insert.x,  slider_num.y+slider_num.height+50)
    btn_random_insert.mouseClicked(insert_random_element);

    //tree graph
    graph = createGraphics(windowWidth/5*4, windowHeight);
    graph.background(250)
    //graph.text("inorder:"+bst.inorderList,30,30)
}





function setup() {
    drawNodeList = []
    createCanvas(windowWidth,windowHeight)
    init_gui()
    background(220)
    input_list = []
    

    bst = new BinarySearchTree();
    
}

function draw() {
    image(menu, 0, 0, windowWidth/5, windowHeight);
    image(graph, windowWidth/5, 0, windowWidth, windowHeight);
    menu.background(0,255,255)
    
    menu.text("from:\nto:\nnumbers:", btn_insert.x+1,  btn_insert.y+btn_insert.height+18)
    //menu.text("to:", btn_insert.x,  btn_search.y+btn_search.height+35)
    //menu.text("numbers:", btn_insert.x,  btn_search.y+btn_search.height+51)

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
        this.x = -1
        this.y = -1
        //graph.circle(windowWidth/3,75,70)
        //graph.circle(gr/2,30,30)

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
        if (this.root === null) {
            this.root = newNode;
            drawNodeList.push([data,windowWidth/3,75])
            
        } else this.insertNode(this.root, newNode, windowWidth/3, 75) //尋找新增節點的位置
    }
    // insertNode : 新增進樹的方法
    insertNode(node, newNode, x,y)
    {
        
        if (newNode.data < node.data){ // new小於root node，走左邊
            
            if(node.left === null) { //空的可以放
                node.left = newNode
                drawNodeList.push([newNode.data,x-60,y+60])
                
            } else { //有東西，往下一層遞迴找
                this.insertNode(node.left, newNode, x-60, y+60)
            }
        } else { // new小於root node，走右邊
           
            if(node.right === null) { //空的可以放
                node.right = newNode
                drawNodeList.push([newNode.data,x+60,y+60])
            } else { //有東西，往下一層遞迴找
                this.insertNode(node.right, newNode, x+60, y+60)
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
