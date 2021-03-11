
////////// GUI //////////
let bst

function setup() {
    createCanvas(windowWidth, windowHeight)
    bst = new BinarySearchTree()
    init_gui()
    //bst.printInorder(bst.root)
    
}
/*
function setup() {
    bst = new BinarySearchTree()
    bst.insert(1,"r")
    bst.insert(5,"r")
    bst.insert(3,"r")
    bst.insert(2,"r")
    bst.insert(4,"r")
    console.log("root",bst.root)
    bst.inorder_stack(bst.root)
    //console.log(bst.inorderList)
}*/

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
        this.max_width = 0
        this.drawList = []
        this.inorder_stackList = []
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
    delete(data, mode)
    {
        console.log("delete",this.root)
        this.root = this.delete_recursive(this.root,data)
    }
    delete_recursive(node, data)
    {
        if (node === null) return node
        if (data < node.data) {
            node.left = this.delete_recursive(node.left, data)
        } else if (data > node.data) {
            node.right = this.delete_recursive(node.right, data)
        } else { //找到要刪除的node
            if ((node.left===null)||(node.right===null)) { //一個或沒有child
                let temp = (node.left)? node.left: node.right 
                if (temp === null) { //沒有child
                    temp = node
                    node = null
                }
                else node = temp //一個child
            } else { //兩個child
                let temp = this.inorderImmediateSuccessor(node.right) // 找 中序直接後繼元素(Inorder Successor)
                node.data = temp.data //直接取代成 中序直接後繼元素(Inorder Successor)
                node.right = this.delete_recursive(node.right, node.data) //刪除 中序直接後繼元素(Inorder Successor)
            }
            /* solution 2
            // 只有一個child 或 沒有child
            if (node.left === null) return node.right
            else if (node.right === null) return node.left
            // 有兩個 child
            let temp = this.inorderImmediateSuccessor(node.right) // 找 中序直接後繼元素(Inorder Successor)
            node.data = temp.data //直接取代成 中序直接後繼元素(Inorder Successor)
            node.right = this.delete_recursive(node.right, node.data) //刪除 中序直接後繼元素(Inorder Successor)
            */
        }
        return node
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
    inorderImmediateSuccessor(node)
    {
        let p = node
        while (p.left!==null) {
            p = p.left
        } 
        return p
    }
    
    ////////////// 走訪樹 //////////////
    printInorder(node)
    {
        this.inorderList = []
        this.inorder(node, 0, 0)
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
    inorder(node, nowDepth, x)
    {
        if (node !== null)
        {
            this.inorder(node.left, nowDepth+1, x-1)
            this.inorderList.push(node.data)
            if (this.depth<nowDepth) this.depth = nowDepth
            if (this.max_width<Math.abs(x)) this.max_width = Math.abs(x)
            this.inorder(node.right, nowDepth+1, x+1)
        }
    }
    ///implement of inoreder traversal (non-recursive) 非遞迴走訪
    inorder_stack(root)
    {
        let stackNode = []
        let current = root
        this.inorder_stackList = []
        while((stackNode.length!==0) || (current!==null)) {
            if (current !== null) {
                stackNode.push(current)
                current = current.left
            } else if (stackNode.length){
                current = stackNode.pop()
                this.inorder_stackList.push(current.data)
                current = current.right
            }
            
        } 
    }

    preorder(node,x,y, pre_x, pre_y,nowDepth)
    {
        if (node !== null)
        {
            
            this.preorderList.push(node.data)
            this.drawList.push([node.data,x,y,nowDepth,[tree_root_pos.x+pre_x, tree_root_pos.y+pre_y, tree_root_pos.x+x,tree_root_pos.y+y]])
            let sh = ((windowWidth/100)*this.depth) / (nowDepth+1)
            let sh_h = windowHeight/(this.depth+1) -10
            if (sh_h<15) sh_h=15
            
            //console.log(windowHeight, this.depth+1,sh_h) 
            pre_x = x
            pre_y = y
            this.preorder(node.left,x-sh,y+sh_h, pre_x,pre_y, nowDepth+1)
            this.preorder(node.right,x+sh,y+sh_h, pre_x,pre_y, nowDepth+1)
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