#include <iostream>
#include <vector>
#include "two_pointers.h"
using namespace std;

int main() {
    vector<int> nums = {2, 7, 11, 15};
    int target = 9;

    vector<int> ans = twoSumSorted(nums, target);
    cout << "indices: " << ans[0] << ", " << ans[1] << "\n";
    if (ans[0] != -1)
        cout << "values: " << nums[ans[0]] << " + " << nums[ans[1]]
             << " = " << target << "\n";
    else
        cout << "not found\n";

    return 0;
}
