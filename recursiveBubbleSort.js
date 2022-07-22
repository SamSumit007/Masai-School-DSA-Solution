function bubbleSort(arr, n) {
    if (n == 1)
        return arr.join(" ");
    else {
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
        return bubbleSort(arr, n - 1);
    }


}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    let arr = newInput[1].trim().split(" ").map(Number);
    let n = arr.length;
    console.log(bubbleSort(arr, n));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`5
    3 5 0 9 8`);
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