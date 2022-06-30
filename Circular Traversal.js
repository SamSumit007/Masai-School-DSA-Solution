
var bag = "";
for (var i = N - 1; i > 0; i--) {

    bag = bag + matrix[i][0] + " ";
}
for (var j = 0; j < N - 1; j++) {
    bag = bag + matrix[0][j] + " ";
}
for (var k = 0; k < N; k++) {
    bag = bag + matrix[k][N - 1] + " ";
}
for (var l = N - 2; l > 0; l--) {
    bag = bag + matrix[N - 1][l] + " ";
}
console.log(bag);