function decrypt(s) {
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i] == '#')
            stack.pop();
        else
            stack.push(s[i]);
    }
    return stack.join("");
}

function runProgram(input) {


    var newInput = input.trim().split("\n");
    var t = Number(newInput[0]);
    for (var i = 1; i <= t; i++) {
        var s = newInput[i];
        console.log(decrypt(s));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
ab#d
a#bc`);
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