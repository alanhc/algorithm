/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
        return helper(0, 0, inorder.size() - 1, preorder, inorder);
    }

private:
    TreeNode* helper(int preStart, int inStart, int inEnd, vector<int>& preorder, vector<int>& inorder) {
        if (preStart > preorder.size() - 1 || inStart > inEnd) {
            return nullptr;
        }

        TreeNode* root = new TreeNode(preorder[preStart]);

        // Find the index of the root node in the inorder traversal
        int inIndex = 0;
        for (int i = inStart; i <= inEnd; i++) {
            if (inorder[i] == root->val) {
                inIndex = i;
                break;
            }
        }

        // Recursively build the left subtree
        int leftPreStart = preStart + 1;
        int leftInStart = inStart;
        int leftInEnd = inIndex - 1;
        TreeNode* leftChild = helper(leftPreStart, leftInStart, leftInEnd, preorder, inorder);
        root->left = leftChild;

        // Recursively build the right subtree
        int rightPreStart = preStart + inIndex - inStart + 1;
        int rightInStart = inIndex + 1;
        int rightInEnd = inEnd;
        TreeNode* rightChild = helper(rightPreStart, rightInStart, rightInEnd, preorder, inorder);
        root->right = rightChild;

        return root;
    }
};