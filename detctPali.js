function checkpali(arr) {
    var left = 0;
    var right = arr.length - 1;
    var count = 0;
    while (left < right) {
        if (arr[left] == arr[right]) {
            count++;

        }
        left++;
        right--;
    }
    if (count == Math.floor(arr.length / 2)) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}


function runProgram(input) {
    var arr = input.split("").map(Number);
    // console.log(arr)
    checkpali(arr);
}
if (process.env.USERNAME === "siddhesh") {
    runProgram(input);
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
