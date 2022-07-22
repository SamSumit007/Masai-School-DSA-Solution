function stringCut(s) {
    var s1 = reverse(s.slice(0, Math.floor(s.length / 2)));
    if (s.length % 2 == 0)
        var s2 = reverse(s.slice(s.length / 2));
    else
        var s2 = s[Math.floor(s.length / 2)] + reverse(s.slice(Math.floor(s.length / 2) + 1));

    return s1 + s2;

}

function reverse(s) {
    var temp = "";
    for (var i = s.length - 1; i >= 0; i--)
        temp += s[i];
    return temp;
}

function runProgram(input) {
    var s = input;
    console.log(stringCut(s));

}
if (process.env.USERNAME === "getsu") {
    runProgram(`abcdxyz`);
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