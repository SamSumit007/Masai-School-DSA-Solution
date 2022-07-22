function countOdds(ele) {
    var count = 0;
    for (var i = 0; i < ele.length; i++)
        if (ele[i] % 2 == 1)
            count++;
    return count;
}

function runProgram(input) {
    var input = input.split("\n");
    var t = Number(input[0]);
    for (var i = 1; i <= t * 2; i += 2) {
        var arr = input[i + 1].split(" ").map(Number);
        if (countOdds(arr) % 2 == 1)
            console.log("Yes");
        else
            console.log("No");

    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`3
1
1
2
1 101
2
1 200`);
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