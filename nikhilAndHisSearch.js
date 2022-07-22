function upperBoundEqual(arr, x) {
    let index = -1;
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] >= x) {
            index = mid;
            high = mid - 1;
        } else low = mid + 1;
    }
    if (index == -1) return 0;
    else return arr.length - index;
}

function upperBoundGreater(arr, x) {
    let index = -1;
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] > x) {
            index = mid;
            high = mid - 1;
        } else low = mid + 1;
    }
    if (index == -1) return 0;
    else return arr.length - index;
}

function compare(a, b) {
    return a - b;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let arr = newInput[1].trim().split(" ").map(Number);
    let q = Number(newInput[2]);
    arr.sort(compare);
    let ans = [];
    for (let i = 3; i < 3 + q; i++) {
        let op = newInput[i].trim().split(" ").map(Number);
        let query = op[0];
        let x = op[1];
        if (query == 0) ans.push(upperBoundEqual(arr, x));
        else if (query == 1) ans.push(upperBoundGreater(arr, x));
    }
    console.log(ans.join("\n"));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`4
    1 2 3 4
    3
    0 5
    1 3
    0 3`);
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
