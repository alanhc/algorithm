
compile: `g++ file.cpp`
execute: `./a.out`


# Hello world
```c++
#include <iostream>
using namespace std;

int main() {
    cout << "hello";
    return 0;
}
```
## array
int dp[m+1][n+1];
memset( dp, 0, (m+1)*(n+1)*sizeof(int) );
## set
set<int> result;
result.insert(1)
## heap
## priority queue
priority_queue<int> pq
pq.push()
pq.pop() //return max, O(1)


## vector
vector<int> array(n);
array.push_back(1)
array.erase(array.begin()) 
arary.front() // array[0]'s ref
array.top()  array[0]
## string
stoi("123") => 123
"string".substr(1,3) => tr
## map
#include<unordered_map>
unordered_map<int, int> h;
h.first, h.second = key, value
h[y] = i;
find: h.count(x) -> bool / f.find(x)!=end
## check
isalnum: check if alpha or num
tolower
## ref
- https://github.com/jsjtzyy/LeetCode/blob/master/C%2B%2B%20cheat%20sheet%20for%20interview
- 