function solve(arr) {
    let double;
    let missing;

    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) obj[arr[i]] = 1;
        else obj[arr[i]]++;
    }

    for (let i = 1; i <= arr.length; i++) {
        if (obj[i] === 2) double = i;

        if (!obj[i]) missing = i;
    }

    return missing + " " + double;
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
    runProgram(`3
    5
    1 2 3 3 4
    2
    1 1
    3
    1 2 2`);
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
