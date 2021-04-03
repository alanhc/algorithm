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
    }
    /////////// insert, delete, search ///////////
    /*    
        node
        /  \
      left right
    */
    insert(data, mode)
    {
        if (this.root===null) {
            let node = new Node(data)
            this.root = node
        } else  {
            if (mode === 'r') this.root = this.insert_recursive(this.root, data)
            else  this.insert_non_recursive(this.root, data)
        } 
    }
    insert_recursive(node, data)
    {   
        if (node === null) {
            let newNode = new Node(data)
            return newNode
        }
        if (data<node.data) node.left = this.insert_recursive(node.left, data)
        else node.right = this.insert_recursive(node.right, data)
        return node
    }
    
    insert_non_recursive(root, data)
    {
        let newNode = new Node(data)
    
        let pre = null
        let now = root
        while ( now!==null ) {
            pre = now
            if (data<now.data) now = now.left
            else now = now.right
        }
        if (data<pre.data) pre.left = newNode
        else pre.right = newNode 
    }
}
let bst = new BST()
bst.insert(2, 'n')
bst.insert(1, 'n')
bst.insert(3, 'n')
//bst.insert(1, 'r')



console.log("result:", bst.root)