
////////// GUI //////////
let bst

function setup() {
    createCanvas(windowWidth, windowHeight)
    bst = new BinarySearchTree()
    init_gui()
    //bst.printInorder(bst.root)
    //let tree = bst.prefix_infix("ABHJCDFGE", "HBJAFDGCE")
    //let tree = bst.postfix_infix("HJBFGDECA", "HBJAFDGCE")
    //let tree = bst.levelorder_infix("ABCHJDEFG", "HBJAFDGCE")
    //let tree = bst.levelorder_infix([20,8,22,4,12,10,14], [4,8,10,12,14,20,22])
    
    //console.log(tree)

    //bst.printPostorder(tree)
    //bst.printInorder(tree)
    //bst.level_order(tree)
    

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
        this.preorder_stackList = []
        this.postorder_stackList = []
        this.levelOrder_travesal = []

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
        if (mode=="r") this.root = this.delete_recursive(this.root,data)
        else this.root = this.delete_non_recursive(this.root,data)
        console.log(bst.root)
        //this.root = this.delete_recursive(this.root,data)
    }
    delete_non_recursive(root, data)
    {
        data = Number(data)
        let now = root, father=null
        //檢查bst裡面有沒有尋找元素，father為要找節點的父親
        while (now!==null && now.data!==data) {
            father = now
            if (data>now.data) now = now.right
            else now = now.left
            //console.log("=",typeof now.data, typeof data, now.data === data)
        }
        if (now===null) {// 沒有找到
            console.log("not found")
            return root
        }
        //檢查node是不超過ㄧ個child(一個/零個)
        if (now.left===null || now.right===null) {
            
            // newNow為刪除節點的child
            let newNow = null
            
            if (now.left === null) newNow = now.right
            else newNow = now.left
            
            
            //要刪除的是root
            if (father===null) return newNow
            //接回去father
            if (now===father.left) father.left = newNow
            else father.right = newNow
            now = null
            
        } else { //有兩個child
            console.log("2 child")
            let temp = this.inorderImmediateSuccessor(now.right) //後繼節點
            now.data = temp.data
            this.delete_non_recursive(now.right, now.data)
        }
        return root
        
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
        console.log("printInorder:", this.inorderList)
        
    }
    printPreorder(node)
    {
        this.preorderList = []
        this.preorder(node,0,0,0,0,0)
        console.log("printPreorder:", this.preorderList)
    }
    printPostorder(node)
    {
        this.postorderList = []
        this.postorder(node)
        console.log("printPostorder:", this.postorderList)
    }
    level_order(node)
    {
        
        if (node!==null) {
            this.levelOrder_travesal = []
            let queue_tmp = []
            queue_tmp.push(node)
            while(queue_tmp.length) {
                let front = queue_tmp.shift()
                this.levelOrder_travesal.push(front.data)
                //console.log(queue_tmp)
                if (front.left!==null) queue_tmp.push(front.left)
                if (front.right!==null) queue_tmp.push(front.right)
            }
            console.log("printLevelOrder:", this.levelOrder_travesal)
        }    
        
    }
    ///implement of (non-recursive) traversal  非遞迴走訪
    inorder_stack(root)
    {
        let stackNode = []
        let current = root
        this.inorder_stackList = []
        while((stackNode.length!==0) || (current!==null)) {
            if (current !== null) {
                stackNode.push(current) 
                current = current.left //左
            } else if (stackNode.length){
                current = stackNode.pop()
                this.inorder_stackList.push(current.data) //中
                current = current.right //右
            }
        } 
    }
    preorder_stack(root)
    {
        let stackNode = []
        let current = root
        this.preorder_stackList = []
        while((stackNode.length!==0) || (current!==null)) {
            if (current !== null) {
                this.preorder_stackList.push(current.data) //中
                stackNode.push(current) 
                current = current.left //左
            } else if (stackNode.length){
                current = stackNode.pop()
                current = current.right //右
            }
        } 
       
    }
    postorder_stack(root)
    {
        let stackNode = []
        let current = root
        let temp = []
        while((stackNode.length!==0) || (current!==null)) {
            if (current !== null) {
                temp.push(current.data) //中
                stackNode.push(current) 
                current = current.right //右
            } else if (stackNode.length){
                current = stackNode.pop()
                current = current.left //左
            }
        }

        this.postorder_stackList = temp.reverse()
       
    }
    // implement of (recursive) traversal  遞迴走訪
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

    // Derterming a tree
    prefix_infix(prefix_list, infix_list)
    {
        if (infix_list.length===0) return null
        let node = new Node(prefix_list[0])
        let n_idx = infix_list.indexOf(node.data)
        console.log(n_idx, node.data)
        node.left = this.prefix_infix(prefix_list.slice(1, n_idx+1), infix_list.slice(0, n_idx) )
        node.right = this.prefix_infix(prefix_list.slice(n_idx+1, ), infix_list.slice(n_idx+1, ) )
        return node
    }
    postfix_infix(postfix_list, infix_list)
    {
        console.log("-", postfix_list, infix_list)
        if (infix_list.length===0) return null
        let node = new Node(postfix_list[postfix_list.length-1]) //拿最後
        let n_idx = infix_list.indexOf(node.data)
        node.left = this.postfix_infix(postfix_list.slice(0, n_idx), infix_list.slice(0, n_idx) )
        node.right = this.postfix_infix(postfix_list.slice(n_idx, -1), infix_list.slice(n_idx+1, ) )
        return node
    }
    levelorder_infix(levelorder_list, infix_list)
    {
        if (infix_list.length===0) return null
        
        let node, n_idx
        //找infix_list裡，第i個levelorder_list index
        for (let i=0; i<levelorder_list.length; i++) {
            if (infix_list.includes(levelorder_list[i])) {
                node = new Node(levelorder_list[i])
                console.log(node.data)
                n_idx = infix_list.indexOf(node.data)
                break
            }
        }
        node.left = this.levelorder_infix(levelorder_list, infix_list.slice(0,n_idx))
        node.right = this.levelorder_infix(levelorder_list, infix_list.slice(n_idx+1,))
        return node
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