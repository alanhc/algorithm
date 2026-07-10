# 3.6 Linked List（鏈結串列）

## 什麼時候用
- 反轉鏈結串列（reverse linked list）
- 原地調整節點指標（合併、刪除）
- 快慢指標找中點、偵測環
- 刪除倒數第 N 個節點

**訊號**：`linked list`、`reverse`、`cycle`、`快慢指標`。

## 模板逐行解說
```python
def reverse_list(head):
    prev = None
    curr = head
    while curr:
        nxt = curr.next    # 先存下一個（斷鏈前一定要存）
        curr.next = prev   # 反轉指向
        prev = curr        # 前進
        curr = nxt
    return prev            # 新的頭是 prev
```

核心觀念：**用三個指標 prev / curr / nxt，一步一步把箭頭掉頭**。每次迴圈把 `curr.next` 從「指向後面」改成「指向前面」，但改之前一定要先用 `nxt` 存住原本的下一個，否則後面整串就斷掉找不回來了。

## 複雜度
- 時間 **O(n)**：每個節點只走訪一次。
- 空間 **O(1)**：只用幾個指標，沒有額外結構。

## 易錯點
- **斷鏈前沒先存 next**：`curr.next = prev` 之後就再也走不到原本的下一個，一定要先 `nxt = curr.next`。
- **回傳 prev 不是 head**：反轉後原本的 head 變成尾巴，新的頭是 prev。
- 空串列 / 單一節點：模板天然處理（`while curr` 直接跳過或走一次）。

## 技巧
- **dummy head（虛擬頭節點）**：建構或會動到頭節點的操作（刪除、合併），先接一個假頭，最後回傳 `dummy.next`，省掉一堆頭節點的特例判斷。
- **快慢指標（fast / slow）**：slow 一次走一步、fast 一次走兩步——用來找中點、偵測環（Floyd）、找倒數第 N 個。

## 對應主題卡
- 兩端收斂的雙指標 → [[01_two_pointers]]
