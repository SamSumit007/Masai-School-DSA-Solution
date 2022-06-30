//Given a square matrix of size N x N. Print the Z traversal of the matrix.

var bag = "";
for (var i = 0; i < N - 1; i++) {
    bag += arr[0][i] + " ";
}
var r = 0;
var c = N - 1;
while (r < N && c >= 0) {
    bag += arr[r][c] + " ";
    r++;
    c--;
}
for (var i = 1; i < N; i++) {
    bag += arr[N - 1][i] + " ";
}
console.log(bag);