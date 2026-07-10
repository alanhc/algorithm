"""union_find 測試（零依賴 assert，可直接 `uv run python test_union_find.py`）。"""

from union_find import UnionFind

tests_run = 0


def check(cond, msg):
    global tests_run
    tests_run += 1
    assert cond, msg


def main():
    # connected 基本：union(0,1), union(1,2) 後 0 與 2 相連、0 與 3 不相連
    uf = UnionFind(5)
    uf.union(0, 1)
    uf.union(1, 2)
    check(uf.connected(0, 2) is True, "0 與 2 應相連")
    check(uf.connected(0, 3) is False, "0 與 3 不應相連")

    # 偵測環：對已同組的 (0,1) 再 union 一次應回傳 False
    uf2 = UnionFind(5)
    check(uf2.union(0, 1) is True, "第一次 union(0,1) 應回傳 True")
    check(uf2.union(0, 1) is False, "第二次 union(0,1) 應回傳 False（已同組）")

    # 連通塊數量：起始 5，union(0,1)、(2,3) 後剩 3 組
    uf3 = UnionFind(5)
    uf3.union(0, 1)
    uf3.union(2, 3)
    check(uf3.count == 3, f"應為 3 組，實際 {uf3.count}")
    uf3.union(1, 3)                # 再把兩組接起來
    check(uf3.count == 2, f"應為 2 組，實際 {uf3.count}")

    print(f"All {tests_run} tests passed")


if __name__ == "__main__":
    main()
