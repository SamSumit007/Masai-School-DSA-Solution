function findIfBalanced(s) {
    let stack = [];
    let obj = {
        "}": "{",
        ")": "(",
        "]": "[",
    };
    for (let i = 0; i < s.length; i++) {
        let item = s[i];
        if (item == "(" || item == "[" || item == "{") stack.push(item);
        else {
            if (obj[item] == stack[stack.length - 1]) stack.pop();
            else return "not balanced";
        }
    }
    if (stack.length == 0) return "balanced";
    else return "not balanced";
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i <= t; i++) {
        let s = newInput[i].trim().split("");
        console.log(findIfBalanced(s));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`3
    {([])}
    ()
    ([]`);
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
