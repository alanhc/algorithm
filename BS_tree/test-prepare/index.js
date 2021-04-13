class Node
{
    constructor(data)
    {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BST
{
    constructor()
    {
        this.root = null
        this.inorder_list=[]
        this.preorder_list=[]
        this.postorder_list=[]
    }
    /////////// insert, delete, search ///////////
    /*    
        node
        /  \
      left right
    */
    inorderSuccessor(node)
    {
        let now=node
        while(now.left!==null) {
            now = now.left
        }
        return now
    }
    delete(data, mode)
    {
        if (mode==='r') return this.delete_recursive(this.root, data)
        else return this.delete_non_recursive(this.root, data)
    }
    find(data, mode)
    {
        if (mode==='r') return this.search_recursive(this.root, data)
        else return this.search_non_recursive(this.root, data)
    }
    insert(data, mode)
    {
        if (this.root===null) {
            let node = new Node(data)
            this.root = node
        } else  {
            if (mode === 'r') this.root = this.insert_recursive(this.root, data)
            else this.insert_non_recursive(this.root, data)
        } 
    }
    delete_recursive(node, data)
    {
        if(node === null) return node // 找不到
        if (data<node.data) node.left = this.delete_recursive(node.left, data)
        else if (data>node.data) node.right = this.delete_recursive(node.right, data)
        else { //找到
            let temp;
            if (node.left===null) {//左邊沒有 或 兩邊沒有
                temp = node.right
                node = null
                return temp
            } else if (node.right ===null) {//右邊沒有
                temp = node.left
                node = null
                return temp
            } else {// 兩邊都有
                temp = this.inorderSuccessor(node.right, data)
                node.data = temp.data
                node.right = this.delete_recursive(node.right, temp.data)
            }
        }
        return node
    }
    delete_non_recursive(root, data)
    {
        let now = root, father=null
        while (now!==null &&now.data!==data) {
            father=now
            if(data<now.data) now=now.left
            else now = now.right
        }
        if (now===null) {
            return 0// 沒找到
        }
        if (now.left===null || now.right==null) {//有一個以下的child
            let temp = null
            //找要接的節點
            if(now.left===null) temp=now.right
            else temp=now.left

            //刪除的微整棵樹的root
            if (father===null) return temp
            if (now===father.left) father.left = temp
            else father.right = temp
            now=null
        } else { // 有兩個child
            let temp = this.inorderSuccessor(now.right, now.data)
            now.data = temp.data
            this.delete_non_recursive(now.right, now.data)
        }
    }
    insert_recursive(node, data)
    {   
        if (node === null) {
            let newNode = new Node(data)
            return newNode
        }
        if (node.data==data) {
            return node
        }
        if (data<node.data) node.left = this.insert_recursive(node.left, data)
        else node.right = this.insert_recursive(node.right, data)
        return node
    }
    
    insert_non_recursive(root, data)
    {
        let newNode = new Node(data)
        if (root===null) return newNode
        let pre = null
        let now = root
        while ( now!==null ) {
            if ( data==now.data) return 0
            pre = now
            if (data<now.data) now = now.left
            else now = now.right
        }
        if (data<pre.data) pre.left = newNode
        else pre.right = newNode 
    }
    search_recursive(node, data)
    {
        if (node===null) return 0
        if (node.data===data) return 1
        if (data<node.data) return this.search_recursive(node.left, data)
        else return this.search_recursive(node.right, data)
    }
    search_non_recursive(node,data)
    {
        while (node!==null)
        {
            if (data === node.data) return 1
            if (data<node.data) node = node.left
            else node = node.right
        }
        return 0
    }
    levelorder(node)
    {
        if (node!==null) {
            let ans = []
            let queue_tmp = []
            queue_tmp.push(node)
            while(queue_tmp.length) {
                let front = queue_tmp.shift()
                ans.push(front.data)
                if(front.left!==null) queue_tmp.push(front.left)
                if(front.right!==null) queue_tmp.push(front.right)
            }
            console.log("levelorder:",ans)
        }
    }
    inorder(node, mode)
    {
        this.inorder_list=[]
        if (mode==='r')  this.inorder_recursive(node)
        else  this.inorder_non_recursive(node)
        console.log("inorder:",this.inorder_list)
    }
    preorder(node, mode)
    {
        this.preorder_list=[]
        if (mode==='r')  this.preorder_recursive(node)
        else  this.preorder_non_recursive(node)
        console.log("preorder:",this.preorder_list)
    }
    postorder(node, mode)
    {
        this.postorder_list=[]
        if (mode==='r')  this.postorder_recursive(node)
        else  this.postorder_non_recursive(node)
        console.log("postorder:",this.postorder_list)
    }
    inorder_recursive(node)
    {
        if (node!==null) 
        {
            this.inorder_recursive(node.left)
            this.inorder_list.push(node.data)
            this.inorder_recursive(node.right)
        }
    }
    preorder_recursive(node)
    {
        if (node!==null) {
            this.preorder_list.push(node.data)
            this.preorder_recursive(node.left)
            this.preorder_recursive(node.right)
        }
    }
    postorder_recursive(node)
    {
        if (node!==null) {
            this.postorder_recursive(node.left)
            this.postorder_recursive(node.right)
            this.postorder_list.push(node.data)
        }
    }
    inorder_non_recursive(root)
    {
        let stack_node = []
        let now = root
        while (true) {
            if (now!==null) {
                stack_node.push(now)
                now = now.left
            } else if (stack_node.length) {
                now = stack_node.pop()
                this.inorder_list.push(now.data)
                now = now.right
            } else {
                break
            }
        }
    }
    preorder_non_recursive(root)
    {
        let stack_node=[]
        let now=root
        while(true) {
            if (now!=null) {
                this.preorder_list.push(now.data)
                stack_node.push(now)
                now = now.left
            } else if(stack_node.length) {
                now = stack_node.pop()
                now = now.right
            } else {
                break
            }
        }
    }
    postorder_non_recursive(root)
    {
        //左右中->中右左
        let stack_node = []
        let temp=[]
        let now = root
        while(true) {
            if (now!==null) {
                temp.push(now.data) //中
                stack_node.push(now)
                now = now.right //右
            } else if (stack_node.length) {
                now = stack_node.pop()
                now = now.left //左
            } else {
                break
            }
        }
        this.postorder_list = temp.reverse()
    }
    prefix_infix(prefix_list, infix_list)
    {
        if (infix_list.length===0) return null
        let node = new Node(prefix_list[0])
        let nidx = infix_list.indexOf(node.data)
        node.left = this.prefix_infix(prefix_list.slice(1,nidx+1), infix_list.slice(0,nidx))
        node.right = this.prefix_infix(prefix_list.slice(nidx+1,), infix_list.slice(nidx+1,))
        
        return node
    }
    postfix_infix(postfix_list, infix_list)
    {
        if (infix_list.length===0) return null
        let node = new Node(postfix_list[postfix_list.length-1])
        let nidx = infix_list.indexOf(node.data)
        node.left = this.postfix_infix(postfix_list.slice(0,nidx), infix_list.slice(0, nidx))
        node.right = this.postfix_infix(postfix_list.slice(nidx, -1), infix_list.slice(nidx+1, ))
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
let bst = new BST()
bst.insert(1, 'n')
bst.insert(1, 'n')
bst.insert(-5, 'n')
bst.insert(5, 'n')
bst.insert(-6, 'n')
bst.insert(0, 'n')
bst.insert(2, 'n')
bst.insert(6, 'n')


bst.levelorder(bst.root)
bst.inorder(bst.root,"r" )
//bst.inorder(bst.root,"n" )
bst.preorder(bst.root,"r")
//bst.preorder(bst.root,"n")
bst.postorder(bst.root, "r")
//bst.postorder(bst.root, "n")
//console.log(bst.prefix_infix("ABHJCDFGE", "HBJAFDGCE"))
//console.log(bst.postfix_infix("HJBFGDECA", "HBJAFDGCE"))
console.log(bst.levelorder_infix("ABCHJDEFG", "HBJAFDGCE"))

console.log("result:", bst.root)