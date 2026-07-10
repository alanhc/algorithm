"""Linked List（鏈結串列）模板：反轉鏈結串列。

什麼時候用：反轉鏈結串列、原地調整指標、快慢指標找中點／偵測環。
訊號：linked list、reverse、cycle、快慢指標。
"""


class ListNode:
    def __init__(self, val=0, nxt=None):
        self.val = val
        self.next = nxt


def reverse_list(head):
    """反轉單向鏈結串列，回傳新的頭。

    時間 O(n)、空間 O(1)。
    """
    prev = None
    curr = head
    while curr:
        nxt = curr.next    # 先存下一個（斷鏈前一定要存）
        curr.next = prev   # 反轉指向
        prev = curr        # 前進
        curr = nxt
    return prev            # 新的頭是 prev，不是 head
