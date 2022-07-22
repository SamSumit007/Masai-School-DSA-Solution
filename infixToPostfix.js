function priority(c) {
    if (c === "^") return 3;
    else if (c === "/" || c === "*") return 2;
    else if (c === "+" || c === "-") return 1;
    else return -1;
}

function solve(str) {
    let result = "";
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        let c = str[i];
        if (c >= "a" && c <= "z") result += c;
        else if (c === "(") stack.push("(");
        else if (c === ")") {
            while (stack[stack.length - 1] !== "(") {
                result += stack[stack.length - 1];
                stack.pop();
            }
            stack.pop(); //to remove opening bracket in the stack
        }
        //else if there are operators in the string
        else {
            while (
                stack.length !== 0 &&
                priority(c) <= priority(stack[stack.length - 1])
            ) {
                result += stack[stack.length - 1];
                stack.pop();
            }
            stack.push(c);
        }
    }

    while (stack.length !== 0) {
        result += stack[stack.length - 1];
        stack.pop();
    }
    return result;
}

function runProgram(input) {
    console.log(solve(input));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`a+b-c+d*(e-f)/g+(h*(i/j))`);
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
