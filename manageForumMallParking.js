function compare(a, b) {
    return a - b;
}

function isPossible(arr, dep, k) {
    arr.sort(compare);
    dep.sort(compare);
    let count = 1;
    let maxCount = 0;
    let j = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < dep[j]) {
            count++;
        } else {
            count--;
            j++;
        }
        maxCount = Math.max(count, maxCount);
    }

    if (maxCount > k) return "Not Possible";
    else return "Possible";
}

function runProgram(input) {
    let newInput = input.split("\n");
    let k = Number(newInput[0]);
    let arr = newInput[1].trim().split(" ").map(Number);
    let dep = newInput[2].trim().split(" ").map(Number);

    console.log(isPossible(arr, dep, k));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`1
    1 3 5
    2 6 8`);
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
