class Solution {
public:
    void rotate(vector<vector<int>>& matrix) {
        int n = matrix.size();
        int L = 0, R = n - 1;

        while (L < R) {
            for (int i = 0; i < R - L ; i++) {
                int T = L, B = R;
                int TL = matrix[T][L + i];

                matrix[T][L + i] = matrix[B - i][L];
                matrix[B - i][L] = matrix[B][R - i];
                matrix[B][R - i] = matrix[T + i][R];
                matrix[T + i][R] = TL;
            }

            R--;
            L++;
        }
    }
};