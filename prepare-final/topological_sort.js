//input: AOV network G=(V,E)
//output: G的 topoligical sequence

let count = Array(n).fill(0)
let connect = Array(n).fill([])
let visited = Array(n).fill(0)

for (let from=0; from<n; from++) {
    for (let to=0; to<n; to++) {
        connect[from] = connect[from].connect(to)
        count[to]++
    }
}

let output_list = []
for (let i=0; i<n; i++) {
    if(count[i]===0) output_list.push(i)
}

let tos=[]
while (output_list.length>0) {
    let last = output_list.shift()
    tos.push(last)
    visited[last] = 1
    
    while(connect[last].length>0) {
        let p = connect[last].shift()
        count[p]--
        if (count[p]===0) output_list.push(p)
    }
}
if(tos.length===n) print(tos)
else print("NO TOS")