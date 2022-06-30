//You are given a 3D Array, of N layers, M rows, and K columns. 
//You have to take the input, and print the 3D Array in the form as mentioned in the sample test case.

for (var i = 0; i < N; i++) {
    for (var j = 0; j < M; j++) {
        var bag = "";
        for (var k = 0; k < K; k++) {
            bag += array[i][j][k] + " ";
        }
        console.log(bag);
    }
}