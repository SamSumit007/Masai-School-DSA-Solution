function reduceString(s) {
    let stack = [];
    let top = -1;

    for (let i = 0; i < s.length; i++) {
        if (stack[stack.length - 1] == s[i])
            stack.pop();
        else
            stack.push(s[i]);
    }
    if (stack.length == 0)
        return "Empty String"
    else
        return stack.join("");
}

function runProgram(input) {
    var s = input;
    console.log(reduceString(s));

}
if (process.env.USERNAME === "getsu") {
    runProgram(`aaabccddd`);
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