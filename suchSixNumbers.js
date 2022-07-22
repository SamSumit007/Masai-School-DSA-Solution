function totalSolutions(arr) {
    var f;
    var count = 0;
    for (var a = 0; a < arr.length; a++) {
        for (var b = 0; b < arr.length; b++) {
            for (var c = 0; c < arr.length; c++) {
                var abc = arr[a] * arr[b] + arr[c];
                for (var d = 0; d < arr.length; d++) {
                    if (arr[d] != 0 && abc % arr[d] == 0)
                        for (var e = 0; e < arr.length; e++) {
                            for (var f = 0; f < arr.length; f++) {
                                var temp = (abc / arr[d]) - arr[e];
                                if (arr[f] == temp) {
                                    count++;
                                }
                            }
                        }
                }
            }
        }
    }
    return count;
}

function runProgram(input) {
    var newInput = input.split("\n");
    var arr = newInput.slice(1).map(Number);
    console.log(totalSolutions(arr));


}
if (process.env.USERNAME === "getsu") {
    runProgram(`5
-5
-3
0
0
6`);
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