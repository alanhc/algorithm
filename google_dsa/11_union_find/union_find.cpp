// Union Find（並查集）模板 + 內嵌測試（單檔精簡版）。
//
// 什麼時候用：判斷元素是否在同一組、計算連通塊數量、偵測無向圖的環。
// 訊號：groups、connected components、"are they in the same set"。
//
// 編譯執行：g++ -std=c++17 -Wall -Wextra union_find.cpp -o union_find && ./union_find
#include <cassert>
#include <iostream>
#include <numeric>
#include <vector>
using namespace std;

// 並查集：路徑壓縮版本，另維護 count（連通塊數量）方便測試。
// 用 unite 而非 union（union 是 C++ 保留字）。
struct UnionFind {
    vector<int> parent;
    int count;                          // 連通塊數量

    UnionFind(int n) : parent(n), count(n) {
        iota(parent.begin(), parent.end(), 0);  // parent[i] = i
    }

    // 回傳 x 所屬集合的代表（根），順便做路徑壓縮。
    int find(int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];  // 路徑壓縮
            x = parent[x];
        }
        return x;
    }

    // 合併 a、b。已同組回傳 false（可用來偵測環），否則合併後回傳 true。
    bool unite(int a, int b) {
        int ra = find(a), rb = find(b);
        if (ra == rb) return false;     // 本來就同一組（可用來偵測環）
        parent[ra] = rb;
        --count;                        // 兩組合成一組，連通塊少一個
        return true;
    }

    // a、b 是否在同一組。
    bool connected(int a, int b) { return find(a) == find(b); }
};

int tests_run = 0;

void check(bool cond) {
    ++tests_run;
    assert(cond);
}

int main() {
    // connected 基本：unite(0,1), unite(1,2) 後 0 與 2 相連、0 與 3 不相連
    UnionFind uf(5);
    uf.unite(0, 1);
    uf.unite(1, 2);
    check(uf.connected(0, 2) == true);   // 0 與 2 應相連
    check(uf.connected(0, 3) == false);  // 0 與 3 不應相連

    // 偵測環：對已同組的 (0,1) 再 unite 一次應回傳 false
    UnionFind uf2(5);
    check(uf2.unite(0, 1) == true);      // 第一次 unite(0,1) 應回傳 true
    check(uf2.unite(0, 1) == false);     // 第二次應回傳 false（已同組）

    // 連通塊數量：起始 5，unite(0,1)、(2,3) 後剩 3 組
    UnionFind uf3(5);
    uf3.unite(0, 1);
    uf3.unite(2, 3);
    check(uf3.count == 3);               // 應為 3 組
    uf3.unite(1, 3);                     // 再把兩組接起來
    check(uf3.count == 2);               // 應為 2 組

    cout << "All " << tests_run << " tests passed\n";
    return 0;
}
