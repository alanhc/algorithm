# Implement of Binary Search Tree
[demo](BS_tree/)
## Usage

Using Code
* Create a BS-tree 
```javascript 
let bst = new BinarySearchTree()
```
* Insert a Element 
    * using quick function
        ```javascript
        bst.insert(21, "r") 
        // 21:number to be insert, 
        // "r" for recusive insert 
        // "n" for non-recusive insert 
        ```
    * directly insert
        ```javascript
        bst.insert_recursive(node, data)
        bst.insert_non_recursive(node, data)
        ```
## Todo
- [x] traverse(inorder, preorder, postorder)
- [x] insert(recursive, non-recursive)
- [x] find(recursive, non-recursive)
- [ ] delete
