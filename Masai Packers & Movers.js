//You have to transport K units of weight, since each truck will take the weight exactly equal to its capacity, 
//find the number of ways, in which you can transport K units of weight.

function runProgram(input) {
    var input = input.split("\n");
    var in1 = input[0].split(" ").map(Number);
    var K = in1[0];
    var N = in1[1];
    var arr = input[1].split(" ").map(Number);
    solve(K, N, arr);

}
function solve(K, N, arr) {


    function way7(k) {
        if (k == 0) {
            return 1;
        }
        else if (k < 0) {
            return 0;
        }
        else {
            var t = 0;
            for (var i = 0; i < N; i++) {
                t += way7(k - arr[i]);
            }
            return t;
        }
    }
    console.log(way7(K));

}



if (process.env.USER === "") {
    runProgram(``);
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