function solve(str) {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        let ele = str[i];
        let flag = false;
        while (stack.length !== 0) {
            if (ele === stack[stack.length - 1]) {
                flag = true;
                stack.pop();
            } else break;
        }
        if (!flag) stack.push(ele);
    }
    if (stack.length === 0) return -1;
    return stack.join("");
}

function runProgram(input) {
    let newInput = input.split("\n");
    let str = newInput[1].trim();
    console.log(solve(str));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`5
    aabbc`);
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
