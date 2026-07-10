# 3.2 Sliding Window（滑動視窗）

## 什麼時候用
- 連續子字串／子陣列的最長長度（longest substring / subarray）
- 連續區間的最短長度（minimum window）
- 「至多 K 個」／「恰好 K 個」某條件的區間計數

**訊號**：`substring`、`subarray`、`longest / shortest / at most K`。

## 模板逐行解說
```python
def longest_unique_substring(s):
    seen = {}                        # 字元 -> 最後出現的 index
    left = 0
    best = 0
    for right, ch in enumerate(s):   # right 是視窗右界，一路往右擴
        if ch in seen and seen[ch] >= left:
            left = seen[ch] + 1      # 遇到「還在視窗內」的重複 → 左界跳到它的右邊
        seen[ch] = right            # 更新這個字元最後出現的位置
        best = max(best, right - left + 1)   # 目前視窗長度更新答案
    return best
```

核心觀念：**右界一路擴張，左界只往前、不回頭**。每個字元被 right 進入一次、被 left 離開一次，所以總移動量是 O(n)。用 `seen` 記錄「最後一次出現的位置」，遇到重複時直接把左界跳到重複字元的下一格，一步到位不用逐格縮。

## 複雜度
- 時間 **O(n)**：left 與 right 各單調前進，合計最多走 2n 步。
- 空間 **O(k)**：`seen` 最多存 k 個相異字元（k = 字元集大小）。

## 易錯點
- **`seen[ch] >= left` 這個判斷不能省**：舊的重複位置可能已經在視窗左界之外（過期），此時不該把 left 往回拉。經典陷阱是 `"abba"`——處理到第二個 `a` 時 `seen[a]=0` 已在 left 左邊，若無此判斷會把 left 錯誤拉回。
- 視窗長度是 `right - left + 1`（含兩端），別漏掉 `+1`。
- left 只增不減；不要寫成有機會變小的邏輯。
- 「最長」用擴張後直接更新答案；「最短 / 至多 K」則常改成 `while` 縮左界的寫法，模板略有不同。

## 對應主題卡
- 前一張雙指標基礎 → [[01_two_pointers]]
- 需要計數字元頻率的變形 → [[03_hash_table]]
