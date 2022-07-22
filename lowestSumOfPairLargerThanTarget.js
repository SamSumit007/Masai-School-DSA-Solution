function lowestSum(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let ans = 99999999;
    while (low < high) {
        sum = arr[low] + arr[high];
        if (sum > target) {
            ans = Math.min(ans, sum);
            high--;
        } else low++;
    }

    return ans;
}

function compare(a, b) {
    return a - b;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let nt = newInput[i].trim().split(" ").map(Number);
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        arr.sort(compare);
        let target = nt[1];
        console.log(lowestSum(arr, target));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`1
    5 4
    1 3 5 9 13`);
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
