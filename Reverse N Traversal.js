//You are given a matrix of size n x n.

var bag = "";
for (var i = 0; i < N - 1; i++) {
    bag += arr[i][0] + " ";
}
var r = N - 1;
var c = 0;
while (r >= 0 && c < N) {
    bag += arr[r][c] + " ";
    r--;
    c++;
}
for (var i = 1; i < N; i++) {
    bag += arr[i][N - 1] + " ";
}
console.log(bag);