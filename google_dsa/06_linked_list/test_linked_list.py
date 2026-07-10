"""linked_list 測試（零依賴 assert，可直接 `uv run python test_linked_list.py`）。"""

from linked_list import ListNode, reverse_list

tests_run = 0


def build_list(vals):
    """由 Python list 建出鏈結串列，回傳頭。"""
    dummy = ListNode()          # dummy head 簡化建構
    tail = dummy
    for v in vals:
        tail.next = ListNode(v)
        tail = tail.next
    return dummy.next


def to_array(head):
    """把鏈結串列走訪成 Python list。"""
    out = []
    while head:
        out.append(head.val)
        head = head.next
    return out


def check(vals, expected):
    global tests_run
    tests_run += 1
    head = build_list(vals)
    got = to_array(reverse_list(head))
    assert got == expected, f"reverse_list({vals}) = {got}, 期望 {expected}"


def main():
    check([1, 2, 3, 4, 5], [5, 4, 3, 2, 1])  # 基本反轉
    check([1, 2], [2, 1])                     # 兩個節點
    check([1], [1])                           # 單一節點
    check([], [])                             # 空串列
    print(f"All {tests_run} tests passed")


if __name__ == "__main__":
    main()
