/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Codec {
public:

    // Encodes a tree to a single string.
    string serialize(TreeNode* root) {
        stringstream ss;
        serializeHelper(root, ss);
        return ss.str();
    }

    // Decodes your encoded data to tree.
    TreeNode* deserialize(string data) {
        istringstream ss(data);
        return deserializeHelper(ss);
    }

private:
    void serializeHelper(TreeNode* root, stringstream& ss) { 
        if (!root) {
            ss<<"# ";
            return;
        }
        ss << root->val << " ";
        serializeHelper(root->left, ss);
        serializeHelper(root->right, ss);
    }
  TreeNode* deserializeHelper(istringstream& ss) {
      string val;
      ss>>val;
      if (val=="#") {
          return nullptr;
      } 
      TreeNode* node = new TreeNode(stoi(val));
      node->left = deserializeHelper(ss);
      node->right = deserializeHelper(ss);
      return node;
  }
};
// Your Codec object will be instantiated and called as such:
// Codec ser, deser;
// TreeNode* ans = deser.deserialize(ser.serialize(root));