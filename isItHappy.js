function sumOfSquareOfDigits(n) {
    var sum = 0;
    while (n != 0) {
        sum += (n % 10) ** 2;
        n = Math.floor(n / 10);
    }
    return sum;
}

function isItHappy(n) {
    var set = new Set();
    var sum = 0;
    while (n != 1) {
        var sum = sumOfSquareOfDigits(n);
        n = sum;
        if (set.has(n))
            return false;
        set.add(n);
    }
    return true;
}

function runProgram(input) {
    var newInput = input.split("\n");
    var t = Number(newInput[0]);
    for (var i = 1; i <= t; i++) {
        var n = Number(newInput[i]);
        console.log(isItHappy(n));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`3
19
2
312082396`);
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