function arraySum(ac, el) {
    return ac + el;
}

function countOfZeroSumSubarrays(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length + 1; j++) {
            var temp = arr.slice(i, j);
            if (temp.reduce(arraySum) == 0)
                console.log(i, j - 1);
        }
    }

}

function runProgram(input) {
    var arr = input.trim().split(" ").map(Number);
    countOfZeroSumSubarrays(arr);

}
if (process.env.USERNAME === "getsu") {
    runProgram(`-4 2 -8 3 -3 -7 1 4 -5 7`);
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