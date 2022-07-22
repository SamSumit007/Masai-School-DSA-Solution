function largestNegativeLeft(arr) {
    let stack = [];
    let result = "";
    let negative;

    for (let i = 0; i < arr.length; i++) {
        if (stack.length == 0)
            negative = 0;
        else {
            negative = stack[0];
            for (let j = 1; j < stack.length; j++)
                if (stack[j] > negative) {
                    negative = stack[j];
                }
        }
        result += negative + " ";
        if (arr[i] < 0)
            stack.push(arr[i]);

    }
    return result.trim();
}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        console.log(largestNegativeLeft(arr));
    }

}
if (process.env.USERNAME === "getsu") {
    runProgram(`1
    5
    -7 -52 91`);
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