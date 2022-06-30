//In this question, you are given a 2D array stored in a variable with the namearr
//The number of rows in the matrix is stored in the variable with the nameN, 
//while the number of columns stored in the matrix is stored in a variable with the nameM
//You have to find and print the count of prime numbers present in the matrix

var count = 0;
for (var i = 0; i < N; i++) {
    for (var j = 0; j < M; j++) {
        var a = +(arr[i][j]);
        var flag = 0;
        for (var k = 1; k <= a; k++) {
            if (a % k == 0) {
                flag++;
            }
        }
        if (flag == 2) {
            count++;
        }
    }
}
console.log(count);