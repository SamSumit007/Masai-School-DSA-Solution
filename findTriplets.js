function findCount(arr, m) {
    var count = 0;
    for (var i = 0; i < arr.length - 2; i++) {
        for (var j = i + 1; j < arr.length - 1; j++) {
            for (var k = j + 1; k < arr.length; k++) {
                if (arr[i] - arr[j] + arr[k] == m)
                    count++;
            }
        }
    }
    return count;
}

function runProgram(input) {
    var newInput = input.split("\n");
    var t = Number(newInput[0]);
    for (var i = 1; i <= t * 2; i += 2) {
        var nm = newInput[i].split(" ").map(Number);
        var m = nm[1];
        var arr = newInput[i + 1].split(" ").map(Number);
        console.log(findCount(arr, m));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
3 0
1 3 2
5 4
3 2 3 1 5`);
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