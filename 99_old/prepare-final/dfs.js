// 遞迴
let visited[n].fill(0)
function DFS(start)
{
	visited[start] = 1
	print(start)
	for (所有與start相鄰的頂點end) {
		if (visited[end]!==1) {
			DFS(end)
		}
	}
}

//非遞迴
let visited[n].fill(0)
let stack = []
function DFS(root)
{
	stack.push(root)
	visited[root]=1
	while (stack.length) {
		start = pop()
		print(start)
		for (所有與start相鄰的頂點end) {
			if (visited[end]!==1) {
				stack.push(end)
				visited[end] =1
			}
		}
	}
}

//連通子圖
let visited[n].fill(0)
for (let i=0; i<n; i++) {
	if (visited[i]===0) {
		print("新的連通子圖")
		DFS(i)
	}
}