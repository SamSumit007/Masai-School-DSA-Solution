function countOfGoingForward(arr, k) {
    var passingMarks = arr[k - 1];
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != 0 && arr[i] >= passingMarks)
            count++;
        else
            break;
    }
    return count;
}

function runProgram(input) {
    var newInput = input.split("\n");
    var nk = newInput[0].split(" ").map(Number);
    var k = nk[1];
    var arr = newInput[1].split(" ").map(Number);
    console.log(countOfGoingForward(arr, k));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`8 5
10 9 8 7 7 7 5 5`);
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