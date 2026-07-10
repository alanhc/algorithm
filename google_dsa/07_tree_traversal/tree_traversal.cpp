// Tree Traversal（樹的走訪）模板 + 內嵌測試（單檔精簡版）。
//
// 什麼時候用：走訪二元樹、依層處理節點、BST 取排序結果、找最短/最長路徑。
// 訊號：binary tree、level、depth、BST。
//
// 編譯執行：g++ -std=c++17 -Wall -Wextra tree_traversal.cpp -o tree_traversal && ./tree_traversal
#include <cassert>
#include <iostream>
#include <optional>
#include <queue>
#include <vector>
using namespace std;

// 二元樹節點。
struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int v) : val(v), left(nullptr), right(nullptr) {}
};

// DFS 中序：左 -> 根 -> 右（BST 會得到排序結果）。時間 O(n)、空間 O(h)。
void inorder(TreeNode* root, vector<int>& out) {
    if (!root) return;
    inorder(root->left, out);
    out.push_back(root->val);   // 根在左子樹之後、右子樹之前
    inorder(root->right, out);
}

// 中序走訪，回傳一個 vector（方便測試）。
vector<int> inorderTraversal(TreeNode* root) {
    vector<int> out;
    inorder(root, out);
    return out;
}

// BFS 層序：一次處理一整層，回傳每層一個 vector。時間 O(n)、空間 O(n)。
vector<vector<int>> levelOrder(TreeNode* root) {
    vector<vector<int>> result;
    if (!root) return result;
    queue<TreeNode*> q;
    q.push(root);
    while (!q.empty()) {
        vector<int> level;
        int n = (int)q.size();          // 固定這一層的節點數
        for (int i = 0; i < n; ++i) {
            TreeNode* node = q.front();
            q.pop();
            level.push_back(node->val);
            if (node->left)  q.push(node->left);
            if (node->right) q.push(node->right);
        }
        result.push_back(level);
    }
    return result;
}

// 從「層序」vector 建樹，nullopt 代表缺少的節點。回傳 root。
TreeNode* buildTree(const vector<optional<int>>& vals) {
    if (vals.empty() || !vals[0].has_value()) return nullptr;
    TreeNode* root = new TreeNode(*vals[0]);
    queue<TreeNode*> q;
    q.push(root);
    size_t i = 1;
    while (!q.empty() && i < vals.size()) {
        TreeNode* node = q.front();
        q.pop();
        if (i < vals.size()) {
            if (vals[i].has_value()) {
                node->left = new TreeNode(*vals[i]);
                q.push(node->left);
            }
            ++i;
        }
        if (i < vals.size()) {
            if (vals[i].has_value()) {
                node->right = new TreeNode(*vals[i]);
                q.push(node->right);
            }
            ++i;
        }
    }
    return root;
}

// 走訪後釋放整棵樹。
void freeTree(TreeNode* root) {
    if (!root) return;
    freeTree(root->left);
    freeTree(root->right);
    delete root;
}

int tests_run = 0;

void checkInorder(const vector<optional<int>>& vals, vector<int> expected) {
    ++tests_run;
    TreeNode* root = buildTree(vals);
    vector<int> got = inorderTraversal(root);
    assert(got == expected);
    freeTree(root);
}

void checkLevel(const vector<optional<int>>& vals, vector<vector<int>> expected) {
    ++tests_run;
    TreeNode* root = buildTree(vals);
    vector<vector<int>> got = levelOrder(root);
    assert(got == expected);
    freeTree(root);
}

int main() {
    optional<int> N = nullopt;

    // [1,null,2,3]：root 1，右子 2，2 的左子 3
    checkInorder({1, N, 2, 3}, {1, 3, 2});           // 中序：左->根->右
    checkLevel({1, N, 2, 3}, {{1}, {2}, {3}});        // 層序：每層一個 vector

    checkInorder({1}, {1});                           // 單一節點
    checkLevel({1}, {{1}});

    checkInorder({}, {});                             // 空樹
    checkLevel({}, {});

    checkInorder({2, 1, 3}, {1, 2, 3});               // BST 中序 = 排序
    checkLevel({2, 1, 3}, {{2}, {1, 3}});

    cout << "All " << tests_run << " tests passed\n";
    return 0;
}
