function solve(arr, key) {
    let count = 0;
    for (let i = 0; i < arr.length - 2; i++) {
        let low = i + 1;
        let high = arr.length - 1;
        let ans = -1;
        while (low <= high) {
            let mid = low + Math.floor((high - low) / 2);
            let amount = Math.abs(Math.abs(arr[mid]) - Math.abs(arr[i]));
            if (amount <= key) {
                low = mid + 1;
                ans = mid;
            } else high = mid - 1;
        }
        if (ans !== -1) {
            let temp = (ans - i - 1) * (ans - i);
            count += temp / 2;
        }
    }
    return count;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let [, key] = newInput[0].trim().split(" ").map(Number);
    let arr = newInput[1].trim().split(" ").map(Number);
    console.log(solve(arr, key));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`4 2
    -3 -2 -1 0`);
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
