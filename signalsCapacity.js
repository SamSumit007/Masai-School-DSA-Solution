function findSignal(arr) {
    let stack = [];
    let result = [];
    let ans = "";
    for (let i = 0; i < arr.length; i++) {
        let count = 1;
        while (stack.length != 0) {
            if (arr[i] >= stack[stack.length - 1]) {
                count += result[stack.length - 1];
                stack.pop();
                result.pop();
            } else break;
        }
        stack.push(arr[i]);
        result.push(count);
        ans += count + " ";
    }
    return ans;
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
