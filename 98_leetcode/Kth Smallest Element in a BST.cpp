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
    int kthSmallest(TreeNode* root, int k) {
        

        int n = 0;
        stack<TreeNode*> s;
        TreeNode* now = root;
        while (!s.empty() || now) {
            while (now) {
                s.push(now);
                now = now->left;
            }
            now = s.top();
            s.pop();
            n++;
            if (n==k) return now->val;
            now = now->right;
        }

      return -1;
    }
};