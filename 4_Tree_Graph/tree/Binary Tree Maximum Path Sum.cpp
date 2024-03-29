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
    int max_sum = INT_MIN;
    int max_gain(TreeNode* root) {
        if (!root) return 0;
        int maxL = max(max_gain(root->left),0);
        int maxR = max(max_gain(root->right),0);
        int new_price=root->val+maxL+maxR;
        max_sum = max(max_sum, new_price);
        return root->val+max(maxL,maxR);
    }
    int maxPathSum(TreeNode* root) {
        max_gain(root);
        return max_sum;
        
    }
};