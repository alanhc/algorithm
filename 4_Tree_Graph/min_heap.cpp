#include <iostream>
#include <vector>
using namespace std;
vector<int> heap;
void heapifyUp(int index)
{
    int parent = (index-1)/2;
    while (index>0 && heap[index]<heap[parent]) {
        swap(heap[index], heap[parent]);
        index = parent;
        parent = (index-1)/2;
    }
}
void heapifyDown(int index)
{
    int left = 2*index+1;
    int right = 2*index+2;
    int largest = index;
    if (left<heap.size() && heap[left]>heap[largest]) largest = left;
    if (right<heap.size() && heap[right]>heap[largest]) largest = right;

    if (largest!=index) {
        swap(heap[index], heap[largest]);
        heapifyDown(largest);
    }
}
void insert(int data)
{
    heap.push_back(data);
    heapifyUp(heap.size()-1);
}

int extractMin()
{
    if (heap.empty()) cout << "heap is empty" << endl;
    int min = heap[0];
    heap[0] = heap.back();
    heap.pop_back();
    heapifyDown(0);
    return min;

}
void print()
{
    for (int data : heap) {
        cout << data << " ";
    }
    cout << endl;
}
int main()
{
    insert(10);
    insert(5);
    insert(17);
    insert(8);
    insert(12);
    print();
    int min = extractMin();
    cout << min << endl;
    print();
}