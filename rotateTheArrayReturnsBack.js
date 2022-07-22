function rotateArray(arr, k) {
    k = k % arr.length;
    if (k == 0)
        return arr.join(" ");
    var s1 = arr.slice(arr.length - k, arr.length);
    var s2 = arr.slice(0, arr.length - k);
    return s1.join(" ") + " " + s2.join(" ");
}

function runProgram(input) {
    var newInput = input.trim().split("\n");
    var t = Number(newInput[0]);
    for (var i = 1; i < t * 2; i += 2) {
        var nk = newInput[i].split(" ").map(Number);
        var k = nk[1];
        var arr = newInput[i + 1].split(" ").map(Number);
        console.log(rotateArray(arr, k));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`3
2 1
1 2
2 2
1 2
3 8
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