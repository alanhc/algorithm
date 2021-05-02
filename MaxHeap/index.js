//const {performance} = require("perf_hooks")
//var Chart = require('chart.js');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

class MaxHeap {
  constructor(maxSize) {
    this.heap = Array(maxSize).fill(0, 0, maxSize);
    this.n = 0; // 有n筆資料
    this.maxSize = maxSize;
    this.exeTime = 0;
  }
  insert(x) {
    if (this.n === this.maxSize) return -1;
    // heap 滿了
    else {
      this.n++;
      let i = this.n;
      //比父親大 互換
      while (i > 1 && x > this.heap[Math.floor(i / 2)]) {
        this.heap[i] = this.heap[Math.floor(i / 2)];
        i = Math.floor(i / 2);
      }
      this.heap[i] = x;
    }
  }
  deleteMax() {
    if (this.n === 0) return -1;
    else {
      let x = this.heap[1];
      this.heap[1] = this.heap[this.n];
      this.n--;
      let i = 1;
      while (i <= Math.floor(this.n / 2)) {
        let max_idx = -1;
        if (this.heap[2 * i] > this.heap[2 * i + 1]) max_idx = 2 * i;
        else max_idx = 2 * i + 1;
        if (this.heap[i] > this.heap[max_idx]) break;
        let temp = 0;
        temp = this.heap[i];
        this.heap[i] = this.heap[max_idx];
        this.heap[max_idx] = temp;
        i = max_idx;
      }
      return x;
    }
  }
  sort() {
    let copy = this.heap.slice();
    let _n = this.n;
    let ans = [];
    //let start = new Date().getTime();
    for (let i = 0; i < this.heap.length - 1; i++) {
      let n = this.deleteMax();
      ans.push(n);
    }
    //let end = new Date().getTime();
    //this.exeTime = end - start;
    this.heap = copy.slice();
    this.n = _n;
    return ans;
  }
}




class selection_sort {
  constructor(arr) {
    this.arr = arr;
    this.exeTime = 0;
  }
  sort() {
    let start = performance.now();
    
    for (let i = 0; i < this.arr.length - 1; i++) {
      let _max_idx = i;
      for (let j = i + 1; j < this.arr.length; j++) {
        if (this.arr[j] > this.arr[_max_idx]) _max_idx = j;
      }
      if (_max_idx != i) {
        let temp = this.arr[i];
        this.arr[i] = this.arr[_max_idx];
        this.arr[_max_idx] = temp;
      }
    }
    let end = performance.now();
    this.exeTime = end - start;
    return this.arr;
  }
}




let data = 
[
    {
        label: "A",
        borderColor: "rgba(255, 0, 0, 0.5)",
        backgroundColor:  "rgba(255, 0, 0, 0.8)",
        data: [],
    },
    {
        label: "B",
        borderColor: "rgba(0, 0, 255, 0.5)",
        backgroundColor:  "rgba(0, 0, 255, 0.8)",
        data: [],
    },
]

///draw test
let button
let trys = []
function setup() {
    button = createButton('draw execution time');
    button.position(10,10);

    button.mousePressed(drawChart);  
}
function caculate_time()
{
    for (let i=0; i<data.length; i++) {
        data[i].data=[]
    }
    trys=[]
    let n = 10
    for (let i=0; i<n; i++) {
        let try_n =  i*1000
        let start, end
        trys.push(try_n)
        let max_length = try_n
        let input_data = []
        for (let i = 0; i < max_length; i++) {
            input_data.push(getRandomInt(max_length));
        }

        // heap sort
        data[0].label="heap sort"
        let hp = new MaxHeap(input_data.length);
        start =  Date.now();
        for (let i = 0; i < input_data.length; i++) {
            hp.insert(input_data[i]);
        }
        hp.sort()//console.log(hp.sort())
        end =  Date.now();
        hp.exeTime = (end - start);
        data[0].data.push(hp.exeTime)
        //selection sort
        data[1].label="selection sort"
        let ss = new selection_sort(input_data.slice());
        ss.sort()
        data[1].data.push(ss.exeTime)

     
    }
}
function drawChart()
{   
    caculate_time()
    window.open("chart.html?labels="+JSON.stringify(trys)+"&datasets="+JSON.stringify(data));
}






