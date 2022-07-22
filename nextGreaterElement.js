let ans = [];

function solve(arr) {
    let stack = [];
    let result = "";

    for (let i = arr.length - 1; i >= 0; i--) {
        let ele = arr[i];
        while (stack.length !== 0 && ele >= stack[stack.length - 1])
            stack.pop();

        if (stack.length === 0) result = "-1 " + result;
        else result = stack[stack.length - 1] + " " + result;

        stack.push(ele);
    }
    return result;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        ans.push(solve(arr));
    }
    console.log(ans.join("\n"));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`1
    6
    1 3 2 4`);
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
