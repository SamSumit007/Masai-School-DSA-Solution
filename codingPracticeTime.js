function findTime(arr, total, key) {
    let temp = total;
    let tempArr = arr.slice(0);
    while (key !== 0) {
        total += temp;
        for (let i = 0; i < tempArr.length; i++) {
            if (total >= tempArr[i]) {
                tempArr[i] = total - tempArr[i];
                total -= arr[i];
            } else break;
        }
        key--;
    }
    return total;
}

function solve(arr, key) {
    let sum = 0;
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        max = Math.max(arr[i], max);
    }

    let low = max;
    let high = sum;
    let ans = Infinity;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        let amount = findTime(arr, mid, key);
        if (amount === -1) low = mid + 1;
        else {
            ans = Math.min(ans, mid);
            high = mid - 1;
        }
    }
    return ans;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let [, days] = newInput[0].trim().split(" ").map(Number);
    let arr = newInput[1].trim().split(" ").map(Number);
    console.log(solve(arr, days));
}
if (process.env.USERNAME === "") {
    runProgram(`5 3
    1 2 2 1 3`);
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
