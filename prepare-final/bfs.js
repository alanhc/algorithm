//BFS
let visited[n].fill(0)
let queue=[]
function BFS(root)
{
    visited[root] = 1
    queue.push(root)
    while (queue.length) {
        let start = queue.pop_front()
        print(start)
        for (與start相連的end) {
            if (visited[end]===0) {
                visited[end]=1
                queue.push(end)
            }
        }
    }
}

 