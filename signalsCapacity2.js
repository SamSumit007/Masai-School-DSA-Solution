function findSignal(arr) {
    let stack = [];
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        while (stack.length != 0 && arr[i] >= arr[stack[stack.length - 1]])
            stack.pop();

        if (stack.length == 0) result.push(i + 1);
        else {
            result.push(i - stack[stack.length - 1]);
        }

        stack.push(i);
    }
    return result.join(" ");
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        console.log(findSignal(arr));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
    7
    100 80 60 70 60 75 85
    5
    3 5 0 9 8`);
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
