function findColumn(s) {
    var sum = 0;
    var power = s.length - 1;

    for (var i = 0; i < s.length; i++) {
        var num = s.charCodeAt(i) - 64;
        sum += num * (26 ** power);
        power--;
    }
    return sum;
}

function runProgram(input) {
    var newInput = input.trim().split("\n");
    var t = Number(newInput[0]);
    for (var i = 1; i <= t; i++) {
        var s = newInput[i];
        console.log(findColumn(s));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`3
A
AB
ZY`);
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