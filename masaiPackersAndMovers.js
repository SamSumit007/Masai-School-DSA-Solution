let ans = 0;

function masai(arr, k) {
    if (k == 0) {
        ans++;
        return
    } else if (k < 0)
        return
    else
        for (let i = 0; i < arr.length; i++) {
            masai(arr, k - arr[i])
        }

}

function runProgram(input) {
    let newInput = input.trim().split("\n");
    let kn = newInput[0].trim().split(" ").map(Number);
    let arr = newInput[1].trim().split(" ").map(Number);
    let k = kn[0];
    masai(arr, k);
    console.log(ans);

}
if (process.env.USERNAME === "getsu") {
    runProgram(`3 3
    1 2 3`);
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