function runProgram(input) {
    let newInput = input.trim().split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        let flag = false;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] % 2 == 0) {
                flag = true;
                break;
            }
        }

        if (flag)
            console.log("yes");
        else
            console.log("no");
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
    5
    4 3 2 1 5
    2
    1 3`);
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