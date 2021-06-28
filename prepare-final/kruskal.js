//input:  G=(V,E)
//output: mst tree
mst = []
let i=0
while (mst.length<n-1 && E_matrix.length!==0) {
    let _min = edges_matrix[ sorted_EM[i++] ]
    delete _min from E_matrix
    if (add _min into mst not create Cycle) mst.push(_min)
}
if (mst.length<(n-1)) print("無延展樹")
else print(mst)

//迴圈檢查-mask
for (let i=0; i<n; i++) {
    mask[i] = i
}

start = _min[0]
end = _min[1]
if (mask[start]!==mask[end]) {
    mst.push(_min)
    let small = (mask[start]<mask[end])? mask[start]:mask[end]
    let large = (mask[start]<mask[end])? mask[end]:mask[start]
    for (let j=0; j<n; j++) if(mask[j]===large) mask[j]=small
}
//迴圈檢查-union-find
// 指標結構
function find(x)
{
    if (x.father===x) return x
    else x.father = find(x.father)
    return x.father
}
function union(x, y)
{
    let x_root = find(x)
    let y_root = find(y)
    x_root.father = y_root
}
// 陣列結構
function find(x)
{
    if (father[x]==x) return x
    father[x] = find(father[x])
    return father[x]
}
function union(x,y)
{
    father[ find(y) ] = find(x)
}
for (let i=0; i<n; i++) {
    father[i]=i
}

start = _min[0]
end = _min[1]
let x_root = find(start)
let y_root = find(end)
if (x_root!==y_root) {
    mst.push(_min)
    union(x_root, y_root)
} 