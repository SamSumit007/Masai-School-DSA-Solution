var bag = "";
var n = arr.length
for (var i = n - 1; i >= 1; i--) {
    bag += arr[i][0] + " ";
}
var r = 0;
var c = 0;
while (r < n && c < n) {
    bag += arr[r][c] + " ";
    r++;
    c++;
}
for (var i = n - 2; i >= 0; i--) {
    bag += arr[i][n - 1] + " ";
}
console.log(bag);