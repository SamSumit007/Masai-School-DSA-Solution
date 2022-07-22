function compare(a, b) {
    return a - b;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let arr1 = newInput[1].trim().split(" ").map(Number);
    let arr2 = newInput[2].trim().split(" ").map(Number);
    let max = 0;
    arr1.sort(compare);
    arr2.sort(compare);
    for (let i = 0; i < arr1.length; i++) {
        let temp = Math.abs(arr1[i] - arr2[i]);
        max = Math.max(temp, max);
    }
    console.log(max);
}
if (process.env.USERNAME === "getsu") {
    runProgram(`3
    4 -4 2
    4 0 5`);
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
