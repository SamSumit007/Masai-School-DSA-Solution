function isArrayZeroPossible(arr) {
    if (arr.length == 1 && arr[0] == 0)
        return true;
    else if (arr.length == 1)
        return false;

    for (var i = 0; i < arr.length - 1; i++) {
        var min = Math.min(arr[i], arr[i + 1]);
        arr[i] -= min;
        arr[i + 1] -= min;
        if (arr[i] != 0)
            return false
    }
    if (arr[arr.length - 1] != 0)
        return false;

    return true;

}

function runProgram(input) {
    var newInput = input.split("\n");
    var arr = newInput[1].split(" ").map(Number);

    if (isArrayZeroPossible(arr))
        console.log("YES");
    else
        console.log("NO");



}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
1 2 3 4 5 6`);
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