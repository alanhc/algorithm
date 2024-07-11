class Solution {
public:
    set<pair<int, int>> path;

    bool exist(vector<vector<char>>& board, string word) {
        int rows = board.size(), cols = board[0].size();
        int n = word.length();

        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                if (dfs(r, c, 0, word, board)) {
                    return true;
                }
            }
        }

        return false;
    }

    bool dfs(int r, int c, int i, string word, vector<vector<char>>& board) {
        int rows = board.size(), cols = board[0].size();

        if (i == word.length()) {
            return true;
        }

        if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] != word[i] || path.count({r, c}) > 0) {
            return false;
        }

        path.insert({r, c});

        bool res = dfs(r + 1, c, i + 1, word, board) ||
               dfs(r - 1, c, i + 1, word, board) ||
               dfs(r, c + 1, i + 1, word, board) ||
               dfs(r, c - 1, i + 1, word, board);

        path.erase({r, c});

        return res;
    }
};