function partyOrNot(arr, c, r) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (r >= arr[i]) {
            r -= arr[i];
            count++;
        } else break;
    }
    if (count >= c) return "Party";
    else return "Sad";
}

function runProgram(input) {
    let newInput = input.split("\n");
    let ncr = newInput[0].trim().split(" ").map(Number);
    let arr = newInput[1].trim().split(" ").map(Number);
    let c = ncr[1];
    let r = ncr[2];
    arr.sort((a, b) => a - b);

    console.log(partyOrNot(arr, c, r));
}
if (process.env.USERNAME === "") {
    runProgram(``);
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
