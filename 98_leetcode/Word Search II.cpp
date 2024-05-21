struct TrieNode {
public:
    TrieNode() : children(), end(false) {}
    unordered_map<char, TrieNode*> children;
    bool end;
};

class Trie {
public:
    Trie() : root(new TrieNode()) {}
    TrieNode* getRoot() { return root; }
    void addWord(const string& word) {
        TrieNode* node = root;
        for (char c : word) {
            if (node->children.find(c) == node->children.end()) {
                node->children[c] = new TrieNode();
            }
            node = node->children[c];
        }
        node->end = true;
    }

private:
    TrieNode* root;
};

class Solution {
    int rows, columns;

public:
    vector<string> findWords(vector<vector<char>>& board, vector<string>& words) {
        Trie* trie = new Trie();
        for (string s : words) {
            trie->addWord(s);
        }
        rows = board.size(), columns = board[0].size();
        set<string> ans_set;
        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < columns; c++) {
                dfs(r, c, trie->getRoot(), board, "", ans_set);
            }
        }
        vector<string> ans;
        for (auto it : ans_set)
            ans.push_back(it);
        return ans;
    }

    void dfs(int r, int c, TrieNode* node, vector<vector<char>>& board, string word, set<string>& result) {
        if (r < 0 || c < 0 || r == rows || c == columns || board[r][c] == ' ' || node->children.find(board[r][c]) == node->children.end()) {
            return;
        }

        node = node->children[board[r][c]];
        word += board[r][c];

        if (node->end) {
            result.insert(word);
            node->end = false;  // Avoid duplicate results for the same word
        }

        char ch = board[r][c];
        board[r][c] = ' ';

        dfs(r, c + 1, node, board, word, result);
        dfs(r, c - 1, node, board, word, result);
        dfs(r + 1, c, node, board, word, result);
        dfs(r - 1, c, node, board, word, result);

        board[r][c] = ch;
    }
};