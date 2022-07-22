function journeyCost(arr) {
    let current = arr[0];
    let currentIndex = 0;
    let total = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < current) {
            total += current * (i - currentIndex);
            current = arr[i];
            currentIndex = i;
        }
        if (i == arr.length - 1) total += current * (arr.length - currentIndex);
    }

    return total;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let arr = newInput[1].trim().split(" ").map(Number);
    console.log(journeyCost(arr));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`5
    4 7 8 3 4`);
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
