# Google 軟體工程師面試 — DSA 重點卡與練習

12 個核心主題，每個主題都有 **Python + C++ 模板、零依賴測試、說明文件（notes.md）與練習題目（problems.md）**。
目標：能在 20 分鐘內用最佳解、幾乎不靠提示、無 bug 解出一題 medium。

## 如何使用

```bash
make test        # 編譯並跑完所有主題的 C++ 與 Python 測試
make test-cpp    # 只跑 C++
make test-py     # 只跑 Python（用 uv）
make clean       # 清除 C++ 編譯產物
```

每個主題資料夾裡：

| 檔案 | 用途 |
|------|------|
| `xxx.py` | Python 模板函式（可 import） |
| `test_xxx.py` | 零依賴 assert 測試，`uv run python test_xxx.py` 可直接跑 |
| `xxx.cpp` | C++ 單檔：模板函式 + `main()` 內嵌 assert 測試 |
| `notes.md` | 說明：何時用／訊號／模板逐行解說／複雜度／易錯點 |
| `problems.md` | 代表題 + 分梯練習清單 + 20 分限時提示 |

**建議讀法**：每主題先看 `notes.md`「什麼時候用」→ 背模板（練到能默寫）→ 照 `problems.md` 限時練代表題。

## 12 主題索引

| # | 主題 | 代表函式 | 訊號關鍵字 |
|---|------|----------|-----------|
| 01 | [Two Pointers 雙指標](01_two_pointers/notes.md) | `two_sum_sorted` | sorted、pair、回文 |
| 02 | [Sliding Window 滑動視窗](02_sliding_window/notes.md) | `longest_unique_substring` | substring、"longest/at most K" |
| 03 | [Hash Table 雜湊表](03_hash_table/notes.md) | `two_sum` | 找一對、出現次數、是否存在 |
| 04 | [Binary Search 二分搜尋](04_binary_search/notes.md) | `binary_search` | sorted、"min/max such that" |
| 05 | [Stack 堆疊](05_stack/notes.md) | `is_valid_parentheses` | parentheses、nested、next greater |
| 06 | [Linked List 鏈結串列](06_linked_list/notes.md) | `reverse_list` | 反轉、找中點、偵測環 |
| 07 | [Tree Traversal 樹遍歷](07_tree_traversal/notes.md) | `inorder` / `level_order` | 二元樹、DFS/BFS |
| 08 | [Graph BFS/DFS 圖](08_graph_bfs_dfs/notes.md) | `num_islands` | grid、islands、connected |
| 09 | [Binary Heap 堆積](09_heap/notes.md) | `k_largest` | "top K"、第 K 大/小 |
| 10 | [Dynamic Programming 動規](10_dp/notes.md) | `climb_stairs` | count ways、min/max cost |
| 11 | [Union Find 並查集](11_union_find/notes.md) | `UnionFind` | groups、connected components |
| 12 | [String/Array + Sorting](12_string_array_sorting/notes.md) | `is_anagram` / `merge_intervals` | anagram、區間合併 |

## 面試當下的黃金流程（每題照走）

| 時間 | 做什麼 | 一定要說出口 |
|------|--------|-------------|
| ~2 分 | 釐清問題，問 3–4 個問題 | 「輸入範圍？負數/重複/空值？回傳什麼？」 |
| ~8–10 分 | 提解法 + 替代解 + 取捨 | 「暴力 O(n²)，用 hash 換成 O(n)，代價 O(n) 空間」 |
| ~5 分 | 寫完整可運行程式碼（含邊界） | 邊寫邊講 |
| ~5 分 | Dry run 測資、抓 bug | 拿小例子逐行帶過變數變化 |

**心法**：Talk and Code（想什麼就講）、先求可行再求最佳、盡量獨立推導、主動測試抓 bug。

## 複雜度速查

| 操作 | 平均時間 |
|------|---------|
| Array 存取 index | O(1) |
| Hash table 查/插/刪 | O(1) |
| 平衡 BST / sorted 操作 | O(log n) |
| Heap push/pop | O(log n)，取頂 O(1) |
| 排序 | O(n log n) |
| BFS/DFS 走圖 | O(V + E) |

由快到慢：`O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!)`。
口訣：看到「排序」想 O(n log n)；「巢狀雙迴圈」想 O(n²)，設法用 hash/雙指標降到 O(n)。

## 六週節奏（初學者）

| 週 | 重點 | 每天目標 |
|----|------|---------|
| 1 | 主題 01–05（雙指標/視窗/hash/二分/stack）+ 複習複雜度 | 1 張重點卡 + 3 題 easy |
| 2 | 主題 06–08（linked list/樹/圖 BFS-DFS） | 2–3 題（1 easy + 1 medium） |
| 3 | 主題 09–10（heap/DP 入門，DP 先遞迴+memo） | 2 題 medium |
| 4 | 主題 11–12 + 回頭補弱項 | 3 題 medium，開始計時 |
| 5 | 模擬面試週：每題 20 分、Talk and Code、Google Doc 手寫 | 每天 1–2 場完整模擬 |
| 6 | 錯題重做 + 行為面試 + 放鬆 | 複習重點卡，別碰新難題 |

**寧可少而精**：把每張重點卡的模板練到能默寫，比亂刷 200 題有用。

## 準備好了的判斷標準

- [ ] 12 張重點卡的模板都能默寫
- [ ] 看到題目 30 秒內判斷「屬於哪個主題」
- [ ] 邊寫邊講不卡住（Talk and Code）
- [ ] 每次都主動 dry run 抓 bug
- [ ] 能講清楚時間/空間複雜度與替代解的取捨
