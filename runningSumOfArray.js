function runningSum(arr) {
    var result = "";
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        result += sum + " ";
    }
    return result;
}

function runProgram(input) {
    var newInput = input.trim().split("\n");
    var t = Number(newInput[0]);
    for (var i = 1; i < t * 2; i += 2) {
        var arr = newInput[i + 1].split(" ").map(Number);
        console.log(runningSum(arr));
    }

}
if (process.env.USERNAME === "getsu") {
    runProgram(`1
5
1 2 3 4 5`);
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