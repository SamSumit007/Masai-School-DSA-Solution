function greaterSum(arr) {
    let ans = 0;
    let garr = "";
    let stack = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        let ele = -1;
        while (stack.length != 0) {
            if (stack[stack.length - 1] > arr[i]) {
                ele = stack[stack.length - 1];
                break;
            } else
                stack.pop();
        }
        garr = ele + " " + garr;
        stack.push(arr[i]);

    }
    garr = garr.trim().split(" ").map(Number);
    for (let i = 0; i < garr.length; i++) {
        if (garr[i] != -1) {
            ans += arr[i];
        }
    }
    return ans;
}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    let t = Number(newInput[0].trim());
    for (let i = 1; i < t * 2; i += 2) {
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        console.log(greaterSum(arr));
    }

}
if (process.env.USERNAME === "getsu") {
    runProgram(`1
    5
    2 3 5 8 3`);
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