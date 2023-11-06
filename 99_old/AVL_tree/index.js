class Node 
{
    constructor(data) {
        this.data=data
        this.left = null
        this.right = null
        this.height=1
    }
}


class AVL_tree
{
    constructor()
    {
        this.root = null
        this.preorderList=[]
    }
    getHeight(node)
    {
        if (node===null) return 0
        return node.height
    }
    getBalance(node)
    {
        if (node===null) return 0
        return this.getHeight(node.left) - this.getHeight(node.right)
    }
    leftRotate(x)
    {
        /*
            x                   y
           / \                 / \ 
        T1    y       =>      x   T3
             / \             / \
            T2  T3          T1 T2
        
        */
        let y = x.right
        let t2 = y.left
        y.left = x
        x.right = t2
        x.height = 1+Math.max(this.getHeight(x.left), this.getHeight(x.right))
        y.height = 1+Math.max(this.getHeight(x.left), this.getHeight(x.right))
        return y
    }
    rightRoate(x)
    {
         /*
            x                  y
           / \                / \
          y  T3      =>      T1  x
         / \                    / \
        T1 T2                  T2 T3
        */
        let y = x.left
        let t2 = y.right
        y.right = x
        x.left = t2
        x.height = 1+Math.max(this.getHeight(x.left), this.getHeight(x.right))
        y.height = 1+Math.max(this.getHeight(y.left), this.getHeight(y.right))
        return y
    }


    ///////// insert /////////
    insert(node, data)
    {
        if (node===null) {
            let newNode = new Node(data)
            return newNode
        } else if (data===node.data) {
            return node
        } else if (data<node.data) {
            node.left = this.insert(node.left, data)
        } else {
            node.right = this.insert(node.right, data)
        }
       
        // 找到了
        node.height = 1+Math.max(this.getHeight(node.left), this.getHeight(node.right))
        let balance = this.getBalance(node)
        // LL RR LR RL 
        
        if (balance>1 && data<node.left.data) return this.rightRoate(node)  //LL
        if (balance<-1 && data>node.right.data) return this.leftRotate(node) //RR
        if (balance>1 && data>node.left.data) { //LR
            node.left = this.leftRotate(node.left)
            return this.rightRoate(node)
        } 
        if (balance<-1 && data<node.right.data) { //RL
            node.right = this.rightRoate(node.right)
            return this.leftRotate(node)
        }
        return node // return 沒變的
    }
    ///////// insert /////////
    ///////// delete /////////
    delete(node, data)
    {
        if (node===null) return node
        if (data<node.data) node.left = this.delete(node.left, data)
        else if (data>node.data) node.right = this.delete(node.right, data)
        else { //found
            let temp = null
            if(node.left===null) {
                temp = node.right
                node = null
                return temp
            } else if (node.right===null) {
                temp = node.left
                node = null
                return temp
            }
            temp = this.inorderSuccessor(node.right)
            node.data = temp.data
            node.right = this.delete(node.right, temp.data)
        }
        if (node===null) return node

        node.height = 1+ Math.max(this.getHeight(node.left), this.getHeight(node.right))
        let balance = this.getBalance(node)
        if (balance>1 && this.getBalance(node.left)>=0) { //LL
            return this.rightRoate(node)
        }
        if (balance<-1 && this.getBalance(node.right)<=0) { //RR
            return this.leftRotate(node)
        } 
        if (balance>1 && this.getBalance(node.left)<0){ //LR
            node.left = this.leftRotate(node.left)
            return this.rightRoate(node)    
        } 
        if (balance<-1 && this.getBalance(node.right)>0) { //RL
            node.right = this.rightRoate(node.right)
            return this.leftRotate(node)
        }
        return node
    }
    ///////// delete /////////
    inorderSuccessor(node)
    {
        let now = node
        while (now.left!==null) {
            now = now.left
        } 
        return now
    }

    preorder(node)
    {
        if (node!=null) {
            this.preorderList.push(node.data)
            this.preorder(node.left)
            this.preorder(node.right)
        }
    }
    printTree(node)
    {
        this.preorderList=[]
        this.preorder(node)
        return this.preorderList
        
    }
}

let tree = new AVL_tree()
/*
tree.root = tree.insert(tree.root, 10)
tree.root = tree.insert(tree.root, 20)
tree.root = tree.insert(tree.root, 30)
tree.root = tree.insert(tree.root, 40)
tree.root = tree.insert(tree.root, 25)
tree.root = tree.insert(tree.root, 50)
*/


//console.log(tree.root)
console.log( tree.printTree(tree.root) )
tree.root = tree.delete(tree.root, 25)

console.log( tree.printTree(tree.root) )
//console.log(tree.root)