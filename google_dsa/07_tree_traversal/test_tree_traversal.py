"""tree_traversal 測試（零依賴 assert，可直接 `uv run python test_tree_traversal.py`）。"""

from tree_traversal import TreeNode, inorder_traversal, level_order

tests_run = 0


def build_tree(vals):
    """從『層序』list 建樹，None 代表缺少的節點。回傳 root。"""
    if not vals or vals[0] is None:
        return None
    root = TreeNode(vals[0])
    q = [root]
    i, head = 1, 0
    while head < len(q) and i < len(vals):
        node = q[head]
        head += 1
        if i < len(vals):
            if vals[i] is not None:
                node.left = TreeNode(vals[i])
                q.append(node.left)
            i += 1
        if i < len(vals):
            if vals[i] is not None:
                node.right = TreeNode(vals[i])
                q.append(node.right)
            i += 1
    return root


def check_inorder(vals, expected):
    global tests_run
    tests_run += 1
    got = inorder_traversal(build_tree(vals))
    assert got == expected, f"inorder_traversal({vals}) = {got}, 期望 {expected}"


def check_level(vals, expected):
    global tests_run
    tests_run += 1
    got = level_order(build_tree(vals))
    assert got == expected, f"level_order({vals}) = {got}, 期望 {expected}"


def main():
    # [1,null,2,3]：root 1，右子 2，2 的左子 3
    check_inorder([1, None, 2, 3], [1, 3, 2])          # 中序：左->根->右
    check_level([1, None, 2, 3], [[1], [2], [3]])      # 層序：每層一個 list

    check_inorder([1], [1])                             # 單一節點
    check_level([1], [[1]])

    check_inorder([], [])                              # 空樹
    check_level([], [])

    check_inorder([2, 1, 3], [1, 2, 3])                # BST 中序 = 排序
    check_level([2, 1, 3], [[2], [1, 3]])

    print(f"All {tests_run} tests passed")


if __name__ == "__main__":
    main()
