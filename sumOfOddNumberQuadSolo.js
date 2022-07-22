function findQuadSolo(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1)
            sum += arr[i];
    }

    if (sum % 4 == 0)
        console.log("It is Quad");
    else
        console.log("It is Solo");
}

function runProgram(input) {
    var newInput = input.split("\n");
    var t = Number(newInput[0]);
    for (var i = 1; i <= t * 2; i += 2) {
        var arr = newInput[i + 1].split(" ").map(Number);
        findQuadSolo(arr);
    }

}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
3
1 2 3
5
2 2 2 2 1`);
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