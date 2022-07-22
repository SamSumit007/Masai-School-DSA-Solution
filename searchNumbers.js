function upperBound(arr, ele) {
    let low = 0;
    let high = arr.length - 1;
    let ans = -1;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] <= ele) {
            ans = mid;
            low = mid + 1;
        } else high = mid - 1;
    }
    return ans;
}

function lowerBound(arr, ele) {
    let low = 0;
    let high = arr.length - 1;
    let ans = -1;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] >= ele) {
            ans = mid;
            high = mid - 1;
        } else low = mid + 1;
    }
    return ans;
}

function solve(arr, q) {
    let result = "";

    for (let i = 0; i < q.length; i++) {
        let [l, r] = q[i].trim().split(" ").map(Number);
        let lb = lowerBound(arr, l);
        let ub = upperBound(arr, r);
        if (lb > ub || lb === -1 || ub === -1) result += "0 ";
        else result += ub - lb + 1 + " ";
    }

    return result;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let arr = newInput[1].trim().split(" ").map(Number);
    let q = newInput.slice(3).map((el) => el.trim());

    arr.sort((a, b) => a - b);

    console.log(solve(arr, q));
}
if (process.env.USERNAME === "Ajit") {
    runProgram(`3
    13 12 -19
    2
    18 18
    -12 -4`);
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
