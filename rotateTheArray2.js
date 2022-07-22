function runProgram(input) {

    var newInput = input.split("\n");
    var t = Number(newInput[0]);

    for (var i = 1; i < t * 2; i += 2) {

        var newInput2 = newInput[i].split(" ").map(Number);
        var k = newInput2[1];
        var arr = newInput[i + 1].split(" ").map(Number);
        var n = arr.length;

        k = k % n; //removing extra rotations

        var result = "";
        for (var j = 0; j < n; j++)
            result += arr[(n - k + j) % n] + " ";

        console.log(result);
    }
}
/*
K = 3
N = 5

input:  7  1  4  2  8
index:  0  1  2  3  4

output: 4  2  8  7  1
index:  2  3  4  0  1

to get output index:  (N-K+index)%N
2 = (5-3+0)%5
3 = (5-3+1)%5
4 = (5-3+2)%5
0 = (5-3+3)%5
1 = (5-3+4)%5


 
*/

if (process.env.USERNAME === "getsu") {
    runProgram(`3
5 3
7 1 4 2 8
7 4
1 2 3 4 5 6 7
2 3
1 2`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}