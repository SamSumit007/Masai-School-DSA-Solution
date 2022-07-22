function medianFunc(arr) {
    let n = arr.length;

    if (n % 2 === 1) {
        return arr[Math.floor(n / 2)];
    } else {
        let sum = Math.floor((arr[n / 2] + arr[n / 2 - 1]) / 2);
        return sum;
    }
}

function modeFunc(obj) {
    let max = 0;
    let ans = -1;
    for (let key in obj) {
        if (obj[key] > max) {
            max = obj[key];
            ans = key;
        }
    }
    return ans;
}

function solve(arr) {
    arr = arr.sort((a, b) => a - b);
    let sum = 0;
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) obj[arr[i]] = 1;
        else obj[arr[i]]++;
        sum += arr[i];
    }

    let mean = Math.floor(sum / arr.length);
    let median = medianFunc(arr);
    let mode = modeFunc(obj);

    return mean + " " + median + " " + mode;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        console.log(solve(arr));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
    10
    4 8 7 6 4 2 4 4 1 2
    6
    4 4 4 2 2 2`);
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
