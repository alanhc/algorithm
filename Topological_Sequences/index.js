function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//// generate weight ////
function init_graph(n, max_num, threshold, range_to)
{
    //print("-==--==", check_direct.checked())
    //初始化array
    graph = new Array(n)
    for (let i=0; i<n; i++) {
        graph[i] = new Array(n).fill(0)
    }
    //填值
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) graph[i][j] = 0
            else {
                
                let num = getRandomInt(range_to)+1;
                
                if(check_direct.checked()) {
                    if (num <= threshold) graph[i][j] = 1//num
                } else {
                    if (num <= threshold &&i<j) {
                        graph[i][j] = 1//num
                        graph[j][i] = 1//num
                        
                    }
                }
            }
        }
    }
    //console.log("init:",graph)
    
}
let msg

let connect,count
function convert2list()
{
    print("convert2list")
    let n = int(inp_n.value())
    count = Array(n).fill(0)
    connect = Array(n).fill([])
    visited = Array(n).fill(0)

    print(graph)
    for (let from=0; from<n; from++) {
        for (let to=0; to<n; to++) {
            if (from===to)  continue 
            if (!check_direct.checked() && to<from) continue 
            if (graph[from][to]===1) {
                connect[from] = connect[from].concat(to)
                console.log(from,to)
                count[to]++
            }
        }
    }
    print(connect)
    print(count)
    
    print_adjacentList(0)
    //print("aaaaa")
    msg+="<br>"
    label_out.html(msg)
}

let visited

function order_sorting()
{
    let tos = ""
    let n = int(inp_n.value())
    
    let output_list = []
    
    for (let i=0; i<n; i++) {
        if (count[i]===0) output_list.push(i)
    }
    if (check_result.checked()) {
    //    console.log(output_list)
        print_adjacentList(0)
        print_outputList(tos, output_list)
    
    }
    print("out",output_list)
    let n_vertex=0
    while (output_list.length>0) {
        
        let last = output_list.shift()
        tos += String(last)+" "
        //print("last",last)
        //if (last===undefined) break
        
        visited[last] = 1
        n_vertex++
        //更新adjacentList
        //指到connect[last]的元素
        print("---", connect[last])
        let p = null
        while(connect[last].length>0) {
            p = connect[last].shift()
            print("p->", p)
            count[ p ] --
            //connect[last].shift()  //remove
            if (count[p]===0) output_list.push(p)
        }
        if (check_result.checked()) {
        //let length = output_list.length
            print_adjacentList(1)
            print_outputList(tos, output_list)
        }
        //msg+="<br>"
    }
    if (n_vertex===n) msg+="TOS ==> "+tos+" len:" + n_vertex
    else msg+="NO TOS ==>"+tos+" len:" + n_vertex
    label_out.html(msg)
}
function print_adjacentList(flag)
{
    let n = int(inp_n.value())
    for (let i=0;i<n; i++) {
        if (!visited[i] || connect[i]>0|| !flag) {
            msg+= "["+i+"] ["+count[i]+"] "
            for (let j=0; j<connect[i].length; j++) {
                msg+=" ==> "+connect[i][j]
            }
            msg+=" <br>"
        }
    }
    //label_out.html(msg)
}
function print_outputList(tos, output_list)
{
    msg += tos+" Output waiting list:[" +output_list.length+ "]"
    for (let i=0; i<output_list.length; i++) {
        msg+=output_list[i]+"==>"
    }
    msg+="<br>"
    //label_out.html(msg)
}