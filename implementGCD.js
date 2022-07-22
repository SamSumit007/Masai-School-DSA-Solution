function gcd(a, b) {
    if (a == 0)
        return b;
    return gcd(b % a, a);
}

function runProgram(input) {
    var newInput = input.split("\n");
    var t = Number(newInput[0]);
    for (var i = 1; i <= t; i++) {
        var ab = newInput[i].split(" ").map(Number);
        console.log(gcd(ab[0], ab[1]));

    }

}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
6 9
2 25`);
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