function leftGreater(arr) {
    let stack = [];
    let ans = "";

    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i];

        while (stack.length !== 0 && ele >= arr[stack[stack.length - 1]])
            stack.pop();

        if (stack.length === 0) ans += -1 + " ";
        else ans += stack[stack.length - 1] + 1 + " ";

        stack.push(i);
    }

    return ans.trim().split(" ").map(Number);
}

function rightGreater(arr) {
    let stack = [];
    let ans = "";

    for (let i = arr.length - 1; i >= 0; i--) {
        let ele = arr[i];

        while (stack.length !== 0 && ele >= arr[stack[stack.length - 1]])
            stack.pop();

        if (stack.length === 0) ans = "-1 " + ans;
        else ans = stack[stack.length - 1] + 1 + " " + ans;

        stack.push(i);
    }

    return ans.trim().split(" ").map(Number);
}

function solve(arr) {
    let x = leftGreater(arr);
    let y = rightGreater(arr);

    let result = "";

    for (let i = 0; i < arr.length; i++) {
        result += x[i] + y[i] + " ";
    }

    return result;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let arr = newInput[1].trim().split(" ").map(Number);
    console.log(solve(arr));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`5
    5 4 1 3 2`);
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
