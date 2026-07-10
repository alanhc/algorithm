# Two Pointers — Two Sum (Sorted)

在**已排序**陣列中，用雙指針找兩數之和等於 `target`，回傳索引。

## 檔案關係圖

```
1_Array_String/
│
├── two_pointers.h            ← 核心邏輯（唯一真理來源）
│      └─ inline twoSumSorted()
│
├── two_pointers.cpp          ← demo 程式
│      └─ #include "two_pointers.h"
│         main() { 印出一個範例 }
│
├── test_two_pointers.cpp     ← 測試程式
│      └─ #include "two_pointers.h"
│         main() { check() 跑 7 個案例 }
│
└── Makefile                  ← 建置指令
```

## 為什麼要有 `.h`

```
        改版前                                改版後
   ┌──────────────────┐            ┌──────────────────────┐
   │ two_pointers.cpp │            │   two_pointers.h     │
   │  ┌────────────┐  │            │  twoSumSorted() ←────┼──唯一一份
   │  │twoSumSorted│  │            └──────────┬───────────┘
   │  └────────────┘  │                       │ #include
   │  main() demo     │            ┌──────────┴──────────┐
   └──────────────────┘            ▼                     ▼
                              two_pointers.cpp   test_two_pointers.cpp
   函式跟 main 綁死，          (demo)             (test)
   測試無法單獨呼叫它
```

改版前函式跟 `main()` 綁在同一個檔，測試沒辦法呼叫它。抽到 header 後，
**demo 和 test 共用同一份函式** —— 改邏輯只改一個地方，測試就會驗證那份真正在跑的程式碼。

## 建置流程

```
  make run                              make test
      │                                     │
      ▼                                     ▼
  two_pointers.cpp  ─┐              test_two_pointers.cpp ─┐
  two_pointers.h    ─┤              two_pointers.h        ─┤
                     │ g++                                 │ g++
                     ▼                                     ▼
              ./two_pointers                      ./test_two_pointers
              印出範例結果                           跑 7 個 assert
                                                   全過 → "All 7 tests passed"
                                                   有錯 → 程式 abort
```

## 測試怎麼判定對錯

```
check({2,7,11,15}, 9, {0,1})
        │              │
        ▼              ▼
   實際跑函式        期望答案
   got = twoSumSorted(...)
        │
        ▼
   assert(got == expected)   ← 不相等就直接 abort，印出哪一行掛掉
```

## 指令

| 指令 | 作用 |
|------|------|
| `make` / `make all` | 編譯出 `two_pointers` |
| `make run` | 編譯並執行 demo |
| `make test` | 編譯並跑測試 |
| `make start` | clean 後完整跑一次 |
| `make clean` | 刪除 `.o` 與執行檔 |

## 演算法重點

- **前提**：陣列必須先排序（所以叫 `twoSumSorted`）。
- 左指針從頭、右指針從尾，往中間收斂：
  - `sum < target` → 左指針右移（讓和變大）
  - `sum > target` → 右指針左移（讓和變小）
  - `sum == target` → 找到，回傳兩個索引
- 時間複雜度 `O(n)`、空間 `O(1)`。
- 若陣列**未排序**，需改用 hash map（或先排序但要保留原始索引）。
