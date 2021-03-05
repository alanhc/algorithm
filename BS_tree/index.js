
////////// GUI //////////
let bst
function setup() {
    createCanvas(windowWidth, windowHeight)
    bst = new BinarySearchTree()
    init_gui()
    //bst.printInorder(bst.root)
    
}

////////// Algorithm //////////
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
        this.depth = 0
        this.drawList = []
    }
    ////////////// quick_function //////////////    
    insert(data, mode) 
    {
        if (this.root === null) {
            if (mode=="r") this.root = bst.insert_recursive(null, data)
            else this.root = this.insert_non_recursive(null,data)
        } else this.insert_recursive(this.root, data)
    }
    find(data, mode)
    {
        if (mode=="r") return this.search_recursive(this.root, data)
        else return this.search_non_recursive(this.root, data)
    }

    ////////////// 操作樹 implement operations //////////////
    insert_recursive(node, data)
    {
        if (node === null) {
            let newNode = new Node(data);
            return newNode;
        }
        if (data < node.data){ // new小於root node，走左邊
            node.left =  this.insert_recursive(node.left, data) 
        } else { // new小於root node，走右邊
            node.right =  this.insert_recursive(node.right, data) 
        }
        return node
    }
    insert_non_recursive(root, data)
    {
        let newNode = new Node(data);
        if (root === null) { // 種下root
            return newNode;
        } 
        //使用p,q移到bst中的新增位置
        let p = root, q = null
        while ( p!==null ) {
            q = p
            if (data < p.data) p = p.left //往左邊
            else p = p.right //往右邊
        } //結束，找到了
        // 新增進去
        p = newNode
        if (data < q.data) q.left = p
        else q.right = p
    }
    search_recursive(node, data)
    {
        if (node === null) return null //找不到
        if (node.data === data) return node //找到了
        if (data < node.data) return this.search_recursive(node.left, data) //往左邊找
        else return this.search_recursive(node.right, data) //往右邊找
    }
    search_non_recursive(node, data) 
    {
        while(node !== null) {
            
            if (data === node.data) return node //找到了
            if (data < node.data) node = node.left //往左邊
            else node = node.right
            
        }
        return null //沒找到
    }
    ////////////// 走訪樹 //////////////
    printInorder(node)
    {
        this.inorderList = []
        this.inorder(node, 0)
        //console.log(this.inorderList)
    }
    printPreorder(node)
    {
        this.preorderList = []
        this.preorder(node,0,0,0,0,0)
        //console.log(this.preorderList)
    }
    printPostorder(node)
    {
        this.postorderList = []
        this.postorder(node)
    }
    inorder(node, nowDepth)
    {
        if (node !== null)
        {
            this.inorder(node.left, nowDepth+1)
            this.inorderList.push(node.data)
            if (this.depth<nowDepth) this.depth = nowDepth
            this.inorder(node.right, nowDepth+1)
        }
    }
    preorder(node,x,y, pre_x, pre_y,nowDepth)
    {
        if (node !== null)
        {
            
            this.preorderList.push(node.data)
            this.drawList.push([node.data,x,y,nowDepth,[tree_root_pos.x+pre_x, tree_root_pos.y+pre_y, tree_root_pos.x+x,tree_root_pos.y+y]])
            let sh = (windowWidth/100*this.depth) / (nowDepth+1)
            pre_x = x
            pre_y = y
            this.preorder(node.left,x-sh,y+30, pre_x,pre_y, nowDepth+1)
            this.preorder(node.right,x+sh,y+30, pre_x,pre_y, nowDepth+1)
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
}


///非遞迴新增///
//let root = bst.insert_non_recursive(null, 21)
//bst.insert_non_recursive(root, 11)
///遞迴新增///
//let root = bst.insert_recursive(null, 21)
//bst.insert_recursive(root, 11)

///找尋節點///
//console.log("find:",bst.search_recursive(root,11)) 
//console.log("find:",bst.search_non_recursive(root,1)) 
///走訪樹
//bst.printInorder(root)
//bst.printPostorder(root)
//bst.printPreorder(root)