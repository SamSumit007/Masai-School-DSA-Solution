function compare(a, b) {
    return a - b;
}

function canCure(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] <= arr2[i]) return "No";
    }
    return "Yes";
}

function runProgram(input) {
    let newInput = input.split("\n");
    let arr1 = newInput[1].trim().split(" ").map(Number);
    let arr2 = newInput[2].trim().split(" ").map(Number);
    arr1.sort(compare);
    arr2.sort(compare);
    console.log(canCure(arr1, arr2));
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
