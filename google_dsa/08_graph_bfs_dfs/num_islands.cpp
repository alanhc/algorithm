// Graph BFS/DFS（圖的走訪）／Flood Fill 模板 + 內嵌測試（單檔精簡版）。
//
// 什麼時候用：grid 上數連通塊、最短路徑、判斷連通、拓撲排序。
// 訊號：grid、islands、shortest path、connected。
// BFS vs DFS：最短路用 BFS；四方向向量 {(1,0),(-1,0),(0,1),(0,-1)}。
//
// 編譯執行：g++ -std=c++17 -Wall -Wextra num_islands.cpp -o num_islands && ./num_islands
#include <cassert>
#include <iostream>
#include <queue>
#include <vector>
using namespace std;

// 數 grid 中有幾座島（'1' 陸地、'0' 海水，四方向連通）。
// 時間 O(rows*cols) = O(V+E)、空間 O(rows*cols)。
int numIslands(vector<vector<char>>& grid) {
    if (grid.empty()) return 0;
    int rows = (int)grid.size(), cols = (int)grid[0].size();
    vector<vector<bool>> seen(rows, vector<bool>(cols, false));
    int count = 0;
    const int dx[4] = {1, -1, 0, 0};   // 四方向
    const int dy[4] = {0, 0, 1, -1};

    for (int r = 0; r < rows; ++r) {
        for (int c = 0; c < cols; ++c) {
            if (grid[r][c] != '1' || seen[r][c]) continue;
            ++count;                    // 找到新島的起點
            queue<pair<int, int>> q;    // BFS 把整座島標記為 seen
            q.push({r, c});
            seen[r][c] = true;
            while (!q.empty()) {
                auto [x, y] = q.front();
                q.pop();
                for (int d = 0; d < 4; ++d) {
                    int nx = x + dx[d], ny = y + dy[d];
                    if (nx >= 0 && nx < rows && ny >= 0 && ny < cols
                            && grid[nx][ny] == '1' && !seen[nx][ny]) {
                        seen[nx][ny] = true;
                        q.push({nx, ny});
                    }
                }
            }
        }
    }
    return count;
}

int tests_run = 0;

void check(vector<vector<char>> grid, int expected) {
    ++tests_run;
    int got = numIslands(grid);
    assert(got == expected);
}

int main() {
    check({{'1', '1', '0'}, {'1', '0', '0'}, {'0', '0', '1'}}, 2);  // 兩座島
    check({{'0', '0'}, {'0', '0'}}, 0);                             // 全海水
    check({{'1', '1'}, {'1', '1'}}, 1);                             // 全陸地連成一座
    check({{'1'}}, 1);                                              // 單一格陸地
    check({}, 0);                                                   // 空 grid
    check({{'1', '0'}, {'0', '1'}}, 2);                             // 斜角不相連 → 兩座

    cout << "All " << tests_run << " tests passed\n";
    return 0;
}
